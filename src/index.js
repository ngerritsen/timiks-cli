#!/usr/bin/env node

'use strict';

const program = require('commander');
const { version } = require('../package.json');
const scrambler = require('./scrambler');

program.version(version);

program
  .command('scramble [type]')
  .description(`Generate a scramble, options: "${scrambler.getScrambleOptions().join(', ')}"`)
  .option('-n, --amount <amount>', 'Amount of scrambles', 1, parseInt)
  .action(scrambler.generateScramble);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
