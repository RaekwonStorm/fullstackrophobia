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

const dictionary = {
  A: 12, B: 5, C: 4, D: 3, E: 2, F: 4, G: 2, H: 7, I: 6, J: 1, K: 1, L: 3, M: 4,
  N: 2, O: 6, P: 3, Q: 1, R: 2, S: 8, T: 17, U: 2, V: 1, W: 7, X: 1, Y: 2, Z: 1
}

let freqArr = [];

for (let letter in dictionary) {
  freqArr = freqArr.concat(new Array(dictionary[letter]).fill(letter));
}


const pickRandomLettersByWeight = numLetters => {
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
