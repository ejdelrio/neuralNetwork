'use strict';

const cost = require('./cost.js');

module.exports = function(
  theta,
  data,
  alpha,
  ind,
  hypoth,
  sig,
  lambda=0,
  deg=1
)
{
  let thetaJ = theta[ind];
  let xVector = data[ind];
  let m = data.length;
  let costVal = cost(
    xVector,
    theta,
    lambda,
    ind,
    sig,
    hypoth,
    deg
  );
  return thetaJ - (alpha / m) * costVal;
};
