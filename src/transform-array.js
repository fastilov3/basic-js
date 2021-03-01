const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('');
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
        i++;
        continue;
    } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
        newArr.pop();
    } else if (arr[i] === '--double-next') {
        if (arr[i + 1] !== undefined) {
            newArr.push(arr[i + 1]);
        };
        i++;
    } else if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next') {
        if (arr[i - 1] !== undefined) {
            newArr.push(arr[i - 1]);
        };
        i++;
    };
    if (arr[i] !== '--double-prev' && arr[i] !== '--double-next' && arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i] !== undefined) {
        newArr.push(arr[i]);
    };
};

return newArr;
};

