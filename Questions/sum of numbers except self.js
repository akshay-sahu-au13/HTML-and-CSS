// Given an array nums of n integers where n > 1, return an array output such
// that output[i] is equal to the product of all the elements of nums except nums[i].
// Example:
// Input: [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the
// array (including the whole array) fits in a 32 bit integer.
// Note: Please solve it without division and in O(n).
// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as
// extra space for the purpose of space complexity analysis.)

var productExceptSelf = function(nums) {
    const length = nums.length;
  
    const L = [];
    const R = [];
  
    const answer = [];
  
    L[0] = 1
  
    for (let i = 1; i < length; i++) {
      L[i] = nums[i - 1] * L[i-1]
    }
  
    R[length - 1] = 1;
  
    for (let j = length - 2; j >= 0; j--) {
      R[j] = nums[j+1] * R[j+1]
    }
  
    for (let k = 0; k < length; k++) {
      answer[k] = R[k] * L[k]
    }
    
    return answer;
      
  };
  