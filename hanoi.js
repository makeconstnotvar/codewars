/*
Hanoi(n, src, dst, tmp):
  if n > 0
    Hanoi(n – 1, src, tmp, dst) 〈〈Рекурсия!〉〉
    move disk n from src to dst
    Hanoi(n – 1, tmp, dst, src)

 */
let data = {
  a:[4,3,2,1],
  b:[],
  c:[]
}
let count = 1;
function hanoi (data){
  let n = data.a.length;
  let src = data.a;
  let tmp = data.b;
  let dst = data.c;

  function run(n, src, dst, tmp){
    if(n>0){
      count++
      run(n-1, src, tmp, dst);
      //переносим из src в dst
      let x = src.pop()
      dst.push(x)
      run(n-1, tmp, dst, src);
    }

  }
  run(n,src,dst,tmp)
  return data;
}
let result = hanoi(data)
console.log(count);