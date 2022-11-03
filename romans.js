const vocab = [
  {sign: 'M', val: 1000},//900
  {sign: 'D', val: 500},//400
  {sign: 'C', val: 100},//90
  {sign: 'L', val: 50},//40
  {sign: 'X', val: 10},//9
  {sign: 'V', val: 5},//4
  {sign: 'I', val: 1},
]

function intToRoman(num) {
  let result = '';
  while (num > 0) {
    vocab.forEach((voc, idx) => {
      while (num >= voc.val) {
        let test = +num.toString().charAt(0)
        if (test == 4) {
          result += voc.sign
          result += vocab[idx - 1].sign
          num -= test * voc.val;
        } else if (test == 9) {
          result += vocab[idx + 1].sign
          result += vocab[idx - 1].sign
          num -= test * vocab[idx + 1].val;
        } else {
          result += voc.sign;
          num -= voc.val;
        }
      }
    })
  }
  return result;
}

//intToRoman(6) //VI
//intToRoman(4) //IV
intToRoman(104) //XL
//intToRoman(2) //II
//intToRoman(200) //CC
//intToRoman(400) //CD