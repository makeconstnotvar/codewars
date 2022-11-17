const parser = require("@babel/parser");

const code = `
import {test} from './bind'
const Component1 = props => <div>{test.name}</div>;
export { Component1 }
`

let result = parser.parse(code, {
  // parse in strict mode and allow module declarations
  sourceType: "module",

  plugins: [
    "jsx",
  ],
});
console.log(1)