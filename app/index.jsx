import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import router from './routes'

import Index from './components/index';

let store = configureStore();
let rootElement = document.getElementById('example');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
/*const app = document.getElementById('example');
app.innerHTML = '<h1>hello world!!</h1>';*/
