const rob = nums => {

  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    let max = Math.max(a + nums[i], b);
    a = b;
    b = max;
  }
  return b;
};

console.log(rob([2, 1, 1, 2]))
/*
  0 0 2 1 1 2
  0 2 *
    2 2 *
      2 3 *
        3 4 *



      a b
      1 3
        a b

 i   0  1  2  3  4
 v   2  7  9  3  1
     -     *  *
        -     *  *

     _     _     *





*/