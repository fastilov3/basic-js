const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  let newArray = matrix.flat();
  for (let key of newArray) {
    if (key === '^^') {
      count += 1;
    }
  }
  return count;
};
