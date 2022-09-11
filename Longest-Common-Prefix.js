function longestCommonPrefix(strs) {
  if (strs.length == 1)
    return strs[0];
  let result = '';
  strs = strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];
  let i = 0;
  while (first[i] && first[i] == last[i]) {
    result += first[i];
    i++;
  }

  return result;
}

console.log(longestCommonPrefix([""]))