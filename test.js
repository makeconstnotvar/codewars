const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let data = {},
  firstKey,
  count = 0;
rl.on('line', line => {
  const nums = line.split(' ').map(Number);
  let [n, m] = nums;

  if (count > 0 && n != null && m != null) {
    data[n] = {...data[n] || {}, val: n, visited: false, child: [...(data[n]?.child || []), m]}
    data[m] = {...data[m] || {}, val: m, visited: false, child: [...(data[m]?.child || []), n]}
  }
  if(count==1){
    firstKey =  n;
  }
  count++;
})
  /*
  {
    '1': { val:1, visited: false, child: [ 3 ] },
    '2': { val:2, visited: false, child: [ 2, 2, 3, 4 ] },
    '3': { val:3, visited: false, child: [ 4, 2, 1 ] },
    '4': { val:4, visited: false, child: [ 3, 2 ] }
  }
  */
  .on('close', function () {
    if(data.length==0){
      console.log(0)
      console.log('')
    }
    else{
      const result = [];

      const stack = [data[firstKey]]

      while (stack.length > 0) {
        const last = stack.pop();

        if (last.visited) {
          continue;
        }

        last.visited = true;
        result.push(last.val)

        if (last.child) {
          for (let nodeKey of last.child) {
            stack.push(data[nodeKey]);
          }
        }
      }
      console.log(result.length);
      console.log(result.sort().join(' '));
    }

  })
