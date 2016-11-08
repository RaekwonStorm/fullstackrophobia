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

const pickRandomLettersByWeight = numLetters => {
  const dictionary = {
    A: 9, B: 3, C: 3, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 2, L: 4, M: 3,
    N: 6, O: 8, P: 3, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
  }

  let freqArr = [];

  for (let letter in dictionary) {
    freqArr = freqArr.concat(new Array(dictionary[letter]).fill(letter));
  }

  let output = '';

  for (let i = 0; i < numLetters; i++) {
    output += freqArr[Math.floor(Math.random() * freqArr.length)];
  }

  return output;
}

export const generateRound = function () {
  const thunk = function (dispatch) {
    let numLetters = Math.ceil(Math.random() * 5) + 2;
    let acronym = pickRandomLettersByWeight(numLetters);
    let round = {
      acronym,
      winner: null,
      cohort: null
    }
    dispatch(newRound(round));
  }
  return thunk;
}
