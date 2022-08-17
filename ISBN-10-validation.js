function validISBN10(isbn) {
  if (isbn.length != 10)
    return false;
  let acc = 0;
  for (let i = 0; i < isbn.length; i++) {
    let val = i == 9 && isbn[i] == 'X' ? 10 : isbn[i];
    acc += val * (i + 1);
  }
  return acc % 11 == 0;
}

console.log(validISBN10("1112223339"))