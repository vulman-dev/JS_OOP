import Square from './Square.js';

// BEGIN (write your solution here)
export default class SquaresGenerator {
    static generate(side, numberOfCopies = 5) {
        const squares = [];
        for (let i = 0; i < numberOfCopies; i += 1) {
            squares.push(new Square(side));
        }
        return squares;
    }
}
// END