const { expect } = require('chai');
const { run } = require('./main');

describe("Solution", function () {
    it("should return the correct positions for the given sequence", function () {
        expect(run(3, 3, [3, 1, 1])).to.equal("2,1,0");
        expect(run(5, 3, [4, 4, 5])).to.equal("3,0,4");
    });

    it("should handle edge cases", function () {
        expect(run(1, 1, [1])).to.equal("0");
        expect(run(2, 2, [1, 2])).to.equal("0,1");
        // Add more edge cases if needed
    });

    it("should handle large inputs efficiently", function () {
        let largeInput = Array.from({length: 887}, (_, i) => (i % 84) + 1);
        expect(run(84, 887, largeInput)).to.be.a('string');
    });
});
