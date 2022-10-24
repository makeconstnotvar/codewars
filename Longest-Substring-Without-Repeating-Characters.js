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
    if (cache[letter] == null) {
      cache[letter] = i;
      currentLen++;
      scanTo = i;
      if (currentLen > maxLen) {
        maxLen = currentLen;
        from = scanFrom;
        to = i;
      }
    } else {
      scanFrom = cache[letter] + 1;
      scanTo = i;
      currentLen = scanTo - scanFrom + 1;
      let x = scanFrom;
      cache = {}
      while(x<=scanTo){
         cache[str[x]]=x;
         x++
      }
    }

  }
  console.log(str.substring(from, to + 1))
  return to - from + 1;
}

//const result = lengthOfLongestSubstring('abcabcbb');
//const result = lengthOfLongestSubstring('pwwkew');
const result = lengthOfLongestSubstring('dvdf');
//const result = lengthOfLongestSubstring('tmmzuxt');
console.log(result);