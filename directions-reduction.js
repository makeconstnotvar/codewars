function dirReduc(arr) {
  return arr.reduce((acc, x) => {
    if (isOpposite(x, acc[acc.length - 1])) {
      acc.pop();
    } else {
      acc.push(x);
    }
    return acc;
  }, [])
}

function isOpposite(a, b) {
  const oppositeMap = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST",
  }
  return oppositeMap[b] == a;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))