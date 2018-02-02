'use strict';

const {regularization} = require('./hypoth.js');
module.exports = function(
  xVector,
  thetaVector,
  currentIndex,
  sigmoid,
  hypoth,
  deg=1,
  lambda=0
)
{
  let yActual = xVector[xVector.length - 1];
  let outerX = currentIndex === 0 ?
  1 : xVector[currentIndex - 1];

  let yHypoth = hypoth(thetaVector, xVector, sigmoid, deg);
  // console.log('HYPOTHESIS', yHypoth);
  // console.log('ACTUAL: ', yActual);
  // console.log('DIFFERENCE: ', yHypoth - yActual);
  let bestFit = (yHypoth - yActual) * outerX;

  return bestFit + regularization(lambda, thetaVector, currentIndex);
};
