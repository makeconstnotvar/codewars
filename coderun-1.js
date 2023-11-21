//let data = [3, 13, 12, 4, 14, 6]
let data = [0, 2, 10,20,22]

data.sort((a, b) => a - b);

let sum = 0;
let dist = [data[1]-data[0]];
if(data.length>3) {

    for (let i = 1; i < data.length; i++) {
        //dist.push(data[i] - data[i - 1]);
        dist[i] = Math.min(dist[i - 1], dist[i - 2]) + data[i] - data[i - 1];
    }
    for (let i = 1; i < dist.length; i++) {
        sum += Math.min(dist[i], dist[i - 1]);
    }
}
else{
    sum = data[data.length-1]- data[0]
}
console.log(sum)