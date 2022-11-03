function merge(array, left, mid, right) {
  let l = left, r = mid, result = [];
  while (l < mid && r < right) {
    if (array[l] <= array[r]) {
      result.push(array[l]);
      l++;
    } else {
      result.push(array[r]);
      r++;
    }
  }
  if (l < mid)
    result = result.concat(array.slice(l, mid));
  if (r < right)
    result = result.concat(array.slice(r, right + 1));
  return result;
}

function merge_sort(array, left = 0, right = array.length) {

  if ((right - left) <= 1)
    return
  const mid = Math.floor((left + right) / 2);
  merge_sort(array, left, mid);
  merge_sort(array, mid, right);
  let result = merge(array, left, mid, right);
  let j = 0;
  for (let i = left; i < right; i++) {
    array[i] = result[j];
    j++;
  }
  return array
}

const arr = [1, 7, 11, 9, 12, 10, 2, 4, 3, 5, 6, 9, 8, 5];
//console.log(merge([1, 7, 11, 9, 12, 10, 2, 4, 3, 5, 6, 9, 8, 5], 0, 8, 13))
console.log(merge_sort(arr));
console.log(1);