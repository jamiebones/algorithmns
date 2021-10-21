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

function minValueNode(root){
    const stack = [ root ];
    let minimum = Infinity;
    while( stack.length > 0 ){
        const current = stack.pop();
        if ( current.val && current.val < minimum ){
            minimum = current.val;
        }
        if ( current.left ){
            stack.push(current.left)
        }
        if ( current.right){
            stack.push(current.right)
        }
    }
    return minimum;
}

function recursiveMinNode(root){
  if ( root === null ) return Infinity;
  const leftMinimum  = recursiveMinNode(root.left);
  const rightMinimum = recursiveMinNode(root.right);
  console.log(leftMinimum, rightMinimum)
  return Math.min(root.val, leftMinimum, rightMinimum)
}


//const result = minValueNode(a);
const result = recursiveMinNode(a)
console.log(result);