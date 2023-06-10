/**
 * @param {string} s
 * @return {boolean}
 */
    // Naive way . sort the string. if the sort string same as given s - true, else false
    //O(NlogN)
    //  let sorted = s.split('').sort().join('');
    //  return s === sorted

var checkString = function(s) {
    // Better Way O(n)
    for(var i=1;i<s.length;i++){
        if(s[i-1] == 'b' && s[i]=='a')
            return false;
    }
    return true
};


module.exports = {checkString}