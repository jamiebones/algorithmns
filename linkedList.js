//create a class with a constructor

const util = require("util");

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  _addNode(value) {
    const node = {
      value: value,
      next: null,
    };
    return node;
  }

  append(value) {
    //get the head
    const newNode = this._addNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  prepend(value) {
    let newNode = this._addNode(value);
    let previousHead = this.head;
    this.head = newNode;
    newNode.next = previousHead;
    this.length += 1;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(index, value);
    }
    let newNode = this._addNode(value);
    let leaderNode = this._travesalIndex(index - 1);
    let holdingPointer = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  delete(index) {
    if (index >= this.length) {
      return;
    }
    if (index === 0) {
      const currentNode = this.head;
      const nextNode = currentNode.next;
      return (this.head = nextNode);
    }

    if (index === this.length - 1) {
      //we have a tail delete here
      let pointer = this._travesalIndex(index - 1);
      pointer.next = null;
      this.tail = pointer;
      return this.length--;
    }
    let pointer = this._travesalIndex(index - 1);
    let nodeTodelete = pointer.next;
    pointer.next = nodeTodelete.next;
    this.length--;
  }

  _travesalIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    //this.head.next = null;
    console.log('c', first)
    this.head = first;
  }
}

const mYLinkedList = new LinkedList(1);
mYLinkedList.append(2);
mYLinkedList.append(3);
mYLinkedList.append(4);
//mYLinkedList.prepend(666);
//mYLinkedList.delete(0);

//console.log(util.inspect(mYLinkedList, false, null, true /* enable colors */));
mYLinkedList.reverse();
console.log(util.inspect(mYLinkedList, false, null, true /* enable colors */));
