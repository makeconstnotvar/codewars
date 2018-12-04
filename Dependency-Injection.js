function DI(dependency) {
  this.dependency = dependency;
}


DI.prototype.inject = function (func) {

  let funcParseRegexp = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  let dependencyNames = func.toString().match(funcParseRegexp)[1].replace(/\s+/g, '').split(',');

  let funcArgs = dependencyNames.reduce((acc, depName) => {
    if (this.dependency[depName])
      acc.push(this.dependency[depName]);

    return acc;
  }, []);
  return func.bind(this, ...funcArgs);
};

let deps = {
  'dep1': function () {
    return 'this is dep1';
  },
  'dep2': function (num) {
    return `this is dep2 and num ${num}`;
  },
  'dep3': function () {
    return 'this is dep3';
  },
  'dep4': function () {
    return 'this is dep4';
  }
};

let di = new DI(deps);

let myFunc = di.inject(function (dep3, dep1, dep2) {
  return [dep1(), dep2(44), dep3()].join(' -> ');
});

let test = myFunc();
console.log(1);