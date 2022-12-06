
const LinkedList = require('./linkedlist');
const Node = require('./node');
const Queue = require('./queue');
const Graph = require('./graph');

//Create Queue => let queue = new Queue(5), where 5 is size of queue
//Functions of Queue => queue.enqueue(int), queue.dequeue(), queue.isEmpty()
//Breadth First Traversal of Graph g from source vertex
function bfsTraversal(g) {
  let result = "";
  let num_of_vertices = g.vertices;
  let queue = new Queue(num_of_vertices);
g.list.forEach(x=>{
  console.log(x)
})
  return result;
}

let g1 = JSON.parse('{"vertices":4,"list":[{"head":{"data":2,"nextElement":{"data":1,"nextElement":null}}},{"head":{"data":3,"nextElement":null}},{"head":{"data":3,"nextElement":null}},{"head":null}]}')
let g2 = JSON.parse('{"vertices":5,"list":[{"head":null},{"head":{"data":2,"nextElement":{"data":0,"nextElement":null}}},{"head":null},{"head":null},{"head":{"data":3,"nextElement":null}}]}')


let res = bfsTraversal(g1)
console.log(0)

