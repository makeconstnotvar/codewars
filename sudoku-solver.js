let board = [
  //0    1    2    3    4    5    6    7    8
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
solveSudoku(board)
function solveSudoku(board) {
  check(board);

  function check(board){
    for (let i = 0; i < board.length; i++) { //row
      for (let j = 0; j < board.length; j++) { //col
        if (board[i][j] == '.') {
          for (let n = 1; n < 10; n++) {
            let exist = existInRow(i, n) || existInCol(j, n) || existInSqr(i, j, n);
            if(!exist){
              let newBoard = copy(board,i,j,n);
              check(newBoard)
            }
          }
        }
      }
      //todo если все точки кончились, то мы нашли решение
    }
  }

  function copy(board, i,j,val){
    let newBoard = JSON.parse(JSON.stringify(board))
    newBoard[i][j]= val;
    return newBoard;
  }

  function existInRow(i, num) {
    for (let n = 0; n < 9; n++) {
      if (board[i][n] == num)
        return true
    }
    return false;
  }

  function existInCol(j, num) {
    for (let n = 0; n < 9; n++) {
      if (board[n][j] == num)
        return true
    }
    return false;
  }

  function existInSqr(i, j, num) {
    let startI = Math.floor(i / 3) * 3
    let startJ = Math.floor(j / 3) * 3
    for (let i = startI; i < startI + 2; i++) {
      for (let j = startJ; j < startJ + 2; j++) {
        if (board[i][j] == num)
          return true
      }
    }
    return false;
  }
}
/*

console.log(Math.floor(0 / 3) * 3) //3
console.log(Math.floor(1 / 3) * 3)
console.log(Math.floor(2 / 3) * 3)

console.log(Math.floor(3 / 3) * 3) //3
console.log(Math.floor(4 / 3) * 3)
console.log(Math.floor(5 / 3) * 3)

console.log(Math.floor(6 / 3) * 3) //3
console.log(Math.floor(7 / 3) * 3)
console.log(Math.floor(8 / 3) * 3)
*/
