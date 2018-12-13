let MORSE_CODE = {
  '....': 'H',
  '.': 'E',
  '-.--': 'Y',
  '.---': 'J',
  '..-': 'U',
  '-..': 'D'
};

function decodeMorse(morseCode) {
  return morseCode
    .trim()
    .split('   ')
    .map(word => word.split(' ')
      .map(letter => MORSE_CODE[letter])
      .join(''))
    .join(' ');
}

decodeMorse('.... . -.--   .--- ..- -.. .')