/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// The naive way - sort both array and get over both together 
// O(NlogN+max(m,n))
    //Naive way
    // if (s.length !== t.length) return false;
    // s = s.split("").sort().join()
    // t = t.split("").sort().join()
    // return s === t

var isAnagram = function(s, t) {
    // Better Solution O(n)
    /* go over the first string - and count how many times do i have any letter using hashMap */
    /* go over the second string and check */
    var hashMap = {}
    // Build hashMap
    for(let ch=0; ch<26;ch++){
        const letter = String.fromCharCode(97+ch)
        Object.assign(hashMap,{[letter]:0})
    }    
    // go over first string and count how many from each digit
    for(let i=0; i<s.length; i++){
        hashMap[s[i]]++
    }
    // go over the second string and check if hashMap[s[i]] is bigger than 0 - so reduce one and continue to the next digit. else return false
    for(let i=0; i<t.length; i++){
        if(hashMap[t[i]] > 0){
            hashMap[t[i]]--;
        }else {
            return false
        }
    }
    
    // we need to go over hash and check if all keys are zero
    for(let ch=0; ch<26;ch++){
        const letter = String.fromCharCode(97+ch)
        if(hashMap[letter] != 0)
            return false;
    }
    return true;
};

module.exports={isAnagram}