export default class Node {
    constructor(key = null, left = null, rigth = null) {
        this.key = key;
        this.left = left;
        this.rigth = rigth;
    }

    // BEGIN (write your solution here)
    reduce(fn, initValue) {
        let acc = fn(initValue, this.key);
        if (this.left !== null) {
          acc = this.left.reduce(fn, acc);
        }
        if (this.right !== null) {
          acc = this.right.reduce(fn, acc);
        }
        return acc;
      }
    
      getCount() {
        return this.reduce((acc) => acc + 1, 0);
      }
    
      isBalanced() {
        const leftCount = this.left?.getCount() ?? 0;
        const rightCount = this.right?.getCount() ?? 0;
        if (Math.abs(leftCount - rightCount) > 2) {
          return false;
        }
        if (this.left !== null) {
          return this.left.isBalanced();
        }
        if (this.right !== null) {
          return this.right.isBalanced();
        }
        return true;
      }
    // END
}