'use strict';
let agg = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator](){
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) return {value: this.data[index++], done: false};
        return {value: undefined, done: true};
      },
      hasNext: () => index < this.data.length,
      rewind: () => index = 0,
      current: () => {
        index -= 1;
        if (index < this.data.length) return {value: this.data[index++], done: false};
        return {value: undefined, done: true};
      }
    }
  }
};

let iter = agg[Symbol.iterator]();
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.current());// { value: 2, done: false }
console.log(iter.hasNext());// true
console.log(iter.rewind()); // rewind!
console.log(iter.next()); // { value: 1, done: false }

// for...of
for (let ele of agg) {
  console.log(ele);
}