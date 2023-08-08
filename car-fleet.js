function carFleet(target, position, speed) {
  let result = [];
  let data = position.map((p, i) =>
    ({
      f: (target - p) / speed[i],
      p,
      s: speed[i]
    })
  ).sort((a, b) => b.p - a.p);
  data.forEach(d => {
    if (!result.length || d.f > result[result.length - 1]) {
      result.push(d.f)
    }
  })
  return result.length;
}

function carFleet2(target, position, speed) {
  const pair = position.map((pos, idx) => [pos, speed[idx]]);
  const stack = [];
  pair.sort((posA, posB) => posA[0] - posB[0]);
  for (let i = pair.length - 1; i >= 0; i--) {
    const [pos, speed] = pair[i];
    stack.push((target - pos) / speed)
    if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
      stack.pop()
    }
  }
  return stack.length;
}

carFleet(10, [8, 3, 7, 4, 6, 5], [4, 4, 4, 4, 4, 4]);


/*
 let stack = [];
  let data = position.map((p, i) => ({p, s: speed[i]}));
  data.sort((a, b) => b.p - a.p);

  for (let i = 0; i < data.length; i++) {
    let last = stack[stack.length - 1];
    let newPos;
    if (i == 0) {
      newPos = data[i].p + data[i].s;
    } else {
      let possible = data[i].p + data[i].s;
      newPos = possible < data[i - 1].p ? possible : data[i - 1].p;
    }
    if (newPos >= target) {
stack.push([])
    } else {

    }
    if (newPos >= last.p) {
      stack.push({feet: last.p, count: 1})
    } else {
      stack.push({feet: d.p, count: 1})
    }
    d.p = ? last.p : newPos
  }
*/
