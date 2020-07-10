function findSecondMaximum(arr) {

  let second = Number.MIN_VALUE;
  let max = Number.MIN_VALUE;

  for (let i in arr) {
    if (arr[i] > max) {
      if (arr[i] > second) {
        second = max;
      }
      max = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

console.log(findSecondMaximum([11, 4, 1, 2, 5, 7, 8, 0, 5]));