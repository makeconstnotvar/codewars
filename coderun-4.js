const n = 1, m = 1;
const data = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 1, 0]
];

for (let i = 0; i < n; i++) {
  data[i] = data[i] || [];
  for (let j = 0; j < m; j++) {
    if (i > 1 && j > 1) {
      let a = data[i - 1][j - 2] || 0;
      let b = data[i - 2][j - 1] || 0;
      data[i][j] = a + b;
    } else {
      data[i][j] = data[i][j] || 0;
    }
  }
}
console.log(data[n-1][m-1]);
console.log(1)
