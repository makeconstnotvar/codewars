const m = 31, n = 34, data = [[0],[0,0,1],[0,1]];

for (let i = 2; i < m; i++) {
  data[i] = data[i] || [];
  for (let j = 2; j < n; j++) {
    let a = data[i - 1][j - 2] || 0
    let b = data[i - 2][j - 1] || 0
    data[i][j] =  a+ b;
  }
}
console.log(1)
