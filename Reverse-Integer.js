function reverse(num) {
  let sign = num < 0;
  let result = 0;
  num = Math.abs(num)
  while (num > 0) {
    let tail = num % 10;
    num = Math.trunc(num / 10)
    result = result * 10 + tail;
  }
  if (result > 2147483647)
    return 0;
  return sign ? -result : result;
}

reverse(1534236469)