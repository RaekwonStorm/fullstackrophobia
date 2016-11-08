'use strict';

import { connect } from 'react-redux';
import { generateRound } from '../action-creators/GameActions';
import Game from '../components/Game';

const mapStateToProps = function ({round}, ownProps) {
  return {
    round
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    generateRound: function () {
      dispatch(generateRound());
    }
  }
};

const statefulComponentCreator = connect(mapStateToProps, mapDispatchToProps);
const GameContainer = statefulComponentCreator(Game);
export default GameContainer;
