function magic(...args) {
    const sum = args.reduce((acc, x) => (x + acc), 0);
    const inner = (...rest) => magic(sum, ...rest);
    inner.valueOf = () => sum;

    return inner;
};