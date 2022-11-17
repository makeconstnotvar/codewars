const parser = require("@babel/parser");
const fs = require('fs');
const path = require('path');
const graph = [];
const rootDir = 'E:/Samples/chess/src'
const startFile = 'index.tsx'
const fullPath = path.join(rootDir, startFile)
const code = fs.readFileSync(fullPath, 'utf8');
const meta = path.parse(fullPath);
let current = {
  name: meta.base,
  childs: []
};
graph.push(current)
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


console.log(1)
