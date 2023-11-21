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
    } else {
      let coord = findCell(matrix);
      if (coord) {
        let [x, y] = coord;
        let m = JSON.parse(JSON.stringify(matrix));
        rec(x, y, n, m, count)
      }
    }
  }

  function distinct(matrix) {
    let strMatrix = matrix.map(row => row.join(''));
    let chekMatrix = strMatrix.join('');
    if (!validator[chekMatrix]) {
      validator[chekMatrix] = 1;
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

//console.log(solveNQueens(6))

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
function solveQueensBit(n) {
  return nQueensBitwiseRecursive(n);
}

solveQueensBit(4)

function nQueensBitwiseRecursive(
  boardSize,
  leftDiagonal = 0,
  column = 0,
  rightDiagonal = 0,
  solutionsCount = 0,
) {
  // Keeps track of the number of valid solutions.
  let currentSolutionsCount = solutionsCount;

  // Helps to identify valid solutions.
  // isDone simply has a bit sequence with 1 for every entry up to the Nth. For example,
  // when N=5, done will equal 11111. The "isDone" variable simply allows us to not worry about any
  // bits beyond the Nth.
  const isDone = (2 ** boardSize) - 1;

  // All columns are occupied (i.e. 0b1111 for boardSize = 4), so the solution must be complete.
  // Since the algorithm never places a queen illegally (ie. when it can attack or be attacked),
  // we know that if all the columns have been filled, we must have a valid solution.
  if (column === isDone) {
    return currentSolutionsCount + 1;
  }

  // Gets a bit sequence with "1"s wherever there is an open "slot".
  // All that's happening here is we're taking col, ld, and rd, and if any of the columns are
  // "under attack", we mark that column as 0 in poss, basically meaning "we can't put a queen in
  // this column". Thus all bits position in poss that are '1's are available for placing
  // queen there.
  let availablePositions = ~(leftDiagonal | rightDiagonal | column);

  // Loops as long as there is a valid place to put another queen.
  // For N=4 the isDone=0b1111. Then if availablePositions=0b0000 (which would mean that all places
  // are under threatening) we must stop trying to place a queen.
  while (availablePositions & isDone) {
    // firstAvailablePosition just stores the first non-zero bit (ie. the first available location).
    // So if firstAvailablePosition was 0010, it would mean the 3rd column of the current row.
    // And that would be the position will be placing our next queen.
    //
    // For example:
    // availablePositions = 0b01100
    // firstAvailablePosition = 100
    const firstAvailablePosition = availablePositions & -availablePositions;

    // This line just marks that position in the current row as being "taken" by flipping that
    // column in availablePositions to zero. This way, when the while loop continues, we'll know
    // not to try that location again.
    //
    // For example:
    // availablePositions = 0b0100
    // firstAvailablePosition = 0b10
    // 0b0110 - 0b10 = 0b0100
    availablePositions -= firstAvailablePosition;

    /*
     * The operators >> 1 and 1 << simply move all the bits in a bit sequence one digit to the
     * right or left, respectively. So calling (rd|bit)<<1 simply says: combine rd and bit with
     * an OR operation, then move everything in the result to the left by one digit.
     *
     * More specifically, if rd is 0001 (meaning that the top-right-to-bottom-left diagonal through
     * column 4 of the current row is occupied), and bit is 0100 (meaning that we are planning to
     * place a queen in column 2 of the current row), (rd|bit) results in 0101 (meaning that after
     * we place a queen in column 2 of the current row, the second and the fourth
     * top-right-to-bottom-left diagonals will be occupied).
     *
     * Now, if add in the << operator, we get (rd|bit)<<1, which takes the 0101 we worked out in
     * our previous bullet point, and moves everything to the left by one. The result, therefore,
     * is 1010.
     */
    currentSolutionsCount += nQueensBitwiseRecursive(
      boardSize,
      (leftDiagonal | firstAvailablePosition) >> 1,
      column | firstAvailablePosition,
      (rightDiagonal | firstAvailablePosition) << 1,
      solutionsCount,
    );
  }

  return currentSolutionsCount;
}

