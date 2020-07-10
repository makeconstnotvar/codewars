function binarySearch(arr, item) {
  let first = 0, mid;
  let last = arr.length - 1;
  let found = false;
  while ((first <= last) && !found) {
    mid = Math.floor((first + last) / 2);
    if (arr[mid] == item)
      found = mid;
    else {
      if (item < arr[mid])
        last = mid - 1;
      else
        first = mid + 1
    }
  }
  return found;
}

console.log(findSum3([1, 21, 3, 14, 5, 60, 7, 6, 70, 77], 81));

function findSum1(arr, value) {
  arr.sort(function (a, b) {
    return a - b
  });
  let index;
  for (let j of arr) {
    index = binarySearch(arr, value - j)
    if (index)
      return [j, value - j]
  }
  return false;
}


function findSum2(arr, value) {

  arr.sort((a, b) => a - b);

  let index1 = 0,
    index2 = arr.length - 1,
    result = [],
    sum = 0;

  while (index1 != index2) {
    sum = arr[index1] + arr[index2]

    if (sum < value) {
      index1++;
    } else if (sum > value) {
      index2--;
    } else {
      result.push(arr[index1]);
      result.push(arr[index2]);
      return result;

    }
  }
  return false;
}

function findSum3(arr, value) {
  let found_values = new Set();
  let results = [];
  for (let i in arr) {
    let x = value - arr[i];
    if (found_values.has(x)) {
      results.push(x);
      results.push(arr[i]);
      return results;
    }
    found_values.add(arr[i]);
  }
  return false;
}
