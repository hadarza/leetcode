/*1941. Check if All Characters Have Equal Number of Occurrences*/
/**
 * @param {string} s
 * @return {boolean}
 */
const areOccurrencesEqual = function(s) {
    let currentOccurrences = 0;
    for (let i = 97; i <= 122; i++) {
      const character = String.fromCharCode(i);
        let x = s.split(character).length - 1 // get occurrences of a letter
        if(x != 0) {
          if(currentOccurrences == 0)
            currentOccurrences = x;
          if(currentOccurrences != x && currentOccurrences != 0){
              
              return false;
          }
        }
      }
      return true;
  };

  module.exports = { areOccurrencesEqual };
