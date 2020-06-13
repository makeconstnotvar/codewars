function Sum1(x) {
  function fun(y) {
    x = x + y;
    return fun;
  }

  fun.get = () => x
  return fun;
}

const Sum2 = x => y => {
  const z = x + y;
  Sum2.__proto__ = Object.assign(Sum2.__proto__, {get: () => z});
  return Sum2(z)
}


console.log(Sum1(1)(1)(1)(1)(2).get())

let s1 = Sum2(1)
let s2 = s1(1)
let s3 = s2(1)
let s4 = s3(1)
console.log(s4.get())