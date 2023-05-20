/*Question 371 */
const getSum = function(a, b) {
    var multiply2 = Math.pow(2,a)*Math.pow(2,b); //means 2^(a+b)
    return Math.log2(multiply2)
};
module.exports = {getSum}