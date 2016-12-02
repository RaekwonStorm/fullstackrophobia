'use strict';
const User = require('./user');
const Round = require('./round');
const Game = require('./game');
const Cohort = require('./cohort');
const game_users = require('./game_users');

Round.belongsTo(Game);
Game.hasMany(Round);
Game.hasOne(Cohort);
Cohort.belongsToMany(User, {through: 'cohort_users'});
User.belongsToMany(Cohort, {through: 'cohort_users'});
User.belongsToMany(Game, {through: game_users});
Game.belongsToMany(User, {through: game_users});

module.exports = {
  User: User,
  Round: Round,
  Cohort: Cohort,
  game_users: game_users
};
