const sum4 = (a, b, c, d) => (a + b + c + d);

let res1 = sum4(1, 2, 3, 4)

function curry1(fn) {
  return function (...args) {
    if (fn.length > args.length) {
      let fun = fn.bind(null, ...args);
      return curry1(fun);
    } else
      return fn(...args)
  }
}

const curry2 = (fn, ...fnArgs) => {
  const curried = (...curArgs) => (
    fn.length > curArgs.length
      ? curry2(fn.bind(null, ...curArgs))
      : fn(...curArgs)
  );
  return fnArgs.length ? curried(...fnArgs) : curried;
};

const csum = curry2(sum4);
const res2 = csum(1, 2, 3, 4)
const res3 = csum(1, 2)(3, 4)
const res4 = csum(1, 2, 3)(4)
const res5 = csum(1)(2, 3, 4)
const res6 = csum(1)(2)(3)(4)

console.log({res1, res2, res3, res4, res5, res6})
console.log('end')
