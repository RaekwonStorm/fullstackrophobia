'use strict'

const router = require('express').Router();
module.exports = router;

router.use('/game', require('./game'));
router.use('/users', require('./users'));

router.use(function(req, res) {
  res.status(404).end();
});
