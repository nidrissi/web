import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Router, Switch, Route } from 'react-router-dom';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

// these components are always loaded
import Footer from './features/Footer';
import MyNavbar from './features/MyNavbar';

// state
import {
  selectIds,
  selectAuthors,
  selectTitles,
} from './features/SearchForm/searchFormSlice';
import { fetchEntries } from './features/Results/resultsSlice';

// lazy loaded components
const About = React.lazy(() => import('./features/About'));
const Err404 = React.lazy(() => import('./features/Err404'));
const Search = React.lazy(() => import('./features/Search'));
const Settings = React.lazy(() => import('./features/Settings'));

// GA
const history = createBrowserHistory()
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
});

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, []);

  // keep here to avoid re-fetching on route change
  const dispatch = useDispatch();
  const ids = useSelector(selectIds);
  const authors = useSelector(selectAuthors);
  const titles = useSelector(selectTitles);

  useEffect(() => {
    if (authors.length > 0 || ids.length > 0 || titles.length > 0) {
      dispatch(fetchEntries({ authors, ids, titles }));
    }
  }, [dispatch, ids, authors, titles])


  return (
    <Container>
      <Router history={history}>
        <MyNavbar />
        <Suspense fallback={<div className="text-center h1"><Spinner animation="grow" /> Loading...</div>}>
          <Switch>
            <Route path="/" exact>
              <Search />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="*">
              <Err404 />
            </Route>
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
