const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = [],
  count = 0,
  n = 0,
  m = 0;
rl.on('line', line => {
  const nums = line.split(' ').map(Number);

  if (count == 0) {
    n = +line;
  }
  if (count == 1) {
    a = line.split(' ').map(Number);
  }
  if (count == 2) {
    m = +line;
  }
  if (count == 3) {
    b = line.split(' ').map(Number);
  }
  count++;
}).on('close', function () {
  let data = [[0]]
  for (let i = 0; i < n; i++) {
    data[i]=data[i]||[];
    for (let j = 0; j < m; j++) {
      let add = b[i]==a[j] ? 1 : 0

      if(i==0 && j == 0)
        data[i][j] = add;
      else if(i==0){
        data[i][j] = data[i][j-1] + add;
      }
      else if(j==0){
        data[i][j] = data[i-1][j] + add;
      }
      else{
        data[i][j] = Math.max(data[i-1][j], data[i][j-1]) + add;
      }
    }
  }
  let search = true;
  let i=m-1;
  let j=n-1;
  while(search){
    if(data[i][j] == data[i-1][j-1]){
      i--;
      j--;
    }
  }
})
/*
  1 2 3
2 0 1 1
3 0 1 2
1 1 1 2
*/
