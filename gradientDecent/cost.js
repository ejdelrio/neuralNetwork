'use strict';

const {regularization} = require('./hypoth.js');
module.exports = function(
  xVector,
  thetaVector,
  lambda,
  currentIndex,
  sigmoid,
  hypoth,
  deg=1
)
{
  let yActual = xVector[xVector.length - 1];
  let outerX = currentIndex === 0 ?
  1 : xVector[currentIndex - 1];

  let yHypoth = hypoth(thetaVector, xVector, sigmoid, deg);
  let bestFit = (yHypoth - yActual) * outerX;

  return bestFit + regularization(lambda, thetaVector, currentIndex);
};
