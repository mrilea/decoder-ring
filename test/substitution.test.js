const { expect } = require("chai");
const { substitutionMethod, substitution } = require("../src/substitution");

describe("substitution", () => {
    it("returns false if no alphabet is given", () => {
        let input = "word";
        let actual = substitution(input);
        expect(actual).to.be.false;
    })
    it("if 'alphabet' isn't exactly 26 characters return false", () => {
        let input ="word";
        let alphabet = "abc";
        let actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    })
    it("should return false if duplicate characters are used in the alphabet parameter", () => {
        let input = "word";
        let alphabet = "aabbcc";
        let actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    })
    it("correctly encodes the given phrase, based on the alphabet given to the function", () => {
        let input = "thinkful";
        let alphabet = 'xoyqmcgrukswaflnthdjpzibev';
        let actual = substitution(input, alphabet);
        let expected = 'jrufscpw';
        expect(actual).to.equal(expected);
    })
    it("correctly encodes the given phrase, based on the alphabet given to the function", () => {
        let input = 'You are an excellent spy';
        let alphabet = 'xoyqmcgrukswaflnthdjpzibev';
        let expected = 'elp xhm xf mbymwwmfj dne'
        let actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
    it("correctly decodes the given phrase, based on the alphabet given to the function", () => {
        let input = 'jrufscpw';
        let alphabet = 'xoyqmcgrukswaflnthdjpzibev';
        let expected = 'thinkful';
        let actual = substitution(input, alphabet, (encode = false));
        expect(actual).to.equal(expected);
    })
    it("correctly encodes the given phrase, based on the alphabet given to the function", () => {
        let input = 'message';
        let alphabet = '$wae&zrdxtfcygvuhbijnokmpl';
        let expected = "y&ii$r&";
        let actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
    it("correctly decodes the given phrase, based on the alphabet given to the function", () => {
        let input = "y&ii$r&";
        let alphabet = '$wae&zrdxtfcygvuhbijnokmpl';
        let expected = 'message';
        let actual = substitution(input, alphabet, (encode = false));
        expect(actual).to.equal(expected);
    })
});