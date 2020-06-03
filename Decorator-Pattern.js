function Decorator(options) {
  if (!options) {
    options = {};
  }
  this.before = options.before;//||function(){return arguments};
  this.after = options.after;

}

Decorator.prototype.decorate = function decorate(fn) {
  let that = this, decArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    let args = that.before ? that.before.call(that, ...decArgs, ...arguments) : arguments;
    let result = fn.call(that, ...args)
    if (that.after)
      return that.after.call(that, ...decArgs, result);
    return result;
  }
};

function sum() {
  return Array.prototype.reduce.call(arguments, function (sum, value) {
    return sum + value;
  }, 0);
}

function filter(min, max) {
  return Array.prototype.slice.call(arguments, 2).filter(function (value) {
    return value >= min && value <= max;
  });
}

function filterNoNumbers() {
  return Array.prototype.filter.call(arguments, function (value) {
    return typeof value === 'number' && value === value && value !== Number.POSITIVE_INFINITY && value !== Number.NEGATIVE_INFINITY;
  });
}

function round(decimals) {
  if (arguments.length === 2) {
    return arguments[1].toFixed(decimals);
  } else {
    return Array.prototype.splice.call(arguments, 1).map(function (value) {
      return value.toFixed(decimals);
    });
  }
}

let filterDecorator = new Decorator({
  before: filter
});
let filterNoNumbersDecorator = new Decorator({
  before: filterNoNumbers
});
let roundDecorator = new Decorator({
  after: round
});

let decoratedSum = filterDecorator.decorate(sum, 1, 9);
decoratedSum = filterNoNumbersDecorator.decorate(decoratedSum);
decoratedSum = roundDecorator.decorate(decoratedSum, 2);

let result = decoratedSum(-3, 1.016, 0, 4, NaN, 8.041, '27', 9, 12); // "22.06"
console.log(result);
