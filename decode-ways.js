const numDecodings1 = s => {
  const dp = new Array(s.length + 1).fill(0);
  dp[s.length] = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == 0) continue;
    dp[i] = dp[i + 1];
    if (s[i] + s[i + 1] <= 26)
      dp[i] += dp[i + 2];
  }

  return dp[0];
};
const numDecodings = s => {
  let a =1 ,b=0, max=0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == 0) continue;
    max = a;
    if (s[i] + s[i + 1] > 10 && s[i] + s[i + 1] <= 26)
      max += b;
    b = a;
    a = max;
  }

  return max
};

console.log(numDecodings('2101'))



