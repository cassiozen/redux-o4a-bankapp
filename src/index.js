import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import bankReducer from './bankReducer';
import App from './App';
import './index.css';

const bankStore = createStore(bankReducer);

ReactDOM.render(
  <Provider store={bankStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
