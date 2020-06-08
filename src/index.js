import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import './common/template/custom.css'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

