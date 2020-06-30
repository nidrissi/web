import { createSlice } from '@reduxjs/toolkit';

import { arxivSearch } from '../../api/arxiv';

export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    error: null,
    errorShown: false,
    isLoading: false,
    entries: [],
    totalEntriesFound: null,
  },
  reducers: {
    getEntriesStart: state => { state.isLoading = true },
    getEntriesSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.errorShown = true;
      state.entries = action.payload.entries;
      state.totalEntriesFound = action.payload.totalEntriesFound;
    },
    getEntriesError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.errorShown = false;
      state.entries = [];
    },
    closeError: state => {
      state.errorShown = true;
    }
  }
});

const { getEntriesStart, getEntriesSuccess, getEntriesError } = resultsSlice.actions;
export const { closeError } = resultsSlice.actions;

export const selectEntries = state => state.results.entries;
export const selectTotalEntriesFound = state => state.results.totalEntriesFound;
export const selectIsLoading = state => state.results.isLoading;
export const selectError = state => state.results.error;
export const selectErrorShown = state => state.results.errorShown;

export default resultsSlice.reducer;

export const fetchEntries = (query, settings) => async dispatch => {
  try {
    dispatch(getEntriesStart());
    const { entries, totalEntriesFound } = await arxivSearch(query, settings);
    dispatch(getEntriesSuccess({ entries, totalEntriesFound }));
  } catch (err) {
    dispatch(getEntriesError(err.toString()))
  }
};
