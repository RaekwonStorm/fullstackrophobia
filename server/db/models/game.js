'use strict';

const db = require('../db');
const User = require('./user');
const DataTypes = db.Sequelize;

module.exports = db.define('Game', {
  name: {
    type: DataTypes.STRING
  },
  creator_id: {
    type: DataTypes.INTEGER
  }
}, {
  defaultScope: {
    include: [User]
  }
});

