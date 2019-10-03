import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Containers/App/App';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
