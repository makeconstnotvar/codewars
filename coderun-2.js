let data = [
        [1, 1, 1, 1, 1],
        [3, 100, 100, 100, 100],
        [1, 1, 1, 1, 1],
        [2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1]
    ],
    m = 5,
    n = 5;

for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
        if (row == 0 && col == 0) {
            continue;
        }
        let top = row > 0 ? data[row - 1][col] : data[row][col - 1];
        let left = col > 0 ? data[row][col - 1] : data[row - 1][col]
        data[row][col] += Math.min(top, left)
    }
}

console.log(data[m - 1][n - 1])
