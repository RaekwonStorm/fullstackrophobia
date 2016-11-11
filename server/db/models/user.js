'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;
const Round = require('./round');

module.exports = db.define('User', {
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
  },
  cohort: {
    type: DataTypes.STRING
  }
}, {
  instanceMethods: {
    getFullName: function () {
      return `${this.first_name} ${this.last_name}`;
    },
    getWins: function () {
      return Round.find({
        where: {
          winner: this.id
        }
      });
    }
  }
});

