class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.last;
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let nodeToRemove = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = nodeToRemove.next;
    }
    this.size--;
    return nodeToRemove.value;
  }
}

let que = new Queue();
que.enqueue("first in");
que.enqueue("second in");
que.enqueue("third time pastime");
const result = que.dequeue();
console.log(result);
