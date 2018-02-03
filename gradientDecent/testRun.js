'use strict';

const learning = require('./learning.js');
const thetaArray = require('./thetaData.js');
const matrix = require('./sampleData.js');

console.log(learning(thetaArray, matrix, .00000025));
