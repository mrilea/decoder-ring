// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(!shift || shift > 25 || shift < -25 || shift === 0) return false;

    if(!encode) shift *= -1;
    
    let message = input.toLowerCase();
    let final = '';

    for (let i = 0; i < message.length; i++) {
      let letter = message[i];
      if(letter.match(/[a-z]/)) {
        let code = message.charCodeAt(i) + shift;
        if(code > 122) {
          code = code -26;
        }
        if(code < 97) {
          code = code +26;
        }
        let newLetter = String.fromCharCode(code);
        final += newLetter;
      } else {
        final += letter;
      }
    }
    console.log(final);
    return final;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
