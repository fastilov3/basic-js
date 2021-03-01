const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);
  if(typeof sampleActivity!='string'){
    return false
  }
  if (Number.isNaN(sample)) {
    return false
  }
  if (sample > MODERN_ACTIVITY || sample <= 0) {
    return false
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY/sample) * HALF_LIFE_PERIOD / 0.693)
};

