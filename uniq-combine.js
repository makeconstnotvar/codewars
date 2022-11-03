/*
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

let result = new Set();

letters.forEach(a => {
  result.add([a].sort().join(''));

  let minusA = letters.filter(x => x != a);
  minusA.forEach(b => {
    result.add([a, b].sort().join(''))

    let minusB = minusA.filter(x => x != b);
    minusB.forEach(c => {
      result.add([a, b, c].sort().join(''))

      let minusC = minusB.filter(x => x != c);
      minusC.forEach(d => {
        result.add([a, b, c, d].sort().join(''))

        let minusD = minusC.filter(x => x != d);
        minusD.forEach(e => {
          result.add([a, b, c, d, e].sort().join(''))

          let minusE = minusD.filter(x => x != e);
          minusE.forEach(f => {
            result.add([a, b, c, d, e, f].sort().join(''))

            let minusF = minusE.filter(x => x != f);
            minusF.forEach(g => {
              result.add([a, b, c, d, e, f, g].sort().join(''))

              let minusG = minusF.filter(x => x != g);
              minusG.forEach(h => {
                result.add([a, b, c, d, e, f, g, h].sort().join(''))

                let minusH = minusG.filter(x => x != h);
                minusH.forEach(i => {
                  result.add([a, b, c, d, e, f, g, h, i].sort().join(''))

                  let minusI = minusH.filter(x => x != i);
                  minusI.forEach(j => {
                    result.add([a, b, c, d, e, f, g, h, i, j].sort().join(''))


                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
*/

/*
let letters = ['a', 'b', 'c', 'd'];
let results = [];
while (letters.length > 0) {
  let [letter] = letters.splice(0, 1);
  results.push(letter);
  let pairs = results.reduce((acc, str) => {
    acc = acc.concat(letters.map(x => str + x));
    return acc;
  }, [])
  results = results.concat(pairs);
}*/

let results = [];

function permute(arr) {
  if (arr.length == 0)
    return;

  let letter = arr.splice(0, 1);
  console.log(letter, arr.join())
  let c = [...arr]
  c.forEach(_=>permute(c))


}


//permute(['a', 'b', 'c', 'd'])
//let test = Array.from(result);



const tableString = Array.from(
  {length:8},
  () => Array.from(
    {length: 8},
    (_, i) => ({clicked: false, color: i & 1 ? 'black': 'white'})
  )
);
let arr = Array.from({length:8})
console.log(1);