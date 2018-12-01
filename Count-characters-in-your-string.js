function count(string) {
  return string.split('')
    .reduce((acc, char) => {
      acc[char] = !acc[char] ? 1 : acc[char] += 1;
      return acc;
    }, {})
}