import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  selectEntries,
  selectTotalEntriesFound,
} from './resultsSlice';
import { selectMode } from '../Settings/settingsSlice';

import Entry from './Entry';

export default function EntryList() {
  const entries = useSelector(selectEntries);
  const mode = useSelector(selectMode);

  const uniqueEntries = [...new Set(entries)];
  const renderedEntries = uniqueEntries.map(e =>
    <Entry
      key={e.id}
      entry={e}
    />
  );

  const outerRef = useRef();
  const onClickCopyAll = _e => {
    const result = [];
    for (const pre of outerRef.current.getElementsByTagName('pre')) {
      result.push(pre.innerText);
    }
    navigator.clipboard.writeText(result.join("\n\n"))
  };

  const totalEntriesFound = useSelector(selectTotalEntriesFound);
  const totalText =
        totalEntriesFound !== null
        ? <>
            Showing {entries.length} entries out of {totalEntriesFound} in total.
            {mode === 'bibtex' ? <span className="text-danger"> Running in legacy BibTeX mode. Check entries for issues.</span> : null}
          </>
        : null;

  return (
    <div ref={outerRef}>
      <Alert
        show={totalEntriesFound !== null}
        variant="success"
      >
        <Alert.Link
          onClick={onClickCopyAll}
          className="float-right"
        >
          <FontAwesomeIcon icon="clipboard" /> Copy all
        </Alert.Link>
        <FontAwesomeIcon icon="check" className="mr-1" />
        {totalText}
      </Alert>
      {renderedEntries}
    </div>
  );
}
