'use strict';

const expect = require('chai').expect;
const sigmoid = require('../gradientDecent/sigmoid.js');

let testTheta = [2, 3, 4, 5];
let testRow = [2, 3, 4, 5];


describe('Initial test for sigmoid functions', () => {
  describe('Tests standard sigmoid function of theta and xVector to first degree', () => {
    it('Should return a single whole value', () => {
      let sig = sigmoid.normal;
      let yHypoth = sig(testTheta, testRow);
      expect(yHypoth).to.equal(40);

    });
  });
});
