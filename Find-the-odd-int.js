function findOdd(A) {
  let result = 0;
  A.reduce((acc, a) => {
    let n = acc ^ a;
    return n;
  }, 0);
  return result;
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);