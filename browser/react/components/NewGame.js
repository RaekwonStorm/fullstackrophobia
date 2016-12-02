'use strict';

import React from 'react';

export default ({ cohorts, createGame }) => (
      <form className="form-group" onSubmit={createGame} >
        <label>
          Game Name:
          <input className='form-control' type='text' name='name' />
        </label>
        <label>
          Cohort:
          <select className='form-control' type='text' name='cohort'>
            {
              cohorts.length && cohorts.map(cohort => (
                <option key={cohort.id} value={cohort.name}>{cohort.name}</option>
              ))
            }
          </select>
        </label>
        <input type='submit' className='btn btn-success' />
      </form>

)
