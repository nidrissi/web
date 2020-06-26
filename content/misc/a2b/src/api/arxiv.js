// see https://arxiv.org/help/api/user-manual

function getUniqueNamedTag(xmlEntry, tag) {
  return xmlEntry.getElementsByTagName(tag).item(0).textContent.trim();
}

function parseEntry(xmlEntry) {
  // the end result
  const entry = {};

  // authors
  entry.authors = []
  for (let a of xmlEntry.getElementsByTagName('author')) {
    entry.authors.push(a.textContent.trim())
  }

  // title
  try {
    entry.title = getUniqueNamedTag(xmlEntry, 'title').replace(/\s+/gm, " ")
  } catch (err) {
    // With id_list, if there is no entry for a given id, arXiv
    // returns a malformed empty entry instead of an error.
    // No, it doesn't make any sense.
    return null
  }

  // date
  entry.year = getUniqueNamedTag(xmlEntry, 'published').substr(0, 4);

  // id
  const idURL = getUniqueNamedTag(xmlEntry, 'id');
  // the URL has the form http://arxiv.org/abs/{id}v{version}
  const regex = /arxiv.org\/abs\/(?<id>.+)v\d+/;
  const found = idURL.match(regex);
  entry.id = found.groups.id;

  // link to PDF
  for (let l of xmlEntry.getElementsByTagName('link')) {
    if (l.getAttribute('title') === 'pdf') {
      entry.pdfLink = l.getAttribute('href');
    } else if (l.getAttribute('title') === 'doi') {
      entry.doi = l.getAttribute('href').replace('http://dx.doi.org/', '')
    }
  }

  return entry;
}

// If there is an error, arXiv returns a single error entry.
// In this case we just throw the error for fetchEntries to deal with.
function checkEntryForErrors(xmlEntry) {
  for (let l of xmlEntry.getElementsByTagName('link')) {
    if (l.getAttribute('href').match('api/errors')) {
      const error = getUniqueNamedTag(xmlEntry, 'summary');
      throw (Error(`arXiv reported: '${error}'`));
    }
  }
}

function buildSearchQueryPart(list, label) {
  let result = '';
  if (list.length > 0) {
    result = list.map(encodeURIComponent).map(a => `${label}:"${a}"`).join('+AND+');
  }
  return result;
}

function buildURLQuery({ authors, ids }) {
  const base = 'https://export.arxiv.org/api/query?';

  let idQuery = '';
  if (ids.length > 0) {
    idQuery = ';id_list=' + encodeURIComponent(ids.join(','))
  }

  const searchQuery = [
    buildSearchQueryPart(authors, 'au'),
  ].filter(s => s.length > 0).join('+AND');
  const fullSearchQuery = 'search_query=' + searchQuery + '&sortBy=submittedDate&sortOrder=descending';

  return base + fullSearchQuery + idQuery;
}

export async function arxivSearch(query) {
  const urlQuery = buildURLQuery(query);
  const response = await fetch(urlQuery);
  const xmlData = await response.text();

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, "text/xml");
  const xmlEntries = xmlDoc.getElementsByTagName("entry");

  const entries = [];
  for (let w of xmlEntries) {
    checkEntryForErrors(w);
    const parsedEntry = parseEntry(w);
    if (parsedEntry !== null) {
      entries.push(parsedEntry);
    }
  }

  return entries;
}
