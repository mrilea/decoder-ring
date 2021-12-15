// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const coordinates = {
      11: "a",
      12: "f",
      13: "l",
      14: "q",
      15: "v",
      21: "b",
      22: "g",
      23: "m",
      24: "r",
      25: "w",
      31: "c",
      32: "h",
      33: "n",
      34: "s",
      35: "x",
      41: "d",
      42: "(i/j)",
      43: "o",
      44: "t",
      45: "y",
      51: "e",
      52: "k",
      53: "p",
      54: "u",
      55: "z",
    };
    // DECODING
    if (!encode) {
      //convert string into an array with each word stored separately
      const splitArray = input.split(" ");
      if (splitArray.join("").length % 2 !== 0) {
        //return false if there are an odd number of numbers
        return false;
      }
      //create an array to store the converted number in
      const numArray = [];
      for (let i = 0; i < splitArray.length; i++) {
        // string = 1 word in the array
        const string = splitArray[i];
        for (let j = 0; j < string.length; j += 2) {
          //divide the string into an array with pairs of numbers
          numArray.push(string.substring(j, j + 2));
        }
        //add a space to separate words
        numArray.push(" ");
      }
      //pop to remove the extra space added at the end of the array
      numArray.pop();
      //new var to store the converted letters
      const letterArray = [];
      for (let numPair of numArray) {
        if (numPair === " ") {
          letterArray.push(numPair);
        } else {
          //coorinates[numPair] pulls the correct letter from the list
          const foundLetter = coordinates[numPair];
          letterArray.push(foundLetter);
        }
      }
      //join the array into a string and return the result
      return letterArray.join("");
      // ENCODING
    } else {
      //lowercase all the characters and split each character into an array
      const letterArray = input.toLowerCase().split("");
      //numArray will store the converted number pairs
      const numArray = [];
      for (let character of letterArray) {
        //if i or j num = 42
        if (character === "i" || character === "j") {
          numArray.push(42);
        } else {
          //find the key from the coordinates list that matches the character
          let foundNumber = Object.keys(coordinates).find(
            (key) => coordinates[key] === character
          );
          //if the character is not present in the coordinates then foundNumber = " "
          if (!foundNumber) {
            foundNumber = " ";
          }
          numArray.push(foundNumber);
        }
      }
      //join the array into a string and return the result
      return numArray.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
