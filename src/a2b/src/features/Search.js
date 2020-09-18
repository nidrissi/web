import React from 'react';

import Results from './Results';
import SearchForm from './SearchForm';

/** The full search component. Contains a `SearchForm` and a `Results` components. */
export default function Search() {
  return (
    <div>
      <h1>Search arXiv</h1>
      <SearchForm />
      <Results />
    </div>
  )
}
