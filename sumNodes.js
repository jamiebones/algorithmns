class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(2);
const e = new Node(4);
const f = new Node(1);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

function sumNode(root) {
  if (root === null) return 0;

  return sumNode(root.left) + sumNode(root.right) + root.val;
}

const result = sumNode(a);
console.log(result);
