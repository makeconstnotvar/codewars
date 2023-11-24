const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = [],
  count = 0,
  m = 0,
  n = 0;
rl.on('line', line => {
  const nums = line.split(' ').map(Number);

  if (count == 0) {
    [m, n] = nums;
  } else {
    data.push(nums);
  }
  count++;
}).on('close', function () {
  //тут пишем код задачи
})
