function pipe(...fns) {
  return function(arg) {
    return fns.reduce((acc, f) => {
      return f(acc)
    }, arg)
  }
}

function test(text) {
  return text + 1;
}

let result = pipe(test,test,test)('a')

console.log(result)