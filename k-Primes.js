function getKPrimes(n) {
  var result = [];
  for (var i = 2; i <= Math.sqrt(n); i += i > 2 ? 2 : 1) {
    while (n % i == 0) {
      result.push(i);
      n = n / i;
    }
  }
  if (n > 1) {
    result.push(n);
  }
  return result;
}

function countKprimes(k, start, nd) {
  var result = [];
  for(var i = Math.max(start, 2); i <= nd; i++) {
    var kPrimes = getKPrimes(i);
    if (kPrimes.length === k) {
      result.push(i);
    }
  }
  return result;
}

function puzzle(s) {
  var p1 = countKprimes(1, 2, s),
    p3 = countKprimes(3, 2, s),
    p7 = countKprimes(7, 2, s),
    result = 0;
  for (var p7i = 0; p7i < p7.length; p7i++) {
    for (var p3i = 0; p3i < p3.length && s > p7[p7i] + p3[p3i]; p3i++) {
      result += p1.indexOf(s - p7[p7i] - p3[p3i]) > -1 ? 1 : 0;
    }
  }
  return result;
}

//let result = countKprimes(5, 500, 600) //--> [500, 520, 552, 567, 588, 592, 594]
//console.log(result)
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

  //document.querySelector('#result').textContent = nums.join(', ')
}

primeSieve(100);