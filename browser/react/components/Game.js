'use strict';

import React from 'react';

export default ({generateRound, game}) => {

  const { currentRound } = game;

  return (
    <div>
      <h1>Game State</h1>
      <button onClick={generateRound}>Click to generate round</button>
      {
        currentRound ? <h1>{currentRound.acronym}</h1> : null
      }
    </div>
  )
}
