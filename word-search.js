const exist = (board, word) => {
  let used = {};
  let h = board.length;
  let w = board[0].length;
  const rec = (i, y, x) => {

    if (i == word.length) {
      return true;
    }
    if (x < 0 || y < 0 || y >= h || x >= w || word[i] !== board[y][x] || used[`${y},${x}`]) {
      return false;
    }

    //used[`${y},${x}`] = 1
    i++;
    let temp = board[y][x];
    board[y][x] = '.';
    if (rec(i, y, x + 1)) return true;
    if (rec(i, y + 1, x)) return true;
    if (rec(i, y - 1, x)) return true;
    if (rec(i, y, x - 1)) return true;
    board[y][x] = temp;
    //used[`${y},${x}`] = 0
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === word[0]) {
        if (rec(0, i, j)) return true
      }
    }
  }

  return false;
};
/*
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]
*/

let res = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")

console.log(res)