class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      //head is equal the tail here
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    let oldTail = this.tail;
    oldTail.next = node;
    node.prev = oldTail;
    this.tail = node;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      oldTail.prev = null;
      return oldTail;
    }
    let prevNode = this.tail.prev;
    prevNode.next = null;
    this.tail = prevNode;
    this.length--;
    oldTail.prev = null;
    return oldTail;
    //
  }
  shift() {
    //remove the first element of the head
    let oldHead = this.head;
    console.log("old head : ", oldHead);
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      oldHead.next = null;
      this.length--;
      return oldHead;
    }

    this.head = oldHead.next;
    this.head.prev = null;
    this.length--;
    oldHead.next = null;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      oldHead.prev = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let midPoint = Math.floor(this.length / 2);
    if (index <= midPoint) {
      //we loop from the from here
      let current = this.head;
      let counter = 0;
      while (current && counter < index) {
        counter++;
        current = current.next;
      }
      return current;
    } else {
      let current = this.tail;
      let counter = this.length;
      while (current && counter < index) {
        counter--;
        current = current.prev;
      }
      return current;
    }
  }
  set(index, val) {
    //get the element in the index
    let node = this.get(index);
    if (!node) {
      return false;
    }
    node.val = val;
    return true;
  }
  insert(index, val) {
    if (index === 0) {
      //insert at the head
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    //place it at that index
    let nodeToInsert = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = nodeToInsert;
    nodeToInsert.prev = beforeNode;
    nodeToInsert.next = afterNode;
    afterNode.prev = nodeToInsert;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    //use get and get the index we want to remove

    let node = this.get(index);
    let nodeBefore = node.prev;
    let nodeAfter = node.next;
    nodeBefore.next = nodeAfter;
    nodeAfter.prev = nodeBefore;
    node.next = null;
    node.prev = null;
    this.length--;
    return node;
  }
}

let dList = new DoublyLinkedList();
dList.push("harry");
dList.push("potter");
dList.push("the game");
dList.push("Menasah pokemon");
dList.remove(2);
console.log(dList);
