import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';

const API_KEY = process.env;
console.log(API_KEY);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
  , document.querySelector('.container'));
