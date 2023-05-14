
var express = require('express')
const app = express()
const port = 4000
var cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

// middleware
app.use(express.json()) // access to request.body
app.use(express.urlencoded({extended: true}));
app.use(cors())

/*Question 1672 */
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
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
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})