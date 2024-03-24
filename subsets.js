function subsets(nums) {
  let res = [];
  let stack = [];

  const rec = i => {
    if (i >= nums.length) {
      res.push(stack.slice());
      return;
    }

    stack.push(nums[i]);
    rec(i + 1);
    stack.pop();
    rec(i + 1);

  }

  rec(0);

  return res;
}

console.log(subsets([1, 2, 3]));