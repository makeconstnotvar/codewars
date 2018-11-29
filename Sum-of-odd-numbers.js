function test(n) {
  let odds = [1];
  let total = 1;
  for (let row = 2; row <= n; row++) {
    for (let i = row; i <= row + total; i++) {
      odds[i - 1] = odds[i - 2] + 2
    }
    total += row;
  }
  return odds.slice(odds.length - n).reduce((a, b) => a + b);
}

test(5);
//125