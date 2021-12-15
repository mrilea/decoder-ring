const { expect } = require("chai");
const { polybiusModule, polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should return 11 when given a", () => {
    let input = "a";
    let expected = "11";
    let actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  it("when encoding it should output a string", () => {
    let input = "a";
    let actual = polybius(input);
    expect(actual).to.be.a("string");
  });
  it("when decoding the number of characters in the string excluding spaces should be even, otherwise return false", () => {
    let input = "44324233521254134";
    let actual = polybius(input, (encode = false));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should encode i and j to 42", () => {
    let input = "i j";
    let expected = "42 42";
    let actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  it("should decode 42 to i/j", () => {
    let input = "42";
    let expected = "(i/j)";
    let actual = polybius(input, (encode = false));
    expect(actual).to.equal(expected);
  });
  it("should return '4432423352125413' when presented with the input 'thinkful'", () => {
    let input = "thinkful";
    let expected = "4432423352125413";
    let actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  it("should return '3251131343 2543241341' when presented with the input 'Hello World'", () => {
    let input = "Hello World";
    let expected = "3251131343 2543241341";
    let actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  it("should return 'hello world' when presented with '3251131343 2543241341'", () => {
    let input = "3251131343 2543241341";
    let expected = "hello world";
    let actual = polybius(input, (encode = false));
    expect(actual).to.equal(expected);
  });
  it("should return 'th(i/j)nkful' when presented with '4432423352125413'", () => {
    let input = "4432423352125413";
    let expected = "th(i/j)nkful";
    let actual = polybius(input, (encode = false));
    expect(actual).to.equal(expected);
  });
});
