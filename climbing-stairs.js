const climbStairs = n => {
  if (n == 1) return 1;
  let i = 2, a = 1, b = 2;
  while (i < n) {
    let temp = b;
    b = a + b;
    a = temp;
    i++;
  }
  return b;
};