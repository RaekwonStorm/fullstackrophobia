'use strict';
const User = require('./user');
const Round = require('./round');
const Game = require('./game');
const game_users = require('./game_users');

Round.belongsTo(Game);
Game.hasMany(Round);
User.belongsToMany(Game, {through: game_users});
Game.belongsToMany(User, {through: game_users});

module.exports = {
  User: User,
  Round: Round,
  game_users: game_users
};
