function findNextSquare(sq) {
  let n = Math.sqrt(sq);
  return Number.isInteger(n) ? Math.pow(n + 1, 2) : -1;
}