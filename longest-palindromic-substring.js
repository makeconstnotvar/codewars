function longestPalindrome(s) {
  let max = s.length == 1 ? s : s[1];

  for (let i = 1; i < s.length; i++) {
    if (s[i-1] == s[i]) {
      let left = i-1;
      let right = i ;
      while (left > -1 && right < s.length && s[left] == s[right]) {
        if (right - left + 1 > max.length) {
          max = s.substring(left, right + 1);
        }
        left--;
        right++;
      }
    } else if (s[i - 1] == s[i + 1]) {
      let left = i - 1;
      let right = i + 1;
      while (left > -1 && right < s.length && s[left] == s[right]) {
        if (right - left + 1 > max.length) {
          max = s.substring(left, right + 1);
        }
        left--;
        right++;
      }
    }

  }
  return max;
}

console.log(longestPalindrome('bb'))
