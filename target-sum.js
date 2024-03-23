function findTargetSumWays(nums, target) {
  const memo = new Map();

  return loop(0, 0);

  function loop(index, total) {
    const key = `${index}#${total}`;

    if (index == nums.length) {
      if (total === target) return 1;
      return 0;
    }
    if (memo.has(key)) return memo.get(key);

    const plus = loop(index + 1, total + nums[index])
    const minus = loop(index + 1, total - nums[index]);
    const count = plus + minus;

    memo.set(key, count);

    return count;
  }
}


console.log(findTargetSumWays([1,1,1,1,1],3))
