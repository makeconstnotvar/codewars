const str = "bar.baz.foo:111222",
  obj = {
    bar: {
      baz: {
        foo: 333444,
        foo2: 674654
      }
    }
  };

function replaceInObj(obj, str) {
  let result = obj;
  let [fieldsStr, num] = str.split(':');
  let fields = fieldsStr.split('.');
  let last = fields.pop();
  for(let field of fields){
    obj=obj[field]
  }
  obj[last] = +num;
  return result;
}

console.log(replaceInObj(obj, str));