'use strict';

const {linearHypoth, logHypoth} = require('./hypoth.js');
const  {slopeIntercept, polynomial} = require('./sigmoid.js');
const gdTemplate = require('./gdTemplate.js');

const gradientDecent = module.exports = {};

gradientDecent.linearSlope = function(
  theta, data, alpha, ind, lambda=0
)
{
  return gdTemplate(
    theta,
    data,
    alpha,
    ind,
    linearHypoth,
    slopeIntercept,
    lambda
  );
};

gradientDecent.linearPoly = function(
  theta, data, alpha, ind, deg=1, lambda=0
)
{
  return gdTemplate(
    theta,
    data,
    alpha,
    ind,
    linearHypoth,
    polynomial,
    lambda
  );
};

gradientDecent.logSlope = function(
  theta, data, alpha, ind,lambda=0
)
{
  return gdTemplate(
    theta,
    data,
    alpha,
    ind,
    logHypoth,
    slopeIntercept,
    lambda
  );
};

gradientDecent.logPoly = function(
  theta, data, alpha, ind, deg=1, lambda=0
)
{
  return gdTemplate(
    theta,
    data,
    alpha,
    ind,
    logHypoth,
    polynomial,
    lambda
  );
};
