/**
 * @param {number} number
 * @return {number} LongestPrefixOfZero
 */
var LongestSequenceOfZero = function(number) {
    var binaryNum = number.toString(2);
    console.log(binaryNum)
    //  go over the binaryNum count how many zero, first set to max.
    // if currentZero > max - set max= currentZero
    //TimeComplexity O(log2n)
    var maxLength = 0;
    var lengthOfZeros = 0;
    for(var i=0;i<binaryNum.length;i++){
        if(binaryNum[i] == '0')
            lengthOfZeros++;
        else {
            // set new max
            if(lengthOfZeros > maxLength)   {
                maxLength = lengthOfZeros;
            }
            lengthOfZeros = 0;
        }
    }
    return maxLength
}

module.exports={LongestSequenceOfZero}