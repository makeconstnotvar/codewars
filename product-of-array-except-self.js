const productExceptSelf = (nums) => {
    let pre = 1;
    let result = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        result[i] = pre;
        pre = nums[i] * pre;
    }
    let post = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = post * result[i];
        post = nums[i] * post;
    }
    return result;
}
console.log(productExceptSelf([1, 2, 3, 4]))

