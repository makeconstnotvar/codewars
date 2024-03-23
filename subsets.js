function subsets(nums) {
  let res = []

  function rec(arr, i) {
    if (i >= nums.length) {
      res.push(arr);
      return
    }

    rec([...arr], i+1)
    arr.push(nums[i]);
    rec([...arr], i+1)

  }

  rec([],0)

  return res;
}
var subsets2 = function(nums) {
  const res = [];
  const subset = []

  const dfs = (i) => {
    if(i >= nums.length) {
      res.push(subset.slice());
      return;
    }
    subset.push(nums[i]);
    dfs(i+1);

    subset.pop();
    dfs(i+1);
  }

  dfs(0);
  return res;
};

subsets2([1, 2, 3])
/*
       [1]         []  //23
  [12]       [1]      [2]     []  //3
[123][12]  [13][1]  [23][2]  [3][] //




[1,2,3]
 n, i
[1] [1,2] [1,3] [1,2,3]
[2] [2,3]
[3]
[ ]

*/