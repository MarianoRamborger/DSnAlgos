//? MyArray, built on top of an object

class MyArray {
  constructor() {
    this.length = 0
    this.data = {};
  }

  get(index) { //Access method
    return this.data[index] ;
  }

  push(item) { //Push or insert
    //? Since it's an object, the key, in this case numerical, is populated with the new element
    //? Since length -1 = index, just use it like key and it would equal the (new) last index.
  
    this.data[this.length] = item
    this.length++ ;
    return this.length ;
  }

  pop() {
    if (this.length > 0) {
      const item = this.data[this.length -1]
      delete this.data[this.length -1]
      this.length-- 
      return item
    }
  }

  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
    return item
  }

  shiftItems(index) {
    for (let i = index; i < this.length -1; i++) {
  //? At the index of the item to be deleted, 
  //? make the value equal to that of the next index, shift it
      this.data[i] = this.data[i+1] //? So the i is deleted.

    }
    //? But since we shifted to the left, the last items still exists. Gotta remove it.
    //? [0,1,2,3] => [1,2,3,3] => [1,2,3]
    delete this.data[this.length -1] 
    this.length--
  }

}

const newArr = new MyArray(0,0)


newArr.push("first")
newArr.push("second")
newArr.push("third")
newArr.push("fourth")
newArr.push("five")
newArr.push("sixth")
newArr.push("seventh")
newArr.shiftItems(1)
console.log(newArr)
