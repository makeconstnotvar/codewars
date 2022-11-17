const min = 1000000;
const max = 10000000;
const len = 10000;

function make(max, min, len) {
  let list = new Array(len);
  for (let i = 0; i < len; i++) {
    list[i] = rnd(min, max)
  }
  return list;
}

function rnd(min, max) {
  return Math.trunc(Math.random() * (max - min) + min + 1);
}

let list = make(min, max, len);

let counter = 30000;
let x = []
while (counter > 0) {
  x.push(list);
  counter--;
}
console.log(x.length);

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);