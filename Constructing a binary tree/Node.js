// BEGIN
export default class Node {
    constructor(key = null, right = null, left = null) {
      this.key = key;
      this.left = left;
      this.right = right;
    }
  
    getKey() {
      return this.key;
    }
  
    getLeft() {
      return this.left;
    }
  
    getRight() {
      return this.right;
    }
  
    insert(key) {
      if (this.key === null) {
        this.key = key;
      }
      if (key < this.key) {
        if (this.left === null) {
          this.left = new Node(key);
        } else {
          this.left.insert(key);
        }
      }
      if (key > this.key) {
        if (this.right === null) {
          this.right = new Node(key);
        } else {
          this.right.insert(key);
        }
      }
    }
  }
//END