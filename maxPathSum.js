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



function maxPathSum(root){
    if ( root === null ) return -Infinity;
    if ( root.left === null && root.right === null ) return root.val;
    const leftPath = maxPathSum(root.left);
    const rightPath = maxPathSum(root.right);
    console.log(leftPath, rightPath)
    const maxPath = Math.max(leftPath, rightPath);
    return root.val + maxPath;
}



const result = maxPathSum(a);
console.log(result);