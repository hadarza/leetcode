/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {

     // build hash map base on roman digits
     const MapRoman = {
        1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
    };    
    let romanDigits = '';

    while (num > 0) {
        let closestNumber = Infinity;
        let closestRomanDigit = '';

        for (const key in MapRoman) {
            const currentNumber = parseInt(key);
            // find closetNumber
            if (currentNumber <= num) {
                console.log(currentNumber)
                closestNumber = currentNumber;
                closestRomanDigit = MapRoman[key];
            }
        }
        console.log(closestRomanDigit)

        romanDigits += closestRomanDigit; // לשרשר
        num -= closestNumber; // remove from number 
    }

    return romanDigits;
};




module.exports = {intToRoman}