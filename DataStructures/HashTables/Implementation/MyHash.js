//! ------------- My Implementation (blind) ------------------
//! Is not exaactly Andrei's but it was pretty similr so I didn't feel the need to add his
//? as you can see, with the hashtable, order is not guaranteed
//? Also collision problems may make you need to iterate thru the hash table making for a O(n)
//? Still, it's great for lookups if you got the key

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    if (key === "TEST") {return 23}
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash;
  }

  set = (key,value) => {
    
    let hashed = this._hash(key)
    if (!this.data[hashed]) {
      this.data[hashed] = [[key, value]] //? If no data @mem loc, add a new arr
    } else {
      this.data[hashed].push([key,value]) //? If data at @memloc, push new arr at 
    }
    
  }

  get = (key) => {

     let data = this.data[this._hash(key)] //? The data at memlock

     if (!data) {
      return undefined
     }

     // ! O(n) worst case
     else if (data.length > 1) { //! To avoid collisions, iterate thru memloc for value
       for (let i = 0; i < data.length; i++) { 
          if (data[i][0] === key) {
            return data[i][1] 
          }
       }
       //! O(1)
     } else {
        return data[0][1] //? Only 1 data @memloc, get array @index 0, and [1] which is value
     } 
  }

  //! O(n)
  keys() { 
    const keysArray = []
    for (let i = 0; i < this.data.length; i++) { 
      if(this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }
  
    return keysArray
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
// myHashTable.set('TEST', 15000)
myHashTable.set('dogs', 2322)
// console.log(myHashTable.get('grapes'))
// console.log(myHashTable.get('TEST'))
// console.log(myHashTable.get('dogs'))
// console.log(myHashTable.get('dog'))
console.log(myHashTable.keys())


