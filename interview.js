let total = 0;
function numberOfItems(arr, item) {
  //Write the code that goes here

  //Write the code that goes here
  for (let arrItem of arr) {
    if (Array.isArray(arrItem)) {
      return numberOfItems(arrItem, item);
    } else {
      if (item == arrItem) {
        total += 1;
      }
    }
  }

  let sum = total;
  total = 0;
  return sum;
}

var arr = [25, "apple", ["banana", "strawberry", "apple", 25]];
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));

// function johnMary(str) {
//     debugger
//     let maryCheck = /(mary)+/gi
//     let johnCheck = /(john)+/gi
//     let c1 = str.match(maryCheck);
//     let c2 = str.match(johnCheck);
//     if (c1 === null || c2 === null ) return false

//     if ( c1.length === c2.length){
//       return true
//     }
//     return false
//   }

//   console.log(johnMary("John&MaryJohnMarym"));
