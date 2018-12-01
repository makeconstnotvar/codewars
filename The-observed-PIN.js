function getPINs(observed) {
  let dictionary = {
    '0': [0, 8],
    '1': [1, 2, 4],
    '2': [1, 2, 3, 5],
    '3': [2, 3, 6],
    '4': [1, 4, 5, 7],
    '5': [2, 4, 5, 6, 8],
    '6': [3, 5, 6, 9],
    '7': [4, 7, 8],
    '8': [0, 5, 7, 8, 9],
    '9': [6, 8, 9]
  };
  let arrays = observed.split('').map(digit => dictionary[digit]);

  let multi = cartesianProduct(arrays).map(m => m.join(''));
  return multi;
}


function cartesianProduct(arr) {
  return arr.reduce(function (a, b) {
    return a.map(function (x) {
      return b.map(function (y) {
        return x.concat(y);
      })
    }).reduce(function (a, b) {
      return a.concat(b)
    }, [])
  }, [[]])
}