function extend(...args) {
  return args.reduce((result, obj) => {
    if (isObject(obj))
      for (let prop in obj) {
        if (result[prop] === undefined)
          result[prop] = obj[prop]
      }
    return result;
  }, {})
}


//extend({a: 1, b: 2}, {c: 3})
//extend({a: 1, b: 2}, {c: 3}, {d: 4})
extend({a: 1, b: 2}, {a: 3, c: 3})
//extend({a: false, b: null}, {a: true, b: 2, c: 3})