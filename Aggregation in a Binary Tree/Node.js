export default class Node {
    constructor(key = null, left = null, right = null) {
        this.key = key;
        this.left = left;
        this.right = right;
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

    getSum() {
        return this.reduce((acc, key) => acc + key, 0);
    }

    toArray() {
        return this.reduce((acc, key) => [...acc, key], []);
    }

    toString() {
        return `(${this.toArray().join(', ')})`;
    }

    every(fn) {
        return this.reduce((acc, key) => acc && fn(key), true);
    }

    some(fn) {
        return this.reduce((acc, key) => acc || fn(key), false)
    }
    // END
};
