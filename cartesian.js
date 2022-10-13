function cartesianProduct(arr) {
  let result = arr.reduce((acc, list) => {
    let _m = acc.map(accItem => {
      let _b = list.map(listItem => {
        let concated = accItem.concat(listItem);
        return concated;
      })
      return _b;
    })
    acc = _m.flat();
    return acc;
  }, [[]]);
  return result;
}

//27
//let result = cartesianProduct([[1,2,3],[4,5,6],[7,8,9]])

function sum(arr) {
  const merge = (a, b) => {
    let aSet = new Set(a);
    b.forEach(x => {
      if (!aSet.has(x))
        aSet.add(x);
    });
    return Array.from(aSet);
  }

  let result = arr.reduce((acc, list) => {
    acc = merge(acc, list);
    return acc;
  }, []);

  return result;
}

//console.log(sum([[1, 2, 3], [3, 4, 5], [5, 6, 7]]))

//console.log('done')

function multi(arrs){
  if(arrs.length == 0)
    return [[]];
  arrs.forEach(arr=>{
    arr.forEach(x=>{

    })
  })
}
multi([[1,2],[3,4]])