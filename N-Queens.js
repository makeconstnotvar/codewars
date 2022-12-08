function solveNQueens(n) {
  let results = [];
  for (let start = 0; start < n; start++) {
    let count = 0;
    let matrix = getMatrix(n);
    for (let i = 0; i < n; i++) {
      let s = i == 0 ? start : 0
      for (let j = s; j < n; j++) {
        if (matrix[i][j] == '_') {
          mark(matrix, n, i, j);
          count++
        }
      }
    }
    if (count == n) {

      results.push(matrix);
    }
  }

  function mark(matrix, n, I, J) {
    let pattern = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
    matrix[I][J] = 'Q'
    pattern.forEach(([x, y]) => {
      let i = I + x, j = J + y;
      while (j >= 0 && j < n && i >= 0 && i < n) {
        matrix[i][j] = '.';
        i += x;
        j += y;
      }
    })
  }

  function getMatrix(n) {
    let matrix = [[]];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!matrix[i]) {
          matrix[i] = []
        }
        matrix[i][j] = '_'
      }
    }
    return matrix;
  }
  results = results.map(matrix=>matrix.map(row=>row.join('')))

  //console.log(results);
  return results;
}

solveNQueens(5)