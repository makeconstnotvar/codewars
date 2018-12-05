Function.prototype.bind = function (ctx) {
  let needToBind = this;
  if (needToBind.__isClone) {
    needToBind = needToBind.__original;
  }

  let bindedCopy = function () {
    return needToBind.apply(ctx, arguments);
  };

  bindedCopy.__isClone = true;
  bindedCopy.__original = needToBind;

  return bindedCopy;
};

let func = function () {
  return this.prop;
};
let obj1 = {prop: 1},
  obj2 = {prop: 2};

func = func.bind(obj1);
let a = func();

func = func.bind(obj2);
let b = func();
console.log(1)