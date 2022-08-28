const primeSet = {};
primeSeiveEratosthenes(50000);
const primes = Object.values(primeSet);

function primeSeiveEratosthenes(max) {
  const seive = new Array(max + 1);
  for (let i = 2; i <= max; i++) {
    if (!seive[i]) {
      primeSet[i] = i;
      for (let j = i * i; j <= max; j = j + i) {
        seive[j] = 1;
      }
    }
  }
}

function permute(arr) {
  let results = [];
  if (arr.length == 1) {
    return [arr];
  }
  arr.forEach((letter, i) => {
    let tail = arr.filter((_, j) => j != i);
    let temp = permute(tail);

    temp.forEach(x => {
      x.unshift(letter)
    })
    results = results.concat(temp)
  })

  return results;
}

function permuteNum(num, max) {
  const arr = num.toString().split('');
  const temp = permute(arr);
  const nums = temp.reduce((acc, x) => {
    let str = x.join('')
    if (!/^0+/.test(str)) {
      const int = parseInt(str);
      if (int <= max && primeSet[int]) {
        acc.push(int);
      }
    }
    return acc;
  }, []);
  const uniq = new Set(nums);
  return Array.from(uniq).sort();
}

function permutational_primes(max, k) {
  const permutes = {};
  let limit = primes.findIndex(x => x >= max)
  for (let i = 5; i < limit; i++) {
    let x = primes[i]
    let permutedPrimes = permuteNum(x, max);
    if (permutedPrimes.length == k + 1) {
      const [a, ...rest] = permutedPrimes;
      if (!permutes[a]) {
        permutes[a] = a;
      }
    }
  }

  const permutesArr = Object.values(permutes);
  return [permutesArr.length, permutesArr[0] || 0, permutesArr[permutesArr.length - 1] || 0];
}

//[3, 149, 379] count, min, max
console.time('b')
console.log(permutational_primes(27185, 4))

console.timeEnd('b')