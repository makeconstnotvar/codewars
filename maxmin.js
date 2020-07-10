function maxMin(arr) {
  let max = arr.length - 1;
  let result = [];
  arr.sort((a, b) => a - b)
  for (let i = 0; i <= max / 2; i++) {
    result.push(arr[max - i])
    if (max - i != i)
      result.push(arr[i])
  }
  //console.log(result);
  return result;
}

maxMin([1, 2, 3, 4, 5, 6, 7]);