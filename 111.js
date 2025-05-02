const dailyTemperatures = temperatures => {
  const stack = [0]
  const result = []
  for (let i = 1; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const last = stack.pop()
      result[last] = i - last
    }
    stack.push(i)
  }
  return result.concat(stack.map(x => 0))
};
console.log(dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78]))
//                            [3  ,1,  1,  2 , 1,  1,  0,  1,  1,  0]
//console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))