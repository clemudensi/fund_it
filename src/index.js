import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import {  createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import "assets/scss/material-kit-pro-react.css";

const hist = createBrowserHistory();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}><App /></Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
