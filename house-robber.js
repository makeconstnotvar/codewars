const rob = (nums) => {
  const dp = [
    2,
    7
  ];
  for (let i = 2; i < nums.length; i++) {
    let max = Math.max(nums[i], nums[i + 1] || 0)
      //dp[i] = dp[i - 2] + max;
    dp[i] = max;
  }
  return dp;
}

console.log(rob([2, 7, 9, 3, 1]))


/*
 i   0  1  2  3  4
 v   2  7  9  3  1
     -     *  *
        -     *  *

     _     _     *





*/