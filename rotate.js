function rightRotate(arr, n) {
  let len = arr.length;
  let result = [];
  for (let i = 0; i < len; i++) {
    let target = i + n;
    let pos = (target < len) ? target : Math.abs(len - target);
    result[pos] = arr[i];
    console.log(`i=${i} target=${target} pos=${pos}`, result)
  }
  return result;
}

rightRotate([300, -1, 3, 0], 3);