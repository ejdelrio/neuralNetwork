'use strict';

const cost = module.exports = {};

cost.regression = function(theta, xVector, currnetIndex, hypoth, deg=1) {
  console.log('__COST_REGRESSION__\n');

  let outerX = currnetIndex === 0 ?
  1 : xVector[currnetIndex - 1];
  let yActual = xVector[xVector.length - 1];
  let yHypoth = hypoth(theta, xVector, deg);
  return (yHypoth - yActual) * outerX;
};

cost.logistic = function(theta, xVector, currnetIndex, hypoth, deg=1) {
  console.log('__COST_LOGISTIC__\n');

  let yActual = xVector[xVector.length - 1];
  let yHypoth = hypoth(theta, xVector, deg);
  return yActual * Math.log(yHypoth) - (1 - yActual) * Math.log(1 - yHypoth);
};
