/*question 26 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {

  let j = 1;
  for(var i=1;i<nums.length;i++){
      if(nums[i] != nums[i-1]){
        nums[j] = nums[i]
        j++;
      }
  }
  return j
}
/*do again */

// var nums = [1,1,2,2,5,7]; // Input array
// var x= removeDuplicates(nums); // Calls your implementation
// console.log(x);