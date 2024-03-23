const isPalindrome = str => str == str.split('').reverse().join('');
const partition = (str) => {
  let result = []
  let stack = []
  let rec = start => {
    if (start == str.length) {
      result.push(stack.slice())
      return
    }
    for (let i = start; i < str.length; i++) {
      let tail = str.substring(start,i);
      if (isPalindrome(tail)) {
        stack.push(tail)
        rec(start + 1);
        stack.pop()
      }
    }
  }
  rec(0)
  return result;
}

console.log(partition('aab'))