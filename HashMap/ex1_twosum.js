/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Time Complexity O(n)
// Space O(n)
var twoSum = function(nums, target) {
    const hashMap ={}
    for(var i=0;i<nums.length;i++){
        const currentNumber =nums[i] ;
        const numToFind = target - currentNumber
        if(hashMap[numToFind] >= 0){ // if the needed val is inside the hash map
            return [hashMap[numToFind],i]
        }else hashMap[currentNumber] = i;
    }
};