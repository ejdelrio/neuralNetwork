'use strict';
/*
  Sigmoid functions intepret the best fit line of our data.
*/

const sigmoid = module.exports = {};

sigmoid.slopeIntercept = function(thetaVector, xVector) {
  let sum = thetaVector[0];

  for (let i = 0; i < xVector.length - 1; i++) {
    sum += xVector[i] * thetaVector[i + 1];
  }
  return sum;
};

sigmoid.polynomial = function(thetaVector, xVector, degree=1) {
  return degree;
};
