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
  for (let letter of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    let left = 0;
    let right = 0;
    let counter = str[left] == letter ? k : k - 1;
    while (right < str.length) {

      while (counter > -1 && right < str.length) {
        right++;

        if (letter != str[right]) {
          counter--;
        }
        if(counter> -1 && right < str.length){
          max = Math.max(max, right - left + 1);
        }
      }

      if (left <= right) {
        left++;
        if (str[left - 1] != letter) {
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
console.log(resolve(2, 'AAAA'))

/*
function resolve(k, str) {
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let counter = k;
    let letter = str[i];
    let left = 0;
    let right = 0;
    while (right < str.length) {
      if (counter > -1 || right == left) {
        max = Math.max(max, right - left + 1);
        right++;
        if (letter != str[right] ) {
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


*/
