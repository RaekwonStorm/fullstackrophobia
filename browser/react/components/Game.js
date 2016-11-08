'use strict';

import React from 'react';

export default ({generateRound, round}) => (
      <div>
        <h1>Game State</h1>
        <button onClick={generateRound}>Click to generate round</button>
        {
          round ? <h1>{round.acronym}</h1> : null
        }
      </div>

)
