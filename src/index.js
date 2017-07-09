import React from 'react';
import ReactDOM from 'react-dom';
import {  injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import store from './store/store';

injectGlobal`
   :root {
      --basic-font-size: calc(0.9rem + (1.3 - 0.9) * ((100vw - 18.75em) / (75 - 18.75)));
      --line-height: 1.4;
      --vertical-rhytm: calc(var(--basic-font-size)*var(--line-height));
      --quicksand: 'Quicksand', sans-serif;
    }
   html {
      font-size: var(--basic-font-size);
      font-family: var(--quicksand);
      font-kerning: normal;
      text-rendering: geometricPrecision;
      font-variant-numeric: oldstyle-nums;
      ${'' /* font-size-adjust: 0.5; */}
      font-variant-ligatures: common-ligatures;
      font-kerning: normal;
    }`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
