/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let returnArray = []
    //1 2 4 5 6 7 8 9
    nums.sort((a,b)=>a-b);
    let indexA = 0,indexB=nums.length-1;
    let pointerA = nums[indexA]
    let pointerB = nums[indexB]
    for(var j=0;j<nums.length-1;j++){
        if(j==indexA) indexA++;
        if(j==indexB) indexB--;
        if(indexA==indexB) continue;
        if(j!=indexA && j !=indexB && indexA != indexB){
            if(pointerA+pointerB+nums[j] >0)
                indexB--;
            else if(pointerA+pointerB+nums[j] < 0)
                indexA++;
            else returnArray.push([pointerA,pointerB,nums[j]].sort())

        }

    }
};

module.exports={threeSum}