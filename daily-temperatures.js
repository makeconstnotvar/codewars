function dailyTemperatures(temperatures) {
  let stack = [];
  let result = Array(temperatures.length);
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      let [_, idx] = stack.pop();
      result[idx] = i - idx;
    }
    stack.push([temperatures[i], i])
  }
  while (stack.length > 0) {
    let [_, idx] = stack.pop();
    result[idx] = 0;
  }
  return result
}

let data = [73, 74, 75, 71, 69, 72, 76, 73];
dailyTemperatures(data)