const sequenceSum = (begin, end, step) => {
  if (begin > end)
    return 0;
  let n = Math.floor((end - begin + step) / step);
  let sum = n * (2 * begin + (n - 1) * step) / 2;
  return sum;
};
sequenceSum(1, 5, 3);