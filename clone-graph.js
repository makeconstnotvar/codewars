


function cloneGraph(node) {
  if (!node) return null;
  const visited = {};

  function dfs(node) {
    if (visited[node.val]) {
      return visited[node.val];
    }

    const newNode = new Node(node.val);
    visited[node.val] = newNode;
    newNode.neighbors = node.neighbors.map(x => dfs(x))

    return newNode;
  }

  const newNode = dfs(node)
  return newNode;
}

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4, node5);
node4.neighbors.push(node1, node3);
node5.neighbors.push(node3);

let result = cloneGraph(node1);
console.log(0)