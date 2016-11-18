'use strict';

import React from 'react';
import {
  Router,
  Route,
  IndexRedirect,
  browserHistory
} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Ranking from './components/Ranking';
import NewGame from './components/NewGame';
import GameContainer from './containers/GameContainer';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home}/>
      <Route path="/ranking" component={Ranking}/>
      <Route path="/game" component={GameContainer}/>
      <Route path="/newgame" component={NewGame}/>
    </Route>
  </Router>
);

  // these can go between lines 15 and 16 once we have those
  // front end components built out
  // <IndexRedirect to="/main" />
  // <Route path="/main" component={Main}/>
