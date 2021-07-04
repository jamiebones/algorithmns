class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    //find the index of the parent
    let index = this.values.length - 1;
    debugger
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      let child = this.values[index];
      if (child <= parent) break;
      //perform the swap here
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
    }

    return this.values;
  }
}

let maxBinaryheap = new MaxBinaryHeap();
maxBinaryheap.insert(99);
maxBinaryheap.insert(70);
maxBinaryheap.insert(45);
maxBinaryheap.insert(44);
maxBinaryheap.insert(65);
maxBinaryheap.insert(40);
maxBinaryheap.insert(53);

console.log(maxBinaryheap);
