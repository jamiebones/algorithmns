class MyArray {
  constructor() {
    this.length = 0;
    this.items = {};
  }

  push(item) {
    this.items[this.length] = item;
    this.length++;
  }

  pop() {
    if (this.length > 0) {
      delete this.items[this.length - 1];
      this.length--;
    }
  }

  delete(index) {
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.items[i] = this.items[i + 1];
    }
    delete this.items[this.length - 1];
    this.length--;
  }

  unshift(index, value) {
    this.length++;
    for (let i = this.length - 1; i > index; i--) {
      this.items[i] = this.items[i - 1];
    }

    this.items[index] = value;
  }
}

function mergeSort(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

function mergeSortArrayLocal(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  let i = 1;
  let j = 1;
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let mergedArray = [];

  while (!arr1 || arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}

const answer = mergeSortArrayLocal([1, 944], [1, 3, 22]);
console.log(answer);

// const a = new MyArray();
// a.push(1);
// a.push(2);
// a.push(3);
// a.push("heyyey")
// a.unshift(0, '0')
// console.log(a);
