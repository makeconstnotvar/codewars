function findMedianSortedArrays(nums1, nums2) {
  let result = 0;
  /*
  [999] - 2 / 1
  [1234567] - 7 / 4
  9
  12345 5 67999
  */
  let total = nums1.length + nums2.length;
  let half = Math.floor(total / 2);
  let mid1 = Math.floor(nums1.length / 2);
  let mid2 = half - mid1; //Math.floor(nums2.length / 2);

  if (nums1[mid1] <= nums2[mid2 + 1] && nums2[mid2] <= nums1[mid1 + 1]) {

  }

  return result;
}

function test(nums1, nums2) {
  let result
  let merged = nums1.concat(nums2).sort();
  let mid = Math.floor(merged.length / 2);
  console.log('mid', mid)
  if (merged.length % 2 == 0) {
    result = (merged[mid] + merged[mid - 1]) / 2
  } else {
    result = merged[mid]
  }
  return result
}

console.log(test([1, 7, 8], [2, 3, 4, 5, 6]))
console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5]))