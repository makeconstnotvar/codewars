function romanToInt (s) {
  let result = 0;
  const vocab = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && vocab[s[i]] < vocab[s[i + 1]]) {
      result -= vocab[s[i]];
    } else {
      result += vocab[s[i]];
    }
  }
  return result;
}