function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  if (target > nums[right])
    return right + 1;
  if (target <= nums[left])
    return left;
  while (left <= right) {
    mid = Math.round((right + left) / 2);
    console.log(`[${left},${right}] mid:nums[${mid}]=${nums[mid]}`);
    if (target == nums[mid] || target > nums[mid - 1] && target < nums[mid])
      break;
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log('Result idx:', mid, 'tar', target, 'val:', nums[mid])
  return mid;
}

function binary(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  if (target > nums[right] || target < nums[left]) {
    console.log(`target:${target} not found`);
    return;
  }

  while (left <= right) {
    mid = Math.round((right + left) / 2);
    console.log(`[${left},${right}] mid:nums[${mid}]=${nums[mid]}`);
    if (target == nums[mid]) {
      console.log(`target:${target} nums[${mid}]=${nums[mid]} `);
      return mid;
    }
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
console.log(`target:${target} not found`)
}

binary([1, 3], 2);
binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
binary([1, 2, 3, 5, 6, 7, 8, 9], 4);
binary([2, 3, 4, 5, 6, 7, 8, 9], 1);
binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 6);
binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 7);
binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);
binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);