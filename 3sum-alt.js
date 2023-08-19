function brute(nums) {
  let triplets = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        let a = nums[i];
        let b = nums[j];
        let c = nums[k];
        if (a + b + c == 0 && i != j && i != k && j != k) {
          let t = [a, b, c];
          t.sort((a, b) => a - b);
          triplets[t.join('')] = t;
        }
      }
    }
  }
  return Object.values(triplets);
}

function threeSum2(nums) {
  let triplets = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {

      let sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        triplets.push([nums[i], nums[left], nums[right]]);
        while (nums[left] == nums[left + 1]) {
          left++;
        }
        while (nums[right] == nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }

  }
  return triplets;
}

//let data = [-1, 0, 1, 2, -1, -4]
//let data = [0, 0, 0, 0]
let data = [-2, 0, 0, 2, 2]
console.log(brute(data));

console.log(threeSum2(data));
