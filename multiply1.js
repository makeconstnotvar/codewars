let arr = [1, 2, 3, 4];
let mult = arr.reduce((acc, x) => (acc = acc * x, acc), 1);
arr.forEach((x, i) => arr[i] = mult / x);

