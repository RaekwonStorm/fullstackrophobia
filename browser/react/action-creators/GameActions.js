export const NEW_ROUND = 'NEW_ROUND';
export const SAVE_ROUND = 'SAVE_ROUND';
export const GENERATE_ROUND = 'GENERATE_ROUND';

export const newRound = function (round) {
  const action = {
    type: NEW_ROUND,
    round: round
  };
  return action;
};

export const saveRound = function () {
  const action = {
    type: SAVE_ROUND,
  };
  return action;
};

export const generateRound = function () {
  const thunk = function (dispatch) {
    let numLetters = Math.ceil(Math.random() * 5) + 2;
    let acronym = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, numLetters).toUpperCase();
    let round = {
      acronym,
      winner: null,
      cohort: null
    }
    dispatch(newRound(round));
  }
  return thunk;
}
