'use strict';

import { combineReducers } from 'redux';
import { NEW_ROUND, SAVE_GAME, SET_COHORTS } from '../action-creators/GameActions';
import user from './user.reducer';
import game from './game.reducer';
import cohort from './cohort.reducer';

export default combineReducers({
  user,
  game,
  cohort
});
