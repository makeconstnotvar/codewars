const primes = new Set();

function primeSeiveEratosthenes(max) {
  const seive = new Array(max + 1);

  for (let i = 2; i <= max; i++) {
    if (!seive[i]) {
      primes.add(i);
      for (let j = i * i; j <= max; j = j + i) {
        seive[j] = 1;
      }
    }
  }

  return primes;
}

function isPrime(num) {
  return primes.has(num)
}

function permute(arr) {
  let results = [];
  if (arr.length == 1) {
    return [arr];
  }
  arr.forEach((letter,i) => {
    let tail = arr.filter((_,j) => j != i);
    let temp = permute(tail);

    temp.forEach(x => {
      x.unshift(letter)
    })
    results = results.concat(temp)
  })

  return results;
}

function numToArray(num) {
  return num.toString().split('');
}

function permuteNum(num){
  const arr = numToArray(num);
  const temp = permute(arr);
  const nums = temp.map(x=>arrayToNum(x));
  const uniq = new Set(nums);
  return Array.from(uniq);
}

function arrayToNum(arr) {
  return parseInt(arr.join(''));
}

function permutationalPrimes(max, k) {
  const permutes = new Map();
  primeSeiveEratosthenes(max);
  primes.forEach(x=>{
    if(x>10){
     let test = permuteNum(x);
     if(test.length==3){
       console.log(1)
     }

    }
  })
}
//[3, 149, 379] count, min, max
permutationalPrimes(1000, 3)