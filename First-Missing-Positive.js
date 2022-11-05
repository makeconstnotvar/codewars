function brute(nums) {
  const cache = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0)
      cache[nums[i]] = 1
  }
  for (let i = 1; i <= nums.length + 1; i++) {
    if (!cache[i])
      return i
  }
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}

function firstMissingPositive(nums) {
  let i = 0;
  let len = nums.length;
  while (i < nums.length) {
    let a = nums[i];
    let j = a - 1;
    let b = nums[j];
    let check = a > 0 && a <= len && a !== b;
    if (check) {
      swap(nums, i, j)
    } else {
      i++;
    }

  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
}

console.log(firstMissingPositive([9, 8, 7, -6, 6, 5, -4, 4, -3, 2, 1]))