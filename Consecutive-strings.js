function longestConsec(strarr, k) {
  let n = strarr.length;
  if (n === 0 || k > n || k <= 0)
    return '';

  let results = strarr.reduce((acc, s, i) => {
    let str = strarr.slice(i, i + k).join('');
    acc.push(str);
    return acc;
  }, []);

  let maxi = results.reduce((acc, str, i) => str.length > results[acc].length ? i : acc, 0);

  return results[maxi] || '';
}


longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2); //"abigailtheta"

longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1); //"oocccffuucccjjjkkkjyyyeehh"

longestConsec([], 3); //""
longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2); // "wlwsasphmxxowiaxujylentrklctozmymu")
/*longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2); // "")
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3); // "ixoyx3452zzzzzzzzzzzz")
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15); // "")
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0); // "")
*/