import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import store from './store';
import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClipboard, faCog, faProjectDiagram, faQuestion, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faClipboard, faCog, faProjectDiagram, faQuestion, faSearch);

ReactGA.initialize('UA-170792065-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
