'use strict'

const router = require('express').Router();
const Game = require('../../db/models/game');
module.exports = router;

router.post('/', (req, res, next) => {
  Game.create(req.body)
    .then(game => res.json(game))
    .catch(next);
})
