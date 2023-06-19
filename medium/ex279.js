// /**
//  * @param {number} n
//  * @return {number}
//  */
// /*
// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
// */
// var numSquares = (function() {
//     var arr = [];

//     return function(n) {
//         if (arr[n] !== undefined) return arr[n]; // Memoization
//         if (n === 0) {
//             arr[n] = 0; // Base case when n is 0
//             return arr[n];
//         }
//         // n=8 1,4
//         var count = Infinity; // Initialize count to Infinity

//         for (var i = 1; i * i <= n; i++) {
//             var square = i * i;
//             count = Math.min(count, numSquares(n - square));
//         }

//         arr[n] = count+1; // Store the calculated count in arr[n]
//         return arr[n];
//     };
// })();

//     // 10 ->1,4,9
//     //count = Math.min(count+1,numSquares(9)))) = (2,)
//     //count= Math.min(count+1,numSquares(4)) = (2,1)=1
//     //count = Math.min(count+1,numSquares(1))= (1,1) = 1
//     // PERFECT NUMBER MEAN THAT WHEN WE DO MATH.sqrt we will get integer number  
//     // memorization
//     // if n is sequare number return 1;
//     // if n=0 return number
//     // if(n < 4 && n > 1) return Infinite - no path.
//     // TODO - find path of sequare numbers that sum up to n
//     // find Min between all the options
//     // if n=12 so sequare numbers that lower than 12 is 1,4,9
//     // Min(numSquares(n-9),numSquares(n-4),numSquares(n-1))
                                                              
// //};
// module.exports={numSquares}