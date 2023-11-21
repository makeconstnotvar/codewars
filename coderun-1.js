//let data = [3, 13, 12, 4, 14, 6]
let data =  [1, 2, 4, 5, 8, 9]
/*
  [1, 2, 4, 5, 8, 9]
   1- 2--4- 5---8-9
i=1 -                 dist [1]
i=2 -  --             dist [1,3]
i=3 -     -           dist [1,3,2]
i=4 -     -  ---      dist [1,3,2,5]
i=5 -     -      -    dist [1,3,2,5,3]
ответ = текущая верека + самая короткая из 2-х ранее посчитанных
*/


data.sort((a, b) => a - b);

let dist = [];
dist[0] = data[1] - data[0];
if (data.length > 2)
  dist[1] = data[2] - data[0];

for (let i = 3; i < data.length; i++) {
  let delta = data[i] - data[i - 1];
  dist[i - 1] = Math.min(dist.at(-1) + delta, dist.at(-2) + delta);
}

console.log(dist.at(-1))
