import React, { useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function formatEntry(entry) {
  // deal with authors
  // transforms something like ['Jane Doe', 'John Dew'] into "Doe, Jane and Dew, John"
  // and key = "DoeDew"
  const splitAuthors = entry.authors.map(a => a.split(' '));
  const key = splitAuthors.map(l => l[l.length - 1]).join('') + entry.year.toString();
  const authorList = splitAuthors.map(l => l[l.length - 1] + ', ' + l.slice(0, -1).join(' ')).join(' and ');

  const fileLink = (
    <a href={entry.pdfLink}>
      {key[0]}/{key}.pdf
    </a>
  );

  // the key is displayed
  const pairing = {
    author: authorList,
    date: entry.year,
    title: entry.title,
    eprint: entry.id,
    eprinttype: 'arXiv',
    doi: entry.doi,
    pubstate: entry.doi ? null : 'prepublished',
    file: fileLink,
    comment: entry.comment
  };
  // delete all empty values
  Object.keys(pairing).forEach(k => !pairing[k] && delete pairing[k]);

  // the longest key
  const maxKeyLength = Math.max(...Object.keys(pairing).map(s => s.length));

  // not great but better than before...
  return (
    <React.Fragment>
      {`@Misc{${key},\n`}
      {Object.keys(pairing).map(key => (
        <React.Fragment key={key}>
          {'  ' /* indent by 2 */}
          {key}
          {' '.repeat(maxKeyLength - key.length)}
          {' = {'}
          {pairing[key]}
          {"},\n"}
        </React.Fragment>
      ))}
      {'}'}
    </React.Fragment>
  );
}

export default function Entry({ entry }) {
  // for the clipboard
  const preRef = useRef();

  const onClickCopy = _e => {
    navigator.clipboard.writeText(preRef.current.innerText)
  };

  return (
    <Alert variant="dark">
      <span className="float-right">
        <Button onClick={onClickCopy}>
          <FontAwesomeIcon icon="clipboard" /> Copy
        </Button>
      </span>
      <pre
        ref={preRef}
        className="m-0"
      >
        {formatEntry(entry)}
      </pre>
    </Alert>
  )
}
