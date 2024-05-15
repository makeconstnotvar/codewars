const wordBreak = (str, dic) => {
  const end = str.length;
  const dp = Array(end).fill(0);
  dp[end] = 1;
  for (let i = end - 1; i >= 0; i--) {
    for (let word of dic) {
      let test = str.startsWith(word, i)
      if (test) {
        dp[i] = dp[i] || dp[i + word.length]
      }
    }
  }
  return dp[0] == 1;
}
//catsandog
//000000010
//000000100

console.log(wordBreak('leetcodeso', ['cod', 'code', 'so', 'leet']));
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak('aaaaaaa', ["aaaa", "aaa"]));
console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]));


const wordBreak2 = (str, dic) => {
  const set = new Set(dic);
  const stack = [str.length];
  while (stack.length > 0) {
    let end = stack.pop();
    for (let i = end - 1; i >= 0; i--) {
      const text = str.slice(i, end);
      if (set.has(text)) {
        if (i == 0) {
          return true;
        }
        stack.push(i)
      }
    }
  }
  return false;
};

const wordBreak1 = (s, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;

  const set = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const w = s.slice(start, end);
      if (dp[start] === true && set.has(w)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
};