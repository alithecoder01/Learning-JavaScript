// remove Duplicates number from a sorted array
const removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // Initialize k to 1 since the first element is always unique

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // Place the unique element at the k-th position
            k++; // Increment k for the next unique element
        }
    }

    return k;
};

// Example usage:
const nums = [-1,0,1,2,3,3,4,5];
const k = removeDuplicates(nums);
console.log(k); // Output: 5
console.log(nums.slice(0, k)); 