//let data = [5, 4, 1, 2]
let data = [3, 2, 1, 2, 3]

function largestRectangleArea1(h) {
  let stack = [{val: h[0], size: 1}];
  let max = h[0];
  for (let i = 1; i < h.length; i++) {
    let val = h[i]

    if (stack.length == 0 || val >= stack[stack.length - 1].val) {
      stack.push({val, size: i + 1});
    } else {
      let last;
      while (stack[stack.length - 1] && val < stack[stack.length - 1].val) {
        last = stack.pop();
        let rec = last.val * (i + 1 - last.size);
        max = Math.max(max, rec);
      }
      stack.push({val, size: last.size});
    }
  }
  while (stack.length > 0) {
    let last = stack.pop();
    let rec = last.val * (h.length + 1 - last.size);
    max = Math.max(max, rec);
  }
  return max;
}


function largestRectangleArea2(h) {
  let stack = [0];
  let max = h[0];
  for (let i = 1; i < h.length; i++) {
    while (stack.length > 0 && (i == h.length || h[i] < h[stack.at(-1)])) {
      let last = stack.pop();
      let H = h[last]
      let W = i - last;
      max = Math.max(max, H * W);
    }
    stack.push(i);
  }
  return max;
}

function largestRectangleArea3(h) {
  const stack = [];
  let max = 0;

  for (let i = 0; i <= h.length; i++) {
    while (stack.length > 0 && (i === h.length || h[i] < h[stack.at(-1)])) {
      const H = h[stack.pop()];
      const W = stack.length === 0 ? i : i - stack.at(-1) - 1;
      max = Math.max(max, H * W);
    }
    stack.push(i);
  }
  return max;
}

console.log(largestRectangleArea3(data))
