class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      //the root is not null we have to find where to place the item
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            return (node.left = new Node(data));
          } else {
            //the left node is not null here
            //we need to traverse until we hit the null part
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            return (node.right = new Node(data));
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        //no children node
        if (node.left === null && node.right === null) {
          return null;
        }
        //node has no left child
        if (node.left === null) {
          return node.right;
        }
        //node has no right child
        if (node.right === null) {
          return node.left;
        }
        //node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  preOrderTravesal() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function tranversePreOrder(node) {
        result.push(node.data);
        node.left && tranversePreOrder(node.left);
        node.right && tranversePreOrder(node.right);
      }
      tranversePreOrder(this.root);
      return result;
    }
  }

  inOrderTravesal() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function tranverseInOrder(node) {
        node.left && tranverseInOrder(node.left);
        result.push(node.data);
        node.right && tranverseInOrder(node.right);
      }
      tranverseInOrder(this.root);
      return result;
    }
  }

  postOrderTravesal() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function tranversePostOrder(node) {
        node.left && tranversePostOrder(node.left);
        node.right && tranversePostOrder(node.right);
        result.push(node.data);
      }
      tranversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }

}

const newBST = new BST();
newBST.add(5);
newBST.add(3);
newBST.add(6);
newBST.add(2);
newBST.add(4);
newBST.add(1);

//console.log(newBST)
console.log("max height is ", newBST.findMaxHeight());
console.log("min height is ", newBST.findMinHeight());

console.log("level order ", newBST.levelOrder());
console.log("post order is ", newBST.postOrderTravesal());
console.log("pre order travesal ", newBST.preOrderTravesal());
console.log("in order travesal ", newBST.inOrderTravesal());
