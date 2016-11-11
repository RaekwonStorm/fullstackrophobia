'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('Round', {
  acronym: {
    type: DataTypes.STRING
  },
  answer: {
    type: DataTypes.STRING
  },
  winner: {
    type: DataTypes.INTEGER
  }
});

