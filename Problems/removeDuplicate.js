function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    // Start from the second position
    let k = 1; 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; 
            k++; 
        }
    }

    return k;
}

// Example usage:
const nums = [0,0,1,1,1,2,2,3,3,4];
const k = removeDuplicates(nums);
console.log(k); // Output: 5
console.log(nums.slice(0, k)); 