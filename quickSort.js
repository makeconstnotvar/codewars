function swap(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
function sortArray(nums, left=0, right=nums.length-1) {
  if (right-left < 1) return nums
  let pivotIdx = Math.random()*(right-left+1)+left | 0
  let pivot = nums[pivotIdx], anchr = left
  swap(nums, pivotIdx, right)
  for (let i=left; i<right; i++) {
    if (nums[i] < pivot) {
      swap(nums, anchr, i)
      anchr++
    }
  }
  swap(nums, anchr, right)
  sortArray(nums, left, anchr-1)
  sortArray(nums, anchr+1, right)
  return nums
}
const arr = [1, 7, 11, 9, 12, 10, 2, 4, 3, 5, 6, 9, 8, 5];
console.log(sortArray(arr))