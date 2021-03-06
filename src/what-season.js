const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
    else if (typeof date !== "object") throw new Error("Invalid argument");

    for (let prop of Object.getOwnPropertyNames(Date.prototype)) {
        if (date[prop] !== Date.prototype[prop]) throw new Error("");
    }
  let d = new Date(date);
  if (d.getMonth() === 11 || d.getMonth() === 0 || d.getMonth() === 1) {
    return 'winter';
  } else if (d.getMonth() === 2 || d.getMonth() === 3 || d.getMonth() === 4) {
   return 'spring';
  } else if (d.getMonth() === 5 || d.getMonth() === 6 || d.getMonth() === 7) {
   return 'summer';
  } else if (d.getMonth() === 8 || d.getMonth() === 9 || d.getMonth() === 10) {
   return 'autumn';
  }
};
