let subsetsWithDup = nums => {
  let result = {};
  let temp = [];
  let rec = i => {
    if (i >= nums.length) {
      let t = temp.slice()
      result[t.sort().join(',')] = (t);
      return
    }
    temp.push(nums[i]);
    rec(i + 1);
    temp.pop();
    rec(i + 1);
  }
  rec(0);
  return Object.values(result)
};

let res = subsetsWithDup([1, 2, 2]);
//let res = subsetsWithDup([4, 4, 4, 1, 4]);
console.log(res)