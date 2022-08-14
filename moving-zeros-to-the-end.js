function moveZeros(arr) {
  let gap = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i + gap] === 0) {
      gap++;
    }
    arr[i] = arr[i + gap]
  }
  for (let i = arr.length - gap; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

//let result = moveZeros([false,1,0,1,2,0,1,3,"a"]);
let result = moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]);
//let result = moveZeros([9, 0, 0, 9]);
//console.log([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
console.log(result)
