import React from 'react';
import { useSelector } from 'react-redux';

import { selectEntryById } from './resultsSlice';
import EntryCard from '../EntryCard';

/** Takes an entry id, selects it from the redux state, and formats it with `Entry`.
 * @param entryId The id of the entry.
 */
export default function EntryById({ entryId }) {
  const entry = {
    ...useSelector(selectEntryById(entryId)),
    type: 'Misc'
  };
  return <EntryCard entry={entry} />
}
