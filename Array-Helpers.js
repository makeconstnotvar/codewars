let extender = {
  square() {
    return this.map(n => n * n);
  },
  cube() {
    return this.map(n => Math.pow(n, 3));
  },
  sum() {
    return this.reduce((p, n) => p + n, 0);
  },
  average() {
    return this.reduce((p, n) => p + n, 0) / this.length;
  },
  even() {
    return this.filter(n => !(n % 2));
  },
  odd() {
    return this.filter(n => n % 2);
  }
};

Object.assign(Array.prototype, extender);

console.log([1, 2, 3, 4, 5].odd());
/*
Array.prototype.square = function () {
  return this.map(i => Math.pow(i, 2));
};
Array.prototype.cube = function () {
  return this.map(i => Math.pow(i, 3));
};
Array.prototype.average = function () {
  if(!this.length) return Number.isNaN;
  return this.reduce((a,b)=> a+b)/this.length;
};
Array.prototype.sum = function () {
  return this.reduce((a,b)=> a+b)
};
Array.prototype.even = function () {
  return this.filter(item => item%2===0)
};
Array.prototype.odd = function () {
  return this.filter(item => item%2!==0)
};
*/