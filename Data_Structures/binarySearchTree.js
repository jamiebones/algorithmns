class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        //we are targeting the left part of the node
        if (current.left === null) {
          //we don't have anything on the left
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }
  search(value) {
    if (!this.root) {
      return false;
    }
    if (this.root.value === value) return true;
    let current = this.root;
    while (true) {
      if (value < current.value) {
        //left things
        if (current.left === null) return false;
        else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) return false;
        else {
          current = current.right;
        }
      } else {
        return true;
      }
    }
  }
  BFS() {
    let queue = [this.root];
    let visited = [];
    let dequeueItem;
    while (queue.length) {
      dequeueItem = queue.shift();
      visited.push(dequeueItem.value);
      if (dequeueItem.left !== null) {
        //we have a left
        queue.push(dequeueItem.left);
      }
      if (dequeueItem.right !== null) {
        queue.push(dequeueItem.right);
      }
    }
    return visited;
  }
  preOrderDFS() {
    let visited = [];
    let current = this.root;
    function travesal(node) {
        visited.push(node.value);
      
      if (node.left) {
        travesal(node.left);
      }
      if (node.right) {
        travesal(node.right);
      }
    }
    travesal(current);
    return visited;
  }
  DFSPostOrder(){
     let current = this.root;
     let visited = [];
     function travesal(node){
      
       if ( node.left ){
         travesal(node.left)
       }
       if ( node.right ) {
        travesal(node.right)
       }
       visited.push(node.value)
       
     }
     travesal(current)
     return visited;
  }
  DFSInOrder(){
    let visited = [];
    function travesal(node){
      if ( node.left ){
        travesal(node.left)
      }
      visited.push(node.value);
      if (node.right ){
        travesal(node.right)
      }
    }
    travesal(this.root)
    return visited;
    
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(4);
bst.insert(3);
bst.insert(7);
bst.insert(20);
bst.insert(14);
bst.insert(22)
const inorder = bst.DFSInOrder();
const preorder = bst.preOrderDFS();
const postorder = bst.DFSPostOrder()
const bfs = bst.BFS()
console.log("inorder: ", inorder);
console.log("preorder: ", preorder);
console.log("postorder: ", postorder);
console.log("bfs: ", bfs);
