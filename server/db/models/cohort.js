'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('Cohort', {
  name: {
    type: DataTypes.STRING
  }
});
