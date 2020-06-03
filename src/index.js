import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './component/App';
import rootReducer from './reducers/index';
// import ALL_DOGS from './actions';

const store = createStore(rootReducer,
  window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
