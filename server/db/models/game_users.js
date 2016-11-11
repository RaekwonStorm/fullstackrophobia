'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('game_users', {
  score: {
    type: DataTypes.INTEGER
  }
});

