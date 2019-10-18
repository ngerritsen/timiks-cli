const scramblers = require('./vendor/jsss');

function generateScramble(type = '333', options) {
  if (!getScrambleOptions().includes(type)) {
    console.error(`Invalid scramble type "${type}", possible types "${getScrambleOptions()}".`);
    return;
  }

  const parsedAmount = parseInt(options.amount);
  const amount = isNaN(parsedAmount) || parsedAmount < 1 ? 1 : parsedAmount;

  for (let i = 0; i < amount; i++) {
    console.log(scramblers[type].getRandomScramble().scramble_string);
  }
}

function getScrambleOptions() {
  return ['222', '333', '444', '555', '666', '777', 'clock', 'minx', 'pyram', 'sq1'];
}

module.exports = {
  generateScramble,
  getScrambleOptions
};
