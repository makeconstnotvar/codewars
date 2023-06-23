/*const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line.trim()));

process.stdin.on('end', resolve);
*/

function resolve(k, str) {

  let max = 0;
  let counter = k;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    let left = 0;
    let right = 0;
    while (right < str.length) {
      if (counter > -1 || right == left) {
        max = Math.max(max, right - left + 1);
        right++;
        if (letter != str[right] && right < str.length) {
          counter--;
        }
      } else {
        left++;
        if (str[left - 1] != letter || left == right) {
          counter++
        }
      }
    }
  }
  return max;
}

`
0123
BAAA
  _
  _ 
`
'                 '
console.log(resolve(0, 'BAAA'))
