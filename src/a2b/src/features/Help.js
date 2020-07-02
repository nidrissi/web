import React from 'react';

const faq = [
  {
    title: 'This program',
    entries: [
      {
        key: 'what',
        q: 'What (is this)?',
        a: <span>This program fetches entries from the <a href="https://arxiv.org">arXiv</a> and formats them to be used with BibLaTeX.</span>
      },
      {
        key: 'who',
        q: 'Who (wrote it)?',
        a: <span>I am <a href="https://idrissi.eu">Najib Idrissi</a>, a mathematician.</span>
      },
      {
        key: 'why',
        q: 'Why (did you write this)?',
        a: 'There are several programs around for making a bib(la)tex entry out of an arXiv preprint. However, all the ones I found have issues: URLs are displayed twice, author names are not handled correctly (see below), no biblatex support, “arXiv” in the journal field where it doesn\'t belong, etc. I had been using a homemade Perl script for a long time, but it lacked some features and not as easily usable. So, I wrote this.'
      },
      {
        key: 'how',
        q: 'How (does it work)?',
        a: <span>It's mainly written in JavaScript, using React, Redux (+ React Redux & Redux Toolkit), React Router, the Bootstrap framework, and FontAwesome for the icons. It uses the <a href="https://arxiv.org/help/api/index">arXiv API</a> (with all its quirks…) to fetch entries.</span>
      },
      {
        key: 'license',
        q: "What license is this program?",
        a: <span>
             This program is free software: you can redistribute it and/or modify it under the terms of the <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU Affero General Public License</a> as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
             <br />
             The source code is <a href="https://github.com/nidrissi/arxiv2bib">available on GitHub</a>.
           </span>
      },
      {
        key: 'work?',
        q: 'Does it work?',
        a: <span>
             I guess it does, however it is in a preliminary state. There is little error checking in the code, and no tests. In the words of the AGPLv3:
             <br />
             This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details.
           </span>
      },
      {
        key: 'bug',
        q: 'I found a bug!',
        a: <span>Please <a href="https://github.com/nidrissi/arxiv2bib/issues">report an issue on Github</a> (or contact me by email). I cannot really promise anything, though.</span>
      },
    ],
  },
  {
    title: 'Output',
    entries: [
      {
        key: 'format',
        q: 'What format is the output?',
        a: <span>
             The output is formatted to be used with <a href="https://www.ctan.org/pkg/biblatex">BibLaTeX</a>. BibLaTeX is a more modern approach to bibliography than LaTeX's default bibliography support and has many advantages over it. In particular, its database format is well-defined, as opposed to the default format, where a field can have different meanings depending on the chosen style (the <code>.bst</code> file that you choose with <code>\bibliographystyle</code>). It is able to accurately represent an arXiv entry, while the default styles cannot.
           </span>
      },
      {
        key: 'difference',
        q: 'What is the difference between BibLaTeX, natbib, Biber, BibTeX...?',
        a: <span>
             BibLaTeX is a LaTeX package used to format bibliography. Its “original” counterpart was the <code>\bibliography</code> / <code>\printbibliography</code> in standard LaTeX, the <code>thebibliography</code> environment, or packages such as <code>natbib</code>.
             <br />
             BibTeX and Biber are two external programs that convert a <code>.bib</code> file into a <code>.bbl</code> file readable by LaTeX. One of the main advantages of Biber over BibTeX is its support of Unicode characters. <a href="https://tex.stackexchange.com/q/25701/14965">Read more about this on TeX.SE.</a>
           </span>
      },
      {
        key: 'usual',
        q: 'But I want to use the usual bibliography package!',
        a: <span>I plan to add support for it in the future. In the meantime, <a href="https://github.com/nidrissi/arxiv2bib">feel free to contribute</a> 😃. But be aware that unlike BibLaTeX, the <code>.bst</code> style you choose for your article will influence greatly the required format for the bibliography entry.</span>
      },
    ],
  },
  {
    title: 'Common problems & manual interventions',
    entries: [
      {
        key: 'surnames',
        q: 'How does the program handle surnames?',
        a: <span>
             ArXiv stores author names as e.g. "Jane H. Doe." However, BibLaTeX expects surnames to be separated from given names, e.g. "Doe, Jane H." This allows it to make special formatting of names, for example by automatically abbreviating given names ("J. H. Doe") or capitalizing surnames in some styles (e.g. in French: "Jane H. Dᴏᴇ").
             <br />
             To deal with this, I made a very simple and sometimes wrong assumption: the last word in a name is the surname, everything else is the given name. I am aware that this fails when people have two or more surname (e.g. my own full name, “Najib Idrissi Kaïtouni”... or for example in many Spanish names), or when there is an addendum such as "John Doe, Jr." or "Jean de la Fontaine." Due to the large number of possible variations, it is not possible to automatically deal with this issue and it must be fixed by hand every time.
             <br />
             If you feel strongly enough about this, you can try to contact arXiv so that they start storing author names in a more adequate fashion; there is nothing I can do on my end.
           </span>
      },
      {
        key: 'pubstate',
        q: <span>What is <code>pubstate</code>?</span>,
        a: <span>In BibLaTeX, it indicates the publication state of the entry. For a preprint, the correct value is <code>prepublished</code>. Other possible values include <code>submitted</code>, <code>forthcoming</code>, <code>inpress</code>, and so on (see the BibLaTeX manual). It is added automatically to every entry, except those which have a DOI or a journal reference. Note that the author may have forgotten to update these fields after publication, so the value may be wrong: if the paper is already published, update or remove <code>pubstate</code> as appropriate.</span>,
      },
      {
        key: 'howpublished',
        q: <span>What is <code>howpublished</code>?</span>,
        a: <span>In BibLaTeX, this denotes a free-form field that indicates how an entry was published. It is populated with the journal reference if present in arXiv. Consider converting entries with a journal reference to a more appropriate entry type such as <code>@article</code>, <code>@book</code>, <code>@inproceedings</code>…</span>
      },
      {
        key: 'comment',
        q: <span>What is <code>comment</code>?</span>,
        a: <span>
             This field is populated from the comment left by the author(s) on arXiv. It is meaningless to BibLaTeX and will not be rendered in the bibliographical entry. It sometimes contains information that should go in other fields:
             <ul>
               <li>"XX pages": should go in the <code>pagetotal</code> field (used by default for <code>@book</code> entries only, other types requires special configuration);</li>
               <li>"to appear in J. XYZ": convert the entry to <code>@article</code>, put the journal in <code>journaltitle</code>, and set <code>pubstate</code> to <code>forthcoming</code>;</li>
               <li>other: consider adding them to the <code>note</code> field – which will be rendered into the bibliographical entry – if relevant.</li>
             </ul>
           </span>
      },
      {
        key: 'capitals',
        q: 'Do you deal with capital letters?',
        a: <span>No. If a title contains a letter that should always be kept capitalized (e.g. at the beginning of a proper noun), then you should add braces around that letter. This should not be done for <em>every</em> capital letter in the title. Indeed, in some styles/languages, titles must follow “title case” (titles look like “A Theory of Everything and Beyond”), but in other styles/languages they must <em>not</em> follow it (e.g. in French titles must look like “Théorie du tout et du reste”). BibLaTeX already handles this automatically; don't force its hand. It is not possible to automatically know if a word is a proper noun or not, so this must be dealt with manually.</span>
      },
      {
        key: 'math',
        q: 'Do you deal with math?',
        a: <span>In titles, everything between a pair of dollar signs is enclosed by braces: <code>$...$</code> becomes <code>{'{$...$}'}</code>. This is relatively crude and may require manual intervention.</span>
      },
    ],
  }
];

export default function Help() {
  return (
    <div>
      <h1>Help</h1>
      {faq.map(({ title, entries }) => (
        <React.Fragment key={title}>
          <h2>{title}</h2>
          <dl>
            {entries.map(({ key, q, a }) => (
              <React.Fragment key={key}>
                <dt>{q}</dt>
                <dd>{a}</dd>
              </React.Fragment>
            ))}
          </dl>
        </React.Fragment>
      ))}
      <p className="text-muted"><i>(More help is coming...)</i></p>
    </div>
  )
}
