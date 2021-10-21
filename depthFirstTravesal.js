class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

// function depthFirstTravesal(root){
//   if ( root === null ) return [];
//   const leftValues = depthFirstTravesal(root.left);
//   const rightValues = depthFirstTravesal(root.right);
//   if (root.val === target ){
//       return true
//   }
//   //return [root.val, ...leftValues, ...rightValues];
// }

function treeIncludes(root, target) {
  if (root === null) return false;
  if (root.val === target) return true;

  if (treeIncludes(root.left, target) === true) {
    return true;
  }

  if (treeIncludes(root.right, target) === true) {
    return true;
  }

  return false;
}

const result = treeIncludes(a, "b");
console.log(result);
