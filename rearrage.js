function reArrange(arr) {
  let leftPos = 0, i = 0, tmp;
  while (i < arr.length) {
    if (arr[i] < 0) {
      if (i != leftPos) {
        tmp = arr[i];
        arr[i] = arr[leftPos];
        arr[leftPos] = tmp;
      }
      leftPos += 1
    }
    i++;
  }
  return arr;
}

console.log(reArrange([-2, 0, 10, -1, 20, 4, 5, -9, -6]))