/**
 * See documentation on Concurrent Mode, Strict Mode & SWRConfig below for more information:
 *
 * https://reactjs.org/docs/concurrent-mode-intro.html
 * https://reactjs.org/docs/strict-mode.html
 * https://github.com/zeit/swr
 */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';

import App from './App';

import fetch from './lib/fetch';
import * as serviceWorker from './lib/serviceWorker';

import './css/index.css';

// Enable concurrent mode with ReactDOM.createRoot
const rootEl = document.getElementById('app');
const root = ReactDOM.createRoot(rootEl);

root.render(
  <StrictMode>
    <SWRConfig
      value={{
        fetcher: fetch
      }}
    >
      <App />
    </SWRConfig>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
