'use strict';

const User = require('./user');
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
    });
  });

  after(function () {
    return newUser.destroy();
  });

  describe('instanceMethods', function () {
    it('fullname function works as intended', function () {
      expect(newUser.getFullName()).to.be.equal('Raekwon Branstorm');
    });
  });

});
