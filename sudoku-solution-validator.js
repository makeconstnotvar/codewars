function validSolution(board) {
  let response = true;
  for (let i = 0; i < board.length; i++) {
    if (!isValid(board[i])) response = false;
    let col = [];
    for (let j = 0; j < board.length; j++) {
      col.push(board[j][i])
      if (j == board.length - 1) {
        if (!isValid(col)) response = false;
      }
    }
  }
  let block = [];
  let i = 0;
  [0, 3, 6].forEach(x => {
    board.forEach(a => {
      i++;
      let chunk = a.slice(x, x + 3);
      block = block.concat(chunk);
      if (i % 3 == 0) {
        if (!isValid(block))
          response = false;
        block = [];
      }
    })
  });
  return response;
}

function isValid(name, nums) {
  let x = new Set(nums);
  let valid = x.size == 9;
  console.log(name, nums.join(','), valid);
  return valid;
}

const sudoku1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]
const sudoku = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5]]

console.log(validSolution(sudoku));





