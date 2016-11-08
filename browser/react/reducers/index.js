'use strict';

import { combineReducers } from 'redux';
import { NEW_ROUND } from '../action-creators/GameActions';

function GameReducer (state = {}, action ) {
  switch (action.type) {
    case NEW_ROUND: return Object.assign({}, state, action.round);
    default: return state;
  }
}

export default combineReducers({ round: GameReducer});
