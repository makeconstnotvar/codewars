function findProduct1(arr) {
  let totalProduct = arr.reduce((acc, x) => (acc *= x), 1);
  return arr.map(x => totalProduct / x);
}

console.log(findProduct2([2, 3, 4, 5]));

function findProduct2(arr) {
  var left = 1,
    product = [];
  for (let ele of arr) {
    product.push(left);
    left = left * ele;
  }

  var right = 1;
  for (var i = arr.length - 1; i > -1; i--) {
    product[i] *= right;
    right *= arr[i];
  }

  return product
}