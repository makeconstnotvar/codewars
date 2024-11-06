const removeDuplicates = (nums) => {
    let L = 0;
    for (let R = 1; R < nums.length; R++) {
        if (nums[R] != nums[R - 1]) {
            L++;
            nums[L] = nums[R];
        }

    }

    return L + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));