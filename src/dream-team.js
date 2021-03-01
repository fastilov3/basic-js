const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.reduce((acc, item) =>
      typeof(item) === 'string'
      ? acc + item.toUpperCase().trim()[0]
      : acc
      ,"")
      .split("").sort().join("")
    }
  return false
};
