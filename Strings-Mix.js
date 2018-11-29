function mix(s1, s2) {
  let obj1 = makeComparableObj(s1);
  let obj2 = makeComparableObj(s2);
  let result = [];
  
  function makeComparableObj(s) {
    let obj = s.trim().split('')
      .filter(s => s.match(/[a-z]+/))
      .reduce((acc, letter) => {
        if (acc[letter])
          acc[letter]++;
        else
          acc[letter] = 1;
        return acc;
      }, {});
    
    
    return Object.keys(obj).filter(key => obj[key] > 1);
    
    
  }
  
  Object.keys(obj2).forEach(letter => {
    if (obj1[letter]) {
      let count1 = obj1[letter];
      let count2 = obj2[letter];
      if (count1 > count2 && count1 > 1) {
        result.push(`1:${letter.repeat(count1)}`);
      }
      if (count2 > count1 && count2 > 1) {
        result.push(`2:${letter.repeat(count2)}`);
      }
      if (count1 === count2 && count1 > 1) {
        result.push(`=:${letter.repeat(count1)}`);
      }
    }
  });
  return result.sort((a, b) => {
    let al = a.length;
    let bl = b.length;
    if (al < bl) return 1;
    if (al > bl) return -1;
    if (a > b) return 1;
    if (a < b) return -1
  }).join('/');
}


let result = mix(" In many languages", " there's a pair of functions");
console.log(result);