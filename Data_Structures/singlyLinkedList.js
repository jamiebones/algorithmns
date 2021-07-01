class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      //we have no head variable so this becomes
      //the head
      this.head = newNode;
      this.tail = newNode;
    } else {
      //append the value to the end of the list here
      //update the tail.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    //remove the pointer to the tail
    if (this.length === 0) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let headToRemove = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return headToRemove;
  }

  unshift(val) {
    const nodeToAdd = new Node(val);
    if (!this.head) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
    } else {
      nodeToAdd.next = this.head;
      this.head = nodeToAdd;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index > this.length) return undefined;
	let nodeToInsert = new Node(value);
    if (index === 0) {
      return !!this.unshift(nodeToInsert);
    }
    if (index === this.length) {
      return !!this.push(nodeToInsert);
    }
    //get the node here
    
    let prevNode = this.get(index - 1);
    if (!prevNode) return;
    let prevNextNode = prevNode.next;
    prevNode.next = nodeToInsert;
    nodeToInsert.next = prevNextNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.pop();
    }
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse(){
	  let current = this.head;
	  this.head = this.tail
  }
  print(){
	  var arr = [];
	  var current = this.head;
	  while ( current ){
		  arr.push(current.val);
		  current = current.next;
	  }
  }
}

let list = new SinglyLinkedList();
list.push("good bye");
list.push("how are you");
list.push(200);
list.insert(3, "600 west wing");
let l = list.remove(3);
console.log(l);
