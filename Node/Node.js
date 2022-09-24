// BEGIN
export default class Node {
    constructor(key = null, left = null, right = null) {
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

    search(key) {
        const nodeKey = this.getKey();
        const right = this.getRight();
        const left = this.getLeft();

        if (key === nodeKey) {
            return this;
        }
        if (key < nodeKey && left) {
            return left.search(key);
        }
        if (key > nodeKey && right) {
            return right.search(key);
        }

        return null;
    }
}
// END