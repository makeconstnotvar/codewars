'use strict';

function nouveau(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);
  return result === Object(result) ? result : instance;
}

function Nil() {
  return Object.create(null);
}

function MyObj(test) {
  this.test = test;
  this.name = 'Test1';

}

MyObj.prototype.log = function (a = 'my') {
  console.log(`${a} ${this.name} ${this.test}`)
};

let my = new MyObj('Вася');

my.log('Твой');

//let my1 = nouveau(MyObj, 'Петя', 1, 2, 3);


//my1.log('Ваш');

let my2 = nouveau(Nil, 'Петя', 1, 2, 3);
console.log(1);