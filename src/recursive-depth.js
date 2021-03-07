const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    else if (arr.length === 0) return 1;
    else {
      return 1 + Math.max(...arr.map(this.calculateDepth.bind(this)));
    }
  }
};

// 'use strict'
// module.exports = class DepthCalculator {
//     constructor() {
//         this.currentDepth = 0;
//         this.depth = 1;
//     }

//     calculateDepth(arr) {
//         let array = arr.filter(el => Array.isArray(el));
//         if (array.length === 0) {
//             this.currentDepth = this.depth;
//             this.depth = 1;
//             return this.currentDepth;
//         } else {
//             this.depth++;
//             return this.calculateDepth([].concat(...array));
//         }
//     }
// };
