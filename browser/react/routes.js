'use strict';

import React from 'react';
import {
  Router,
  Route,
  IndexRedirect,
  browserHistory
} from 'react-router';
import App from './components/App';
// import Main from './components/Main';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

  // these can go between lines 15 and 16 once we have those
  // front end components built out
  // <IndexRedirect to="/main" />
  // <Route path="/main" component={Main}/>
