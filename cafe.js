const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let data = [],
  count = 0;

rl.on('line', line => {

  if (count > 0) {
    data.push(+line);
  }

  count++;
})
  .on('close', function () {

    let dp = [[]];
    if (data[0] >= 100) {
      dp[0][1] = {money: data[0], coups: []};
    } else {
      dp[0][0] = {money: data[0], coups: []};
    }
    for (let row = 1; row < data.length; row++) {
      let isCoup = data[row] >= 100;
      dp[row] = dp[row] || [];
      let len = isCoup ? dp[row - 1].length + 1 : dp[row - 1].length;


      for (let col = 0; col < len; col++) {
        if (isCoup) {
          //ЛВ
          let a = (dp[row - 1]?.[col - 1]?.money + data[row]) || null
          //ПВ
          let b = dp[row - 1]?.[col + 1]?.money || null

          if (b < a) {
            dp[row][col] = {money: b, coups: [...dp[row - 1][col + 1]?.coups]|| []}
            dp[row][col].coups.push(row + 1);
          } else {
            dp[row][col] = {money: a, coups: dp[row - 1]?.[col - 1]?.coups || []}
          }

        } else {
          let a = (dp[row - 1]?.[col]?.money + data[row]) || null;
          let b = dp[row - 1]?.[col + 1]?.money || null;

          if (b < a) {
            dp[row][col] = {money: b, coups: [...dp[row - 1][col + 1]?.coups || []]}
            dp[row][col].coups.push(row + 1)
          } else {
            dp[row][col] = {money: a, coups: dp[row - 1][col]?.coups || []}
          }

        }
      }
    }

    let min = Number.MAX_SAFE_INTEGER;
    let idx = 0;
    for (let i = dp[dp.length - 1].length - 1; i >= 0; i--) {
      if (dp[dp.length - 1][i].money < min) {
        idx = i;
        min = dp[dp.length - 1][i].money
      }
    }

    console.log(dp[dp.length - 1][idx].money || 0)
    console.log(`${idx} ${dp[dp.length - 1][idx].coups.length}`)
    dp[dp.length - 1][idx].coups.forEach(x => console.log(x))

  })









