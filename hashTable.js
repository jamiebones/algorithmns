
class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i=0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value){
      const address = this._hash(key);
      if (!this.data[address]){
          this.data[address] = [];
      }
        this.data[address].push([key, value]);
  
      
    }

    get(key){
        const address = this._hash(key);
        const currentBucket = this.data[address];
   
        if ( currentBucket ){
            //loop through the array returned here
            for (let i=0; i <= currentBucket.length-1; i++){
                const currentBucketData = currentBucket[i];
                if ( currentBucketData[0] == key ){
                    return currentBucketData[1]
                }
            }
       
        }
        return undefined;
    }

    keys(){
        let keys = []
        for (let i=0; i < this.data.length; i++){
            const currentBucket = this.data[i];
            if ( currentBucket ){
                for (let j=0; j < currentBucket.length; j++){
                    const currentKey = currentBucket[j];
                    keys.push(currentKey[0]);
                }
            }
           
        }

        return keys;
    }


}


//find first occuring charcater in an array

function findFirstCharacter(arr){
    let obj = {}
    for( let i=0; i < arr.length; i++){
        if (obj[arr[i]] !== undefined ){
            return arr[i];
        }
        obj[arr[i].toString()] = arr[i];
    }
    return undefined;
}

const findValue = findFirstCharacter([0,1,72,0,4,56,2,560]);
console.log(findValue);


// const mHashTable = new HashTable(2);
// mHashTable.set("berries", 2000);
// mHashTable.set("mangoes", 2000);
// mHashTable.set("grapes", 2000);
// mHashTable.set("pine", 57)
// mHashTable.set("strawberries", 2000);
// const keys = mHashTable.keys()
// console.log(keys)
// console.log(mHashTable);