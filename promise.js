let a2;

let promiseFunc = (res, rej) => {
  console.log('просто promise');
  res();
  console.log('after res просто promise');
  a2 = new Promise(promiseAsyncFunc2);
}

let promiseAsyncFunc = async = (res, rej) => {
  console.log('async promise');
  res();
}

let promiseAsyncFunc2 = async = (res, rej) => {
  console.log('async promise 2');
  res();
}

let p = new Promise(promiseFunc);
let a = new Promise(promiseAsyncFunc);

a2.then(()=>{
  console.log('async 2 then')
})

a.then(()=>{
  console.log('async then')
})

p.then(()=>{
  console.log('просто then')
})

console.log('main')