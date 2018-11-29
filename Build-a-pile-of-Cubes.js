function findNb(m) {
  let n = 0;
  while (m > 0) {
    n++;
    m -= Math.pow(n, 3);

  }
  return m === 0 ? n : -1;
}

function findNb2(m) {
  /*
   * m = (n * (n + 1) / 2) ^ 2;
   * 2*sqrt(m) = n * (n + 1);
   * n^2 + n - 2*sqrt(m) = 0; (ax^2+bx+c=0)
   * 1) n = (-1-sqrt(1+4*2*sqrt(m)))/2; impossible negative value;
   * 2) n = (-1+sqrt(1+4*2*sqrt(m)))/2; - possible only n is integer and "n % 1" is a test ;
   */

  let n = (-1 + Math.sqrt((1 + 8 * Math.sqrt(m)))) / 2;
  return n % 1 ? -1 : n;
}


let n = findNb2(100);
console.log(n);