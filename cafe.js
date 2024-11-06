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
            dp[0][1] = data[0];
        } else {
            dp[0][0] = data[0];
        }
        for (let row = 1; row < data.length; row++) {
            let isCoup = data[row] >= 100;
            dp[row] = dp[row] || [];
            let len = isCoup ? dp[row - 1].length + 1 : dp[row - 1].length;


            for (let col = 0; col < len; col++) {
                if (isCoup) {
                    let a = dp[row - 1]?.[col - 1]
                    let b = dp[row - 1]?.[col + 1]
                    dp[row][col] = Math.min((a + data[row]) || Number.MAX_SAFE_INTEGER, b || Number.MAX_SAFE_INTEGER)
                } else {
                    let a = dp[row - 1]?.[col];
                    let b = dp[row - 1]?.[col + 1];
                    dp[row][col] = Math.min((a + data[row]) || Number.MAX_SAFE_INTEGER, b || Number.MAX_SAFE_INTEGER)
                }
            }
        }
    })









