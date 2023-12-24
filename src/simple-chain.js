const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  resultChain: [],
  getLength() {
    return this.resultChain.length;
  },
  addLink(value) {
    this.resultChain.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (!isNaN(position) && position <= this.resultChain.length && position > 0) {
      this.resultChain.splice(position - 1, 1);
    } else {
      this.resultChain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.resultChain.reverse();
    return this;
  },
  finishChain() {
    let strng = this.resultChain.join('~~');
    this.resultChain = [];
    return strng;
  },
};

module.exports = {
  chainMaker,
};
