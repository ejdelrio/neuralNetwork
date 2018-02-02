'use strict';

const cost = require('./cost.js');

module.exports = function(
  theta,
  data,
  alpha,
  ind,
  hypoth,
  sig,
  deg=1,
  lambda=0
)
{
  let thetaJ = theta[ind];
  let xVector = data[ind];
  let m = data.length;
  let costVal = cost(
    xVector,
    theta,
    ind,
    sig,
    hypoth,
    deg,
    lambda
  );
  console.log('COST: ', thetaJ - (alpha / m) * costVal);
  return thetaJ - (alpha / m) * costVal;
};
