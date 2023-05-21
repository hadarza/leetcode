/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
    const arrayAmount = Array(amount+1).fill(Infinity)
    arrayAmount[0] = 0

    for(var i=1;i<amount+1;i++){
        for(var j=0;j<coins.length;j++){
            if(i-coins[j]>=0){
                arrayAmount[i] = Math.min(arrayAmount[i],1+arrayAmount[i-coins[j]])
            }
        }
    }
    return arrayAmount[amount]===Infinity?-1:arrayAmount[amount]
    
};
module.exports={coinChange}

// f(n)

// \;if(v[n]\neq\infty)

// \;\;return v[n];

// \;else if(n<3)

// \;\;v[n]\leftarrow10n

// \;else if (n<5)

// \;\;v[n]\leftarrow min(f(n-1)+10,f(n-3)+20)

// \;else v[n]\leftarrow min(f(n-1)+10,f(n-3)+20,f(n-5)+30)

// \;\;return v[n]