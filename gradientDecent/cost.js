'use strict';
/*
Cost generates the the sumation of errors from our actual points
vs our hypothetical points.

xVector represents a single row of our data set.
hypoth is our function to generate a hypothetical point
sigmoid is an activation funciton of our hypothetical funciton
deg is unused at the moment
lambda is unused at the moment
*/
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
  let yActual = xVector[xVector.length - 1]; //actual point value
  let outerX = currentIndex === 0 ?
  1 : xVector[currentIndex - 1];

  let yHypoth = hypoth(thetaVector, xVector, sigmoid, deg);
  // console.log('HYPOTHESIS', yHypoth);
  // console.log('ACTUAL: ', yActual);
  // console.log('DIFFERENCE: ', yHypoth - yActual);
  let bestFit = (yHypoth - yActual) * outerX;

  return bestFit + regularization(lambda, thetaVector, currentIndex);
};
