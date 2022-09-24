export default class ParseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ParseError';
    }
}

// BEGIN (write your solution here)
const parseJson = (jsonFile) => {
    try {
        return JSON.parse(jsonFile);
    } catch (myError) {
        throw new ParseError(myError);
    }
};
// END
