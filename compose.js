function compose(...fns) {
  return function (x) {
    return fns.reverse().reduce((x, fun) => fun(x), x)
  }
}

const compose2 = (...fns) => x => fns.reverse().reduce((x, f) => f(x), x);

function pipe(...fns) {
  return function (x) {
    return fns.reduce((x, fun) => fun(x), x);
  }
}

const pipe2 = (...fns) => x => fns.reduce((x, f) => f(x), x);

let res1 = compose2(fun1, fun2, fun3)(10);
console.log(res1);

let res2 = pipe2(fun1, fun2, fun3)(10);
console.log(res2);

function fun1(x) {
  return x * 2
}

function fun2(x) {
  return x + 1
}

function fun3(x) {
  return x + 5
}



