let data = [2, 1, 2]

function largestRectangleArea(h) {
  let stack = [{val: h[0], size: 1}];
  let max = h[0];
  for (let i = 1; i < h.length; i++) {
    let val = h[i]

    if (stack.length == 0 || val >= stack[stack.length - 1].val) {
      stack.push({val, size: i + 1});
      max = Math.max(max, val);
    } else {
      let last;
      while (stack[stack.length - 1] && val < stack[stack.length - 1].val) {
        last = stack.pop();
        let rec = last.val * (i + 1 - last.size);
        max = Math.max(max, rec);
      }
      stack.push({val, size: last.size});
      max = Math.max(max, val);
    }
  }
  while (stack.length > 0) {
    let last = stack.pop();
    let rec = last.val * (h.length + 1 - last.size);
    max = Math.max(max, rec);
  }
  return max;
}

console.log(largestRectangleArea(data))