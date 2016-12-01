// import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createGame } from '../action-creators/GameActions';
import NewGame from '../components/NewGame';

const mapStateToProps = function({ cohorts }, ownProps) {
  return {
    cohorts
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    createGame: function(game) {
      dispatch(createGame(game))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
