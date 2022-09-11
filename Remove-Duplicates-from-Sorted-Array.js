function removeDuplicates(nums) {
  let i = 0;
  for (let k = 1; k < nums.length; k++) {
    while (nums[i] == nums[k]) {
      k++
    }
    nums[i+1] = nums[k]
    i++

  }
  console.log(nums)
}

removeDuplicates([0, 1, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5])