const isPalindrome1 = function (x) {
  const str = String(x);
  const len = str.length;
  let i = 0;
  let j = len - 1;
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

const isPalindrome2 = function (x) {
  if (x < 0)
    return false;
  let num = x;
  let reverse = 0;
  while (x != 0) {
    reverse = reverse * 10 + x % 10;
    x = Math.floor(x / 10)
  }
  return reverse == num;
};
//console.log(isPalindrome2(10))

palindrome = (n, c) => {
  let l = c.length;
  let x = c.charAt(l - 1);
  let r = c.substring(0, c.length - 1).split('').reverse().join('')
  return c + x.repeat(n - l*2+1) + r;
}
let x = palindrome(7, 'abc')
console.log(1)