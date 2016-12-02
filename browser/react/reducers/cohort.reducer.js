import {SET_COHORTS} from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case SET_COHORTS: return Object.assign({}, state, action.cohorts);
    default: return state;
  }
}
