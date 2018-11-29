function primeSieve(max) {
  let n = (max - 1) / 2;
  let results = [];

  let imax = (Math.sqrt(2 * n + 1) - 1) / 2;

  for (let i = 1; i <= n; i++)
    results[i] = 1;

  for (let i = 1; i <= imax; i++) {
    let jmax = (n - i) / (2 * i + 1);
    for (let j = i; j <= jmax; j++) {
      let a = i + j + 2 * i * j;
      results[a] = 0;

    }
  }

  let nums = results.reduce((acc, val, idx) => {
    if (val)
      acc.push(2 * idx + 1);
    return acc;
  }, [2]);

  console.log(nums.join(', '))

}

primeSieve(100);

