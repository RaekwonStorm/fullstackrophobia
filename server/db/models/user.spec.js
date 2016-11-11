'use strict';

const User = require('./user');
const Round = require('./round');
const expect = require('chai').expect;

describe('User Model', function () {
  let newUser;

  before(function () {
    return User.create({
      first_name: 'Raekwon',
      last_name: 'Branstorm',
      username: 'rake4reelz@aol.com',
      cohort: '1606FSA'
    })
    .then(user => {
      newUser = user;
    })
    .then(() => {
      return Round.bulkCreate([
        {
          acronym: 'FAMP',
          answer: 'Fiddle all mammals pleasurably',
          winner: newUser.id
        },
        {
          acronym: 'CIAFATC',
          answer: 'Can I Also Feast At Thine Castle',
          winner: newUser.id
        },
        {
          acronym: 'TBT',
          answer: 'Thank Buddha today',
          winner: 76
        }
      ]);
    });
  });

  after(function () {
    return newUser.destroy()
    .then(() => {
      return Round.destroy({where: {}})
    })
  });

  describe('instanceMethods', function () {

    describe('fullname method', function () {
      it('creates fullname from first name and last name', function () {
        expect(newUser.getFullName()).to.be.equal('Raekwon Branstorm');
      });
    });

    describe('getWins method', function () {
      it('retrieves the number of rounds a user has won', function () {
        return Round.findAll({where: {winner: newUser.id}})
        .then(rounds => {
          expect(rounds).to.have.lengthOf(2);
        });
      })
    })
  });

});
