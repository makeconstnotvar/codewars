let text = 'This is a test!';

function encrypt(text, n) {
  while (n > 0) {
    text = shuffle(text);
    n--;
  }
  return text;
}

function decrypt(encryptedText, n) {
  return encryptedText;
}

function shuffle(text) {
  let secondChars = '';
  let otherChars = text.split('').reduce((acc, char, i) => {
    i % 2 ? secondChars += char : acc += char;
    return acc;
  }, '');
  return secondChars + otherChars;
}

encrypt(text, 1);