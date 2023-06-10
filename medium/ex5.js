// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//     var matrix = []
//     for(var i=0; i<s.length; i++) {
//         matrix[i] = new Array(s.length);
//     }
//       // for the digansoal 
//       for(var i=0; i<s.length; i++) {
//         matrix[i][i]=1;
//     }

//     // if(matrix[i][j]) // memorization
//         // return matrix[i][j]
//     for(var i=0; i<s.length-1; i++) {
//         for(var j=1; j<s.length; j++) {
//             console.log(s[i])
//             if(s[i] == s[j] && i != j && matrix[i+1][j-1] == (j-i+1)) {
//                 // means the middle is polindrom 
//                 matrix[i][j] = (j-i+1)+2;
//             }else{
//                 var max = 0
//                 for(var z=0; z<j; z++) {
//                     if(max > matrix[i][z])
//                         matrix[i][z] = max
//                 }
//             }
//         }
//     }
//     return matrix[0][s.length-1]

// };

// module.exports={longestPalindrome}