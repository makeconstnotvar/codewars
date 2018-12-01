let text1 = 'This is a test!';
let text2 = 'hsi  etTi sats!';

function encrypt(text, n) {
  if (!text)
    return text;

  while (n > 0) {
    text = shuffle(text);
    n--;
  }

  return text;
}

/*
 * Extract second letters 'aBaBaBaBa' -> BBBB+aaaaa;
 */
function shuffle(text) {
  let secondChars = '';

  let chars = text.split('').reduce((acc, char, i) => {
    i % 2 ? secondChars += char : acc += char;
    return acc;
  }, '');

  return secondChars + chars;
}

function decrypt(text, n) {
  if (!text)
    return text;

  while (n > 0) {
    text = unshuffle(text);
    n--;
  }

  return text;
}

/*
 * Split 'BBBBaaaaa' -> [a,a,a,a,a] & [B,B,B,B];
 * Merge a+B, a+B, a+B, a+B, a+'';
 */
function unshuffle(text) {
  let result = '';

  let count = Math.floor(text.length / 2);

  let secondChars = text.slice(0, count).split('');

  let chars = text.slice(count).split('');

  for (let i = 0; i <= count; i++) {
    let char = chars[i] || '';
    let secondChar = secondChars[i] || '';
    result += char + secondChar;
  }

  return result;
}

encrypt(text1, 2);
decrypt(text2, 1);