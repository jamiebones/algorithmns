const util = require("util");

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  _addNode(value) {
    return {
      value,
      next: null,
      prev: null,
    };
  }

  _travesalNode(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  append(value) {
    let newNode = this._addNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) return;
    let newNode = this._addNode(value);
    let pointer = this._travesalNode(index - 1);
    let pointerNext = pointer.next;
    pointer.next = newNode;
    newNode.prev = pointer;
    newNode.next = pointerNext;
  }
}

let myDoubleList = new DoubleLinkedList(2);
myDoubleList.append(3);
myDoubleList.append(200);
myDoubleList.insert(1, 7687);
//console.log(myDoubleList);

console.log(util.inspect(myDoubleList, false, null, true /* enable colors */));
