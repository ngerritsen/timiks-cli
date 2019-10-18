#!/usr/bin/env node

'use strict';

const scramblers = require('./vendor/jsss');

console.log(scramblers['333'].getRandomScramble().scramble_string);
