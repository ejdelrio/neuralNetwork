'use strict';

const gradientDecent = require('./gradientDecent.js').linearSlope;

module.exports = function(theta, data, alpha, deg=1, lambda=0) {
  let globalMinimums = [];
  let count = 0;

  let currentTheta = theta;
  while (count !== theta.length) {
    currentTheta = currentTheta.map((val, ind) => {
      if(globalMinimums[ind]) return val;
      let newTheta = gradientDecent(currentTheta, data, alpha, ind, deg, lambda);

      console.log('CURRENT_THETA_INDEX: ', ind);
      console.log('NEWTHETA: ', newTheta);
      console.log('CURRENT_THETA: ', val);
      if(Math.abs(val - newTheta) < 0.000005) {
        globalMinimums[ind] = newTheta;
        count += 1;
        return newTheta;
      }
      return newTheta;
    });
  }
  return globalMinimums;
};
