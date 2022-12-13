function multiply(num1, num2) {

  if (num2.length > num2.length)
    [num1, num2] = [num2, num1]

  let bigsum = '';
  let buffer = 0;
  let zeros = 0;
  let i = num2.length - 1;

  while (i >= 0) {
    let minsum = '';
    let j = num1.length - 1;

    while (j >= 0) {
      let s = num2[i] * num1[j] + (+buffer || 0);
      //console.log(`${num2[i]}*${num1[j]}+${buffer || 0}=${s}`);
      buffer = Math.trunc(s / 10) || 0;
      s %= 10;
      minsum = s + minsum;
      if (j == 0 && buffer > 0) {
        minsum = buffer + minsum;
      }
      j--;
    }
    //console.log(minsum)
    minsum += '0'.repeat(zeros);
    zeros++;
    i--;

    let k = 0;
    let temp = '';
    buffer = 0;

    while (k < minsum.length) {

      let a = +bigsum[bigsum.length - k - 1] || 0;
      let b = +minsum[minsum.length - k - 1] || 0
      let s = a + b + buffer;
      buffer = Math.trunc(s / 10) || 0;
      s %= 10;
      if (k == minsum.length-1 && buffer > 0) {
        s = buffer*10 + s;
      }
      temp = s + temp;
      k++;
    }
    buffer = 0;
    console.log(`${bigsum} + ${minsum} = ${temp}`)
    bigsum = temp;
    //console.log('temp', temp)
  }
  bigsum = bigsum.replace(/\b(0(?!\b))+/g, "")
  console.log(bigsum)
  return bigsum
}

/*
 00738
 06150
 49200
------
 56088
* */

//121932631112635269
//111932631212635269
multiply("123456789", "987654321")