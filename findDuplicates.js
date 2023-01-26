// 0  1  2  3  4  5  6  7
//[4, 3, 2, 7, 8, 2, 3, 1]

function findDuplicates1(nums) {
  let i = 0;
  let results = new Set();
  while (i < nums.length) {
    let val = nums[i];
    let targetIdx = val - 1;
    if (val == nums[targetIdx] && val != i + 1) {
      results.add(nums[i]);
      i++;
    } else if (val != nums[targetIdx]) {
      swap(i, targetIdx)
    } else if (nums[i] == i + 1)
      i++;
  }

  function swap(a, b) {
    let cache = nums[b]
    nums[b] = nums[a];
    nums[a] = cache;
  }

  return Array.from(results);
}

function findDuplicates(nums) {
  let ans = [];
  let index = 0;
  for (let i of nums) {
    index = Math.abs(i) - 1;
    nums[index] > 0 ? nums[index] *= -1 : ans.push(Math.abs(i));
  }
  return ans;
}

let res = findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(res)
