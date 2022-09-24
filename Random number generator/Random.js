// BEGIN (write your solution here)
export default class Random {
    constructor(seed) {
        this.seed = seed;
        this.initSeed = seed;
    }

    reset() {
        this.seed = this.initSeed;
    }

    getNext() {
        const m = 25 + this.initSeed;
        const a = 15 + this.initSeed;
        const c = 10 + this.initSeed;

        this.seed = ( a * this.seed + c ) % m;

        return this.seed;
    }
}
// END