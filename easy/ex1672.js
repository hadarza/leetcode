/*Question 1672 - matrix */
/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
    var max = 0;
    var sum =0
    for(var i=0;i<accounts.length;i++){
        sum =0;
        for(var j=0;j<accounts[i].length ;j++)
            sum+=accounts[i][j];
        if(sum>max) max=sum;
    }
    return max;
}
let maxNum = maximumWealth([[1,2,6],[2,3,5]])
console.log(maxNum)

module.exports = { maximumWealth };
