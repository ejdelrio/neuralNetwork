'use strict';

module.exports = function(theta, xVector, polynomialDegree=1) {
  console.log('__HYPOTHESIS_FUNCTION__\n');

  let sum = theta[0];
  for(let i = 0; i < xVector.length - 1; i++) {
    sum += theta[i + 1] * xVector[i];
  }
  return sum;
};
