import { createSlice } from '@reduxjs/toolkit';

const defaultInitialState = {
  includeFile: true,
  filePrefix: true,
  includePrimaryCategory: false,
  includeVersion: false,
  sortBy: 'submittedDate',
  sortOrder: 'descending',
  maxResults: 10
};

const persistentState = localStorage.getItem('settings');

// in case I have introduced new settings since the last time the user
// has used the app, I still want to use defaultInitialState as fallback
const initialState = persistentState ? { ...defaultInitialState, ...JSON.parse(persistentState) } : defaultInitialState;

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState,
  reducers: {
    setIncludeFile: (state, action) => {
      state.includeFile = action.payload
    },
    setFilePrefix: (state, action) => {
      state.filePrefix = action.payload
    },
    setIncludePrimaryCategory: (state, action) => {
      state.includePrimaryCategory = action.payload;
    },
    setIncludeVersion: (state, action) => {
      state.includeVersion = action.payload;
    },
    setSortBy : (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder : (state, action) => {
      state.sortOrder = action.payload;
    },
    setMaxResults: (state, action) => {
      state.maxResults = action.payload;
    }
  }
});
export default settingsSlice.reducer;

export const selectIncludeFile = state => state.settings.includeFile;
export const selectFilePrefix = state => state.settings.filePrefix;
export const selectIncludePrimaryCategory = state => state.settings.includePrimaryCategory;
export const selectIncludeVersion = state => state.settings.includeVersion;

export const selectSortBy = state => state.settings.sortBy;
export const selectSortOrder = state => state.settings.sortOrder;
export const selectMaxResults = state => state.settings.maxResults;

export const { setIncludeFile, setFilePrefix, setIncludePrimaryCategory, setIncludeVersion, setMaxResults, setSortBy, setSortOrder } = settingsSlice.actions;

export function saveSettings() {
  return (_dispatch, getState) => {
    const { settings } = getState();
    const json = JSON.stringify(settings);
    localStorage.setItem('settings', json);
  }
}
