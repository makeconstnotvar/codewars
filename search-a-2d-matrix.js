let searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    let row = Math.floor((left + right) / 2);
    if (target >= matrix[row][0] && target <= matrix[row][matrix[row].length - 1])
      return binarySearch(matrix[row], target);
    else if (target < matrix[row][0] && row > 0) {
      right = row - 1;
    } else if (target > matrix[row][0] && row < matrix.length - 1) {
      left = row + 1
    } else {
      return false
    }
  }
  return false;
};

let binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target == arr[mid])
      return true
    if (target > arr[mid])
      left = mid + 1
    else
      right = mid - 1
  }
  return false
}

//console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));
console.log(searchMatrix([[1, 3, 5, 7]], 3));

/*
[1,3,5,7],
[10,11,16,20],
[23,30,34,60]
* */
