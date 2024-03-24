const combinationSum = (nums, target) => {
  const result = [];
  const stack = [];
  const rec = (sum, i) => {
    if (sum == target) {
      result.push(stack.slice())
      return;
    }
    if (i >= nums.length || sum > target) {
      return;
    }

    stack.push(nums[i]);
    sum += nums[i]
    rec(sum, i);
    stack.pop();
    sum -= nums[i];
    rec(sum, i + 1);
  }
  rec(0, 0);
  return result;
}

console.log(combinationSum([2, 3, 5], 8))