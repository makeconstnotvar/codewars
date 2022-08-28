function filterArrayByArray(first, second) {
  let newArray = [];
  for (let k = 0; k < second.length; k++) {
    for (let i = 0; i < first.length; i++) {
      if (first[i].code === second[k]) {
        newArray.push(first[i]);
        break;
      }
    }
  }
  return newArray;
}

function filterArrayByArray1(first, second) {
  const filter = new Set(second);
  let res = first.filter(x => {
    if (filter.has(x.code)) {
      filter.delete(x.code)
      return true
    }
  }, [])
  return res;
}

function filterArrayByArray2(first, second) {
  return second.reduce((acc,s) => {
    if()
    return acc;
  },[])
}

function filterArrayByArray3(first, second) {
  let newArray = [];
  let firstObj = first.reduce((acc, x) => {
    if (!acc[x.code]) {
      acc[x.code] = x;
    }
    return acc;
  }, {})
  for (let k = 0; k < second.length; k++) {
    const val = second[k];
    if (firstObj[val]) {
      newArray.push(firstObj[val]);
    }
  }
  return newArray;
}

const first = [
  {code: 4},
  {code: 0},
  {code: 1},
  {code: 2},
  {code: 3},
  {code: 4}
];

const second = [0, 1, 4]

console.log(filterArrayByArray3(first, second))