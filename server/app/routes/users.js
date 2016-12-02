'use strict'

const router = require('express').Router();
const User = require('../../db/models/user');
module.exports = router;

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(game => res.json(game))
    .catch(next);
})


router.get('/:id/cohorts', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      console.log('sup yo', user.getCohorts);
      return user.getCohorts();
    })
    .then(cohorts => res.json(cohorts))
    .catch(next);
})
