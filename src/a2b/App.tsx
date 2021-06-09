import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// these components are always loaded
import Search from "./features/Search";
import Settings from "./features/Settings";
import DIY from "./features/DIY";

// state
import { initialState, saveSettings, selectSettings } from "./features/Settings/settingsSlice";
import {
  selectIds,
  selectAuthors,
  selectTitles,
} from "./features/SearchForm/searchFormSlice";
import { fetchEntries } from "./features/Results/resultsSlice";
import Title from "./features/Title";

const App: React.FC<{}> = () => {
  // keep here to avoid re-fetching on route change
  const dispatch = useDispatch();
  // query
  const ids = useSelector(selectIds);
  const authors = useSelector(selectAuthors);
  const titles = useSelector(selectTitles);
  // settings
  const settings = useSelector(selectSettings);
  const { maxResults, sortBy, sortOrder } = settings;
  useEffect(() => {
    const persistentState = localStorage.getItem("settings");
    if (persistentState) {
      // in case I have introduced new settings since the last time the user
      // has used the app, I still want to use defaultInitialState as fallback
      dispatch(saveSettings({ ...initialState, ...JSON.parse(persistentState) }))
    }
  }, []);

  useEffect(() => {
    if (authors.length > 0 || ids.length > 0 || titles.length > 0) {
      dispatch(fetchEntries());
    }
  }, [dispatch, ids, authors, titles, maxResults, sortBy, sortOrder]);

  // the page we are currently on
  const [currentPage, setCurrentPage] = useState("Search");
  const pageAssociation = {
    "Search": <Search />,
    "Settings": <Settings />,
    "DIY": <DIY />,
  }

  return (
    <>
      <Title setCurrentPage={setCurrentPage} />
      {pageAssociation[currentPage]}    </>
  );
};
export default App;
