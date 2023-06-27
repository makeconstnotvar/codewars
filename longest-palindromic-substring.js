function longestPalindrome (s) {
  let max = ''
  for (let i = 1; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;
    while (left > -1 && right < s.length) {
      if (s[left] == s[right]) {
        max = max.length > right - left + 1 ? max : s.substring(left, right+1   )
      }
      left--;
      right++;
    }
  }
  return max;
}

console.log(longestPalindrome('cbbd'))
