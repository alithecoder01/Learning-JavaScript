const nums = [1, 3, 5, 6];
const target = 1;

var searchInsert = function (nums, target) {
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    // If the target is found, return the index
    if (element === target) {
      return i;
    }

    // If the target is less than the current element, return the current index
    if (target < element) {
      return i;
    }
  }

  // If the target is greater than all elements, it should be inserted at the end
  return nums.length;
};

console.log(searchInsert(nums, target)); // Output: 4
