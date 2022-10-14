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
//[1,2][3,4]
//[1][2]
//[1,3][1,4][2,3][2,4]
function multi(arrs) {
  arrs.reduce((acc, arr) => {
    let test = arr.map(x => {
      acc.forEach(item => {
        item.push(x)
      })
      return acc
    })
    console.log(test)
  }, [[]])
}

function multi1(list1, list2) {
  let result = list1.map(l1 => {
    return list2.map(l2 => {
      return [l1].concat(l2);
    })
  }).flat()
  return result;
}

multi1([1, 2], [3, 4])

//multi([[1, 2], [3, 4], [5, 6]])