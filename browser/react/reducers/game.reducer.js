import { NEW_ROUND, SAVE_GAME } from '../constants';

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_ROUND: {
      return Object.assign({}, state, { currentRound: action.round });
    }
    case SAVE_GAME: return Object.assign({}, state, action.game);
    default: return state;
  }
}
