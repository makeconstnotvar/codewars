function topKFrequent1(nums, k) {
  let cache = new Map();
  if (nums.length == 1)
    return nums;
  for (let i = 0; i < nums.length; i++) {
    let x = cache.get(nums[i])
    if (x != null) {
      cache.set(nums[i], x + 1)
    } else {
      cache.set(nums[i], 1)
    }
  }
  return [...cache].sort((a, b) => b[1] - a[1]).map(x => +x[0]).slice(0, k);
}

function topKFrequent2(nums, k) {
  let cache = {};
  let bucket = []
  let result = []
  if (nums.length == 1)
    return nums;
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]] == null) {
      cache[nums[i]] = 1
    } else {
      cache[nums[i]]++
    }
  }
  for (let idx in cache) {
    if (bucket[cache[idx]] == null) {
      bucket[cache[idx]] = [idx];
    } else {
      bucket[cache[idx]].push(idx);
    }
  }
  let i = bucket.length - 1;
  while (result.length < k) {
    if (bucket[i] != null) {
      let j = 0;
      while (j < bucket[i].length && result.length < k) {
        result.push(bucket[i][j]);
        j++;
      }
    }
    i--;
  }
  return result
}

topKFrequent1([9, 8, 6, 8], 1)


function swap(arr, a, b) {
  count++
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}


