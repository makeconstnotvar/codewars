let data = [
        [9, 9, 9, 9, 9],
        [3, 0, 0, 0, 0],
        [9, 9, 9, 9, 9],
        [6, 6, 6, 6, 8],
        [9, 9, 9, 9, 9]
    ],
    m = 5,
    n = 5;


for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
        if (row == 0 && col == 0) {
            continue;
        }
        let top = row > 0 ? data[row - 1][col] : data[row][col - 1];
        let left = col > 0 ? data[row][col - 1] : data[row - 1][col];
        data[row][col] += Math.max(top, left)
    }
}
console.log(data[m - 1][n - 1])

let result = [];
let row = m - 1;
let col = n - 1;

while (row >= 0 && col >= 0) {
    if (col == 0 && row == 0) {
        console.log(result.reverse().join(' '))
        break;
    }
    if(row==0){
        result.push('R');
        col--;
        continue;
    }
    if(col==0){
        result.push('D');
        row--;
        continue;
    }
    let top =  data[row - 1][col];
    let left =  data[row][col - 1];

    if (top >= left) {
        result.push('D');
        row--;
    } else {
        result.push('R');
        col--;
    }
}









