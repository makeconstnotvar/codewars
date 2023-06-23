let count = 0;
function sort(arr) {
  let len = arr.length;

  let mid = Math.floor(len / 2) - 1
  for (let i = mid; i >= 0; i--)
    down(arr, i);

  for (let i = len - 1; i > 0; i--) {

    swap(arr, 0, i);
    down(arr, 0, i);
  }
  return arr;
}

function swap(arr, a, b) {
  count++
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function down(arr, parentIdx, limitIdx) {
  if (limitIdx == null) {
    limitIdx = arr.length - 1;
  }
  let leftIdx = 2 * parentIdx + 1;
  let rightIdx = 2 * parentIdx + 2;
  let maxIdx = arr[rightIdx] != null && arr[leftIdx] < arr[rightIdx] ? rightIdx : leftIdx;
  while (maxIdx < limitIdx && arr[parentIdx] < arr[maxIdx] && arr[maxIdx] != null) {
    swap(arr, parentIdx, maxIdx);
    parentIdx = maxIdx;
    leftIdx = 2 * parentIdx + 1;
    rightIdx = 2 * parentIdx + 2;
    maxIdx = arr[rightIdx] != null && arr[leftIdx] < arr[rightIdx] ? rightIdx : leftIdx;
  }
}

//let data = [2, 21, 5, 4, 11, 6, 8, 25, 12, 20]
//console.log(down(data, 0))

function heapify(arr, len, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  // If left child is larger than root
  if (left < len && arr[left] > arr[largest])
    largest = left;

  // If right child is larger than largest so far
  if (right < len && arr[right] > arr[largest])
    largest = right;

  // If largest is not root
  if (largest != i) {
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, len, largest);
  }
}

const arr = [1, 7, 11, 9, 12, 10, 2, 4, 3, 5, 6, 9, 8, 5];
console.log(sort(arr))
console.log(count)