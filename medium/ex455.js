/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    //g number of children
    // s size of cookies in array
    let CountChild =0;
    g.sort((a,b)=>a-b) // descending order
    s.sort((a,b)=>a-b) // descending order
    let cookie=0;
    for(var i=0;i<s.length;i++){
        if(s[i]>=g[cookie]){
            cookie++;
            CountChild++;
        }
    }
   return CountChild;

    
};

module.exports={findContentChildren}