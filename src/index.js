import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import './index.css';

import "assets/scss/material-kit-pro-react.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}><App /></Router>,
  document.getElementById('root')
);
