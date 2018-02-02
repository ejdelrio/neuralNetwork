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
  let costVal = 0;
  let m = data.length;
  for(let i = 0; i < m; i++) {
    let xVector = data[i];
    costVal += cost(
      xVector,
      theta,
      ind,
      sig,
      hypoth,
      deg,
      lambda
    );
    // console.log('');
  }
  console.log('COST: ', thetaJ - (alpha) * (costVal / m));
  console.log('------------------');
  return thetaJ - (alpha / m) * costVal;
};
