// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    //create an array for each character in the alphabet
    const alphaArray = alphabet.split("");
    //check to make sure no characters are repeated
    for (let letter of alphaArray) {
      //count each time a character is used
      let letterCount = alphaArray.filter(
        (character) => character === letter
      ).length;
      if (letterCount > 1) return false;
    }
    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const subsAlphabet = alphabet;
    input = input.toLowerCase();
    //split input into an array
    const inputArray = input.split("");
    //create an array to store the encoded word/phrase
    const encodedArray = [];

    //create helper function to encode/decode
    function findIndexOfCharacter(array, checkAlphabet, resolveAlphabet) {
      for (let character of array) {
        if (checkAlphabet.includes(character)) {
          const index = checkAlphabet.indexOf(character);
          character = resolveAlphabet[index];
        }
        encodedArray.push(character);
      }
    }
    //decode
    if (!encode) {
      findIndexOfCharacter(
        inputArray, 
        subsAlphabet,
        normalAlphabet
        );
    } else {
      findIndexOfCharacter(
        inputArray, 
        normalAlphabet,
        subsAlphabet
        );
    }
    return encodedArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
