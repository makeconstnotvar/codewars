function lowestCommonAncestor(root, p, q) {
  if (p.val < root.val && q.val > root.val || root == p || root == q) {
    return root
  } else if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q)
  else
    return lowestCommonAncestor(root.left, p, q)
}

class Node {
  constructor(value, left = null, right = null) {
    this.val = value;
    this.left = left;
    this.right = right;
  }
}
/*
const bst1 = new Node(6,
  new Node(2,
    new Node(0),
    new Node(4,
      new Node(3),
      new Node(5)
    )
  ),
  new Node(8,
    new Node(7),
    new Node(9)
  )
);
let n1 = new Node(1)
let n2 = new Node(2);

n2.left = n1;

const node3 = new Node(3);
const node5 = new Node(5);
const node0 = new Node(0);
const node7 = new Node(7);
const node9 = new Node(9);

const node4 = new Node(4, node3, node5);
const node2 = new Node(2, node0, node4);
const node8 = new Node(8, node7, node9);

const root = new Node(6, node2, node8);

// Проверка
console.log(root);*/
const node1 = new Node(1);
const node3 = new Node(3);
const root = new Node(2, node1, node3);
lowestCommonAncestor(root, node3, node1)