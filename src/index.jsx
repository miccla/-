import React from 'react';
import { Router, Route, } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import Login from './components/Login';
import App from './components/App';

React.render((
  <Router history={history}>
    <Route path="/login" component={Login}/>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('root'));


