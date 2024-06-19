/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [3, 2, 4];
var target = 6;

var twoSum = function (nums, target) {
    let answer;
  for (let i = 0; i <= nums.length; i++) {
    
    for (let x = 0; x <= nums.length; x++) {
       if (i==x) {
        continue
       }else if (nums[i]+nums[x]==target) {
        answer =[i,x]
        return answer;
       }
    }
  }
};

console.log(twoSum(nums, target));
