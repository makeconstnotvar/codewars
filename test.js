function firstNonRepeatingLetter(s) {
  if (!s) return '';
  let counter = s.split('').reduce((acc, original, i) => {
    let char = original.toLowerCase();
    acc[char] ? acc[char].count++ : acc[char] = {count: 1, original, order: i};
    return acc;
  }, {});

  let entries = Object.entries(counter)
    .map(([char, {count, original, order}]) => ({char, count, original, order}))
    .sort((a, b) => (a.order - b.order));
  let {char = ''} = entries.find(({count}) => count === 1) || {};
  return char;
}

firstNonRepeatingLetter('aabbccddEe');