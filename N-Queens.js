function solveNQueens1(n) {
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

  results = results.map(matrix => matrix.map(row => row.join('')))

  console.log(results);
  return results;
}

function solveNQueens(n) {
  let results = [];
  let validator = {};
  for (let j = 0; j < n; j++) {
    rec(0, j, n, createMatrix(n), 0);
  }

  return results;

  function stepHorse(x, y, n) {
    let result = [];
    const horseOffsets = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]];

    for (let i = 0; i < horseOffsets.length; i++) {
      const [xOffset, yOffset] = horseOffsets[i];
      const canX = xOffset + x;
      const canY = yOffset + y;

      if (canX >= 0 && canX < n && canY >= 0 && canY < n) {
        result.push([canX, canY]);
      }
    }

    return result;
  }

  function mark(x, y, matrix, n) {
    matrix[x][y] = 'Q';
    const offsets = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
    offsets.forEach(([offX, offY]) => {
      let newX = x + offX;
      let newY = y + offY;
      while (newX >= 0 && newX < n && newY >= 0 && newY < n) {
        matrix[newX][newY] = '.';
        newX += offX;
        newY += offY;
      }
    })
    return matrix;
  }

  function rec(x, y, n, matrix, count) {
    matrix = mark(x, y, matrix, n);
    count++;
    console.table(matrix)
    if (count == n) {
      distinct(matrix);
    }

    const resultStep = stepHorse(x, y, n);

    let canGo = resultStep.some(([x, y]) => matrix[x][y] == '_')
    if (canGo) {
      resultStep.forEach(([X, Y]) => {
        if (matrix[X][Y] == '_') {
          let m = JSON.parse(JSON.stringify(matrix));
          rec(X, Y, n, m, count);
        }
      });
    }
    else {
      let coord = findCell(matrix);
      if (coord) {
        let [x, y] = coord;
        let m = JSON.parse(JSON.stringify(matrix));
        rec(x, y, n, m, count)
      }
    }
  }

  function distinct(matrix){
    let strMatrix = matrix.map(row => row.join(''));
    let chekMatrix = strMatrix.join('');
    if(!validator[chekMatrix]){
      validator[chekMatrix]=1;
      results.push(strMatrix);
    }
  }

  function findCell(matrix) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] == '_')
          return [i, j]
      }
    }
    return null
  }

  function createMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push([]);
      for (let j = 0; j < n; j++) {
        matrix[i].push('_');
      }
    }
    return matrix;
  }
}

console.log(solveNQueens(6))

/* n=6
[".Q....","...Q..",".....Q","Q.....","..Q...","....Q."]
["..Q...",".....Q",".Q....","....Q.","Q.....","...Q.."]
["...Q..","Q.....","....Q.",".Q....",".....Q","..Q..."]
["....Q.","..Q...","Q.....",".....Q","...Q..",".Q...."]
*/

/* n=5
  ["Q....", "..Q..", "....Q", ".Q...", "...Q."],
  ["Q....", "...Q.", ".Q...", "....Q", "..Q.."],
  [".Q...", "...Q.", "Q....", "..Q..", "....Q"],
  [".Q...", "....Q", "..Q..", "Q....", "...Q."],
  ["..Q..", "Q....", "...Q.", ".Q...", "....Q"],
  ["..Q..", "....Q", ".Q...", "...Q.", "Q...."],
  ["...Q.", "Q....", "..Q..", "....Q", ".Q..."],
  ["...Q.", ".Q...", "....Q", "..Q..", "Q...."],
  ["....Q", ".Q...", "...Q.", "Q....", "..Q.."],
  ["....Q", "..Q..", "Q....", "...Q.", ".Q..."]
*/

