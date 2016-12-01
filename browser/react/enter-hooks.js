import axios from 'axios';
import store from './store';
import { setCohortsForNewGame } from './action-creators/GameActions';

export const getUsersCohorts = (nextState, replace, callback) => {
  // let { user } = store.getState();
  // need to pass hit route as /api/users/${user.id}/cohorts...the below is hardcoded
  axios.get(`/api/users/1/cohorts`)
    .then(res => res.data)
    .then(cohorts => {
      console.log('not concernin', cohorts);
      store.dispatch(setCohortsForNewGame(cohorts));
    });
}

