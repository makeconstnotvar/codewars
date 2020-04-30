function printKPFNums(A, B, K) {
  // Count prime factors of
  // all numbers till B.
  let prime = [];

  for (let i = 0; i < B + 1; i++) {
    prime[i] = true;
  }

  for (let p = 2; (p * p) <= B; p++) {
    if (prime[p] === true) {
      for (let i = p * 2; i <= B; i += p) {
        prime[i] = false;
      }
    }
  }

  let result = prime.map((val, i) => val && i).filter(Boolean).join(' ')
  console.log(result)

}

printKPFNums(1, 100, 2);

