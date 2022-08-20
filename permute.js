function permute1(permutation) {
  let length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

//console.log(permute1(['a', 'b', 'c',]));

function permute(arr) {
  let results = []
  if (arr.length == 1) {
    return arr
  }
  arr.forEach(letter => {
    let tail = arr.filter(x => x != letter);
    let temp = permute(tail);

    let merged = temp.reduce((acc, t) => {
      if (Array.isArray(t)) {
        acc.push([letter].concat(t))
      } else {
        acc.push([letter, t])
      }
      return acc;
    }, [])
    results = results.concat(merged)
  })

  return results;
}

console.log(permute(['a', 'b', 'c']))