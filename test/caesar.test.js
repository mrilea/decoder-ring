const { expect } = require("chai");
const { caesarModule, caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should retrun false if shift is not present", () => {
        let input = "words";
        let shift = undefined;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should retrun false if shift = 0", () => {
        let input = "words";
        let shift = 0;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should retrun false if shift is greater than 25", () => {
        let input = "words";
        let shift = 26;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should retrun false if shift is less than -25", () => {
        let input = "words";
        let shift = -29;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return 'wklqnixo' when given 'thinkful' and a shift of 3", () => {
        let input = "thinkful";
        let shift = 3;
        let actual = caesar(input, shift);
        let expected = "wklqnixo";
        expect(actual).to.equal(expected);
    })
    it("should return 'qefkhcri' when given 'thinkful' and a shift of -3", () => {
        let input = "thinkful";
        let shift = -3;
        let actual = caesar(input, shift);
        let expected = "qefkhcri";
        expect(actual).to.equal(expected);
    })
    it("should return 'thinkful' when given 'wklqnixo' and a shift of 3 and encode = false", () => {
        let input = "wklqnixo";
        let shift = 3;
        let actual = caesar(input, shift, (encode = false));
        let expected = "thinkful";
        expect(actual).to.equal(expected);
    })
    it("should return 'bpqa qa i amkzmb umaaiom!' when given 'This is a secret message!' and a shift of 8", () => {
        let input = "This is a secret message!";
        let shift = 8;
        let actual = caesar(input, shift);
        let expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.equal(expected);
    })
    it("should return 'this is a secret message!' when given 'BPQA qa I amkzmb umaaiom!' and a shift of 8 and encode = false", () => {
        let input = "BPQA qa I amkzmb umaaiom!";
        let shift = 8;
        let actual = caesar(input, shift, (encode = false));
        let expected = "this is a secret message!";
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces throughout, and maintain nonalphabetic symbols", () => {
        let input = "BPQA qa I amkzmb umaaiom!";
        let shift = 8;
        let actual = caesar(input, shift, (encode = false));
        let expected = "this is a secret message!";
        expect(actual).to.equal(expected);
    })
    it("should convert capital letters to lowercase", () => {
        let input = "CAPITAL";
        let shift = 1;
        let actual = caesar(input, shift);
        let expected = "dbqjubm";
        expect(actual).to.equal(expected);
    })
})