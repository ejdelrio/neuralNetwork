'use strict';
/*
Representation of various hypothesis functions.
Split between linear and logistic regressions, each hypothisis
requires a sigmoid function that inteprets the best fit line.
eventual, all will take 1 to n degree polynomial values
*/
const hypoth = module.exports = {};

hypoth.linearHypoth = function(thetaVector, xVector, sigmoid, deg=1) {
  return sigmoid(thetaVector, xVector, deg);
};

hypoth.logHypoth = function(thetaVector, xVector, sigmoid, deg=1) {
  let sigmoidOuput = sigmoid(thetaVector, xVector, deg) * -1;
  let denom = 1 + Math.pow(Math.e, sigmoidOuput);
  return 1 / denom;
};

hypoth.regularization = function(lambda, thetaVector, currentIndex) {
  if(!lambda) return 0;
  if(typeof lambda !== 'number') return new Error('Lambda must be an integer or float!');
  let thetaJ = thetaVector[currentIndex];
  return lambda * thetaJ;
};
