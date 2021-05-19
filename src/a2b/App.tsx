import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// these components are always loaded
import { Page } from "./Page";

// state
import { initialState, saveSettings, selectSettings } from "./features/Settings/settingsSlice";
import {
  selectIds,
  selectAuthors,
  selectTitles,
} from "./features/SearchForm/searchFormSlice";
import { fetchEntries } from "./features/Results/resultsSlice";
import Navbar from "./features/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// lazy loaded components
const DIY = React.lazy(() => import("./features/DIY"));
const Search = React.lazy(() => import("./features/Search"));
const Settings = React.lazy(() => import("./features/Settings"));

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
      <Navbar setCurrentPage={setCurrentPage} />
      <Suspense
        fallback={
          <div className="text-center text-xl font-bold">
            <FontAwesomeIcon icon={faSpinner} spin className="mr-1" />
            Loading…
          </div>
        }
      >
        {pageAssociation[currentPage]}
      </Suspense>
    </>
  );
};
export default App;
