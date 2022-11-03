function findMedianSortedArrays(nums1, nums2) {
  let isEven = (nums1.length + nums2.length) % 2 == 0;
  let left1 = 0;
  let right1 = nums1.length - 1;
  let left2 = 0;
  let right2 = nums2.length - 1;
  let limit1 = false;
  let limit2 = false;

  while (true) {
    let mid1 = Math.floor((left1 + right1) / 2);
    let mid2 = Math.floor((left2 + right2) / 2);
    let leftVal = Math.max(nums1[mid1], nums2[mid2]);
    let rightVal = Math.min(nums1[mid1 + 1] || nums1[mid1], nums2[mid2 + 1] || nums2[mid2]);

    if (leftVal <= rightVal || limit1 && limit2) {
      if (isEven) {
        return (leftVal + rightVal) / 2;
      }
      return Math.max(leftVal, rightVal);
    }
    if (nums1[mid1] <= nums2[mid2]) {
      if(left1 )
      left1 = limit1 ? mid1 : mid1 + 1; //1-ый вправо
      right2 = limit2 ? mid2 : mid2 - 1; //2-ой влево
    } else {
      right1 = limit1 ? mid1 : mid1 - 1; //1-ый влево
      left2 = limit2 ? mid2 : mid2 - 1; //2-ой вправо
    }
    if (left1 == 0 || right1 == nums1.length - 1)
      limit1 = true;
    if (left2 == 0 || right2 == nums2.length - 1)
      limit2 = true;

  }
}

function test(nums1, nums2) {
  let result
  let merged = (nums1.concat(nums2)).sort((a, b) => a - b);
  let mid = Math.floor(merged.length / 2);
  if (merged.length % 2 == 0) {
    result = (merged[mid] + merged[mid - 1]) / 2
  } else {
    result = merged[mid]
  }
  return result
}

// console.log('test', test([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25]))
// console.log('check', findMedianSortedArrays([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25]))

console.log('test', test([1, 2], [3, 4]))
console.log('check', findMedianSortedArrays([1, 2], [3, 4]))