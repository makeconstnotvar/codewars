function lengthOfLongestSubstring(str) {
  let cache = {};
  let currentLen = 0;
  let maxLen = 0;
  let from = 0;
  let to = 0;
  let scanFrom = 0;
  let scanTo = 0;
  for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    if (!cache[letter]) {
      cache[letter] = 1;
      currentLen++;
      scanTo=i;
      if (currentLen > maxLen) {
        maxLen = currentLen;
        from = scanFrom;
        to = i;
      }
    } else {
      cache = {[letter]: 1};
      currentLen = 1;
      scanFrom = i;
      scanTo = i;
    }

  }
  return str.substring(from,to+1);
}

const result = lengthOfLongestSubstring('abcabcbb');
console.log(result);