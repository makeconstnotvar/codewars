Array.prototype.sameStructureAs1 = function (other) {
  function replacer(key, val) {
    if (typeof val == 'number') return 'x';
    if (typeof val == 'string') return 'x';
    return val;
  }

  let one = JSON.stringify(this, replacer)
  let two = JSON.stringify(other, replacer)
  return one == two;
};


Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other) || this.length != other.length)
    return false;

  return this.every((that, i) => {
    if (Array.isArray(that)) {
      return that.sameStructureAs(other[i])
    } else {
      return true;
    }
  })
};

let result = [1, [1,1]].sameStructureAs([1,[1,1]]);


console.log(2)

