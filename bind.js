let log = console.log.bind(null, "test")
log(2)

function test(a, b, c) {
  console.log({a, b, c})
}

let test1 = test.bind(null, "300")
let test2 = test1.bind(null, 200)

test2(1, 2, 3)
console.log('end')