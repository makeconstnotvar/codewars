function test(text) {
  let replacer = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return text.replace(/A|T|G|C/gi, matched => replacer[matched.toUpperCase()]);

}

let r = test('GTAT');
console.log(r)