function sortAsc(arr) {
  heapifyMax(arr)

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    downMaxLimited(arr, 0, i);
  }
  return arr;
}

function sortDesc(arr) {
  heapifyMin(arr)

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    downMinLimited(arr, 0, i);
  }
  return arr;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function heapifyMax(arr) {
  let mid = Math.floor(arr.length / 2) - 1
  for (let i = mid; i >= 0; i--)
    downMax(arr, i);
  return arr;
}

function downMax(arr, i) {
  if (arr[i] == null)
    return

  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max;

  if (arr[right] == null || arr[left] > arr[right]) {
    max = left;
  } else {
    max = right;
  }

  while (arr[i] < arr[max]) {
    swap(arr, i, max);
    downMax(arr, max)
  }
}

function heapifyMin(arr) {
  let mid = Math.floor(arr.length / 2) - 1
  for (let i = mid; i >= 0; i--)
    downMin(arr, i);
  return arr;
}

function downMin(arr, i) {
  if (arr[i] == null)
    return

  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let min;

  if (arr[right] == null || arr[left] < arr[right]) {
    min = left;
  } else {
    min = right;
  }

  while (arr[min] < arr[i]) {
    swap(arr, i, min);
    downMin(arr, min)
  }
}

function print(arr) {
  let from = 0;
  let to = 0;
  let counter = 1;
  arr.forEach((x, i) => {
    if (i == to) {
      console.log(arr.slice(from, from + to || 1).join(' '))
      from = from + to || 1
      to = Math.pow(2, counter);
      counter++;
    }
  })

}

function downMinLimited(arr, i, limit) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let target;

  if (arr[right] == null || arr[left] < arr[right]) {
    target = left;
  } else {
    target = right;
  }

  while (target < limit && arr[target] != null && arr[i] > arr[target]) {
    swap(arr, i, target);
    downMinLimited(arr, target, limit)
  }
}

function downMaxLimited(arr, i, limit) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let target;

  if (arr[right] == null || arr[left] > arr[right]) {
    target = left;
  } else {
    target = right;
  }

  while (target < limit && arr[target] != null && arr[i] < arr[target]) {
    swap(arr, i, target);
    downMaxLimited(arr, target, limit)
  }
}

function down(arr, i, limit) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  //максимальный ребенок
  let target = arr[right] == null && arr[left] > arr[right] ? left : right;

  while (target < limit && arr[target] != null && arr[i] < arr[target]) {
    swap(arr, i, target);
    i = target;
    left = 2 * i + 1;
    right = 2 * i + 2;
    target = arr[right] == null && arr[left] > arr[right] ? left : right;
  }
}

//let data = [2, 21, 5, 4, 11, 6, 8, 25, 12, 20]
//let data = [1, 7, 11, 9, 12, 10, 2, 4, 3, 5, 6, 9, 8, 5];
let data = [1, 7, 10, 9, 15, 13, 2, 4, 3, 5, 6, 9, 8, 5];
//print(data)
console.log(data.join(' '))
console.log(print(heapifyMax(data)))
//console.log(' ')
//console.log(heapifyMin(data).join(' '))
//console.log(print(heapifyMin(data)))
//console.log(' ')
//console.log(sortAsc(data).join(','))
//console.log(' ')
//console.log(sortDesc(data).join(','))
/*
Math.floor((i-1)/2)
let left = 2*i+1
let right = 2*i+2
14/2 = 7-1 = 6
let mid = Math.floot(arr.length/2)-1 -> 0
                      1
                 3          2
               4 5          8  5
            7 9   12 6    9 10    11

             1
       3            2
    4      5      8     5
  7 9    12 6    9 10   11

12,
11,10,
9,9,8,7
6,5,5,4,3,2,1

,3,9,9,8,7,6,5,5,1,2,4,|10,11,12

*/
