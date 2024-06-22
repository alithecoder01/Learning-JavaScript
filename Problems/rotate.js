const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    var last = nums.pop();
    nums.unshift(last);
  }
  console.log(nums);
};

rotate(nums, k);
