const parser = require("@babel/parser");
const fs = require('fs');
const path = require('path');

const rootDir = 'E:/Samples/chess/src'
const startFile = 'index.tsx'
const fullPath = path.join(rootDir, startFile)
const code = fs.readFileSync(fullPath, 'utf8');
const meta = path.parse(fullPath);


let result = parser.parse(code, {
  sourceType: 'module',
  plugins: [
    'jsx',
    'typescript'
  ],
});
const nodes = result.program.body;
const imports = nodes.filter(x => x.type == 'ImportDeclaration')
const routes = imports.map(x => x.source.value)
routes.forEach(route => {
  const fullPath = path.join(rootDir, route) + '.tsx'
  const isRepoRoute = fs.existsSync(fullPath)
  if (isRepoRoute) {

    const code = fs.readFileSync(fullPath, 'utf8');
    const meta = path.parse(fullPath);
    let obj = {
      name: meta.base,
      childs: []
    };
    current.childs.push(obj)
    let result = parser.parse(code, {
      sourceType: 'module',
      plugins: [
        'jsx',
        'typescript'
      ],
    });
    const nodes = result.program.body;
    const imports = nodes.filter(x => x.type == 'ImportDeclaration')
    const routes = imports.map(x => x.source.value)
    console.log(1)

  }
})

const graph = [];
let current = graph;
function makeModel(name){



  current.childs.push(obj)
}

console.log(1)
class Graph {
  data;
  constructor() {
    this.data = []
  }
  add(name){
    let obj = {
      name,
      childs: []
    };
    this.current.childs.push(obj)
    
  }
  current;
}