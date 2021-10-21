class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null
    }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;



function breadthFirstTravesal(root ){
    let queue = [ root ];
    let values = [];
    while ( queue.length ){
        const current = queue.shift();
        values.push(current.val);
        if ( current.left){
            queue.push(current.left)
        }
        if ( current.right ){
            queue.push(current.right);
        }
    }


    return values;
}


const result = breadthFirstTravesal(a)
console.log(result);