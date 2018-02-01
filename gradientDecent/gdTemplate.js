'use strict';

const cost = require('./cost.js');
const {linearHypoth, logHypoth} = require('./hypoth.js');
const  {slopeIntercept, polynomial} = require('./sigmoid.js');

const gradientDescent = module.exports = {};
/*Characterizes a single step in a gradient gradientDescent
defined by the equation:
	θj := 	θj - a/m * cost(θ, x)
where θj represents the current theta value of a vector of thetas and
j is a number representing the index from 0 to θvector.length - 1
x is a row of a 2 dimesional matrix.
*/

gradientDescent.gdTemplate = function(
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
