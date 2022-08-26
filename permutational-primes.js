function resolve() {
  let n = 100;
  let div = 2;
  let results = [];
  while (n > 1) {
    let x = n % div;
    if (x == 0) {
      results.push(div);
      n = n / div;
      if (isPrime(n)) {
        results.push(n);
        break;
      }
    } else {
      div = div % 2 == 0 ? div + 1 : div + 2;
    }
  }
  console.log(results.join(' '));
}

function primeSieve(max) {
  let n = (max - 1) / 2;
  let results = [];
  let imax = (Math.sqrt(2 * n + 1) - 1) / 2;

  for (let i = 1; i <= n; i++)
    results[i] = 1;

  for (let i = 1; i <= imax; i++) {
    let jmax = (n - i) / (2 * i + 1);
    for (let j = i; j <= jmax; j++) {
      let a = i + j + 2 * i * j;
      results[a] = 0;
    }
  }

  let nums = results.reduce((acc, val, idx) => {
    if (val)
      acc.push(2 * idx + 1);
    return acc;
  }, [2]);

  return nums;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return num > 1;
}

function primeSeiveEratosthenes(max) {
  let primes = [];
  let out = new Array(max+1);

  for (let i = 2; i <= max; i++) {
    if (!out[i]) {
      primes.push(i);
      for (let j = i * i; j <= max; j = j + i) {
        out[j] = 1
      }
    }
  }

  return primes;
}
console.time('a')
let a = primeSeiveEratosthenes(100000)
console.timeEnd('a')
console.time('b')
let b = primeSieve(100000)
console.timeEnd('b')
