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
function cartesian(arrs) {
  return arrs.reduce((acc, arr) => {
    acc = multi(acc, arr);
    return acc;
  }, [[]]);
}

function multi(one, two) {
  const temp = one.map(o => {
    return two.map(t => {
      return o.concat(t);
    });
  });
  let result = temp.flat();
  return result;
}

//let result = cartesian([[1, 2], [3, 4], [5, 6]]);

//console.table(result);

//multi([[1, 2], [3, 4], [5, 6]])


function myFunc(arrs) {
  // две проверки для норм вывода при [] и [[1, 2]]
  if (!arrs.length) return []
  if (arrs.length === 1) return arrs[0]

  // вырезаем в result первый элемент,
  // делая из каждого эменнта отдельный массив [1, 2] -> [[1], [2]]
  let result = arrs.splice(0, 1)[0].map(item => [item]);

  for (let arr of arrs) {
    // проходимся по result и умножаем каждый элемент на следующий массив в arrs
    // при первой итерации, получается [1] * [3, 4] = [[1, 3], [1, 4]]
    // вставляем [1, 3], [1, 4] в result вместо [1]
    result = result.reduce((prevState, item) => {
      return prevState.concat(arr.map((curItem) => item.concat(curItem)));
    }, []);
  }

  return result;
}
console.table(myFunc([[1, 2], [3, 4], [5, 6]]))