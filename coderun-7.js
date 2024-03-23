let input = [
  [2, 2],
  [3, 4],
  [2, 3],
  [1, 3],
  [2, 4],
]
let data = {'1':[1,2,3]},
  count = 0,
  vertices = 0,
  edges = 0;
input.forEach(nums => {
  let [a, b] = nums;
  if (data[a] == null)
    data[a] = [];
  //let test
  data[a].push(b);
})
let result =
console.log(1)

