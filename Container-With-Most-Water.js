function maxArea(arr) {
  let vol = 0;
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const h = Math.min(arr[i], arr[j]);
    const w = j - i;
    const newVol = w * h;
    if (newVol > vol) {
      vol = newVol;
    }
    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return vol;
}

//let result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
let result = maxArea([2,3,4,5,18,17,6])
console.log(result);