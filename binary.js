function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.ceil((left + right) / 2);
    const lVal = nums[left];
    const mVal = nums[mid];
    const rVal = nums[right];
    if (mVal == target) {
      return mid;
    }
    if (lVal <= mVal) {
      //валидный поиск по левой части
      if (target >= lVal && target <= mVal) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      //валидный поиск по правой части
      if (target >= mVal && target <= rVal) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

// console.log(search([0, 1, 2, 3, 4, 5], 5));

// 0 1 2 3 4 5 6
//console.log(search([4,5,6,7,0,1,2], 6));

//                          0  1   2  3   4  5  6  7  8  9  10 11 12
console.log(search([10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
console.log(search([3,  4,   5, 6, 7, 8, 9,10,11,12,0, 1, 2], 1));