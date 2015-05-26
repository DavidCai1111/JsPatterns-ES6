'use strict';

class Universe {
  constructor() {
    if (Universe.instance) {
      return Universe.instance;
    }
    //按自己需求实例化
    this.foo = 'bar';
    Universe.instance = this;
  }
}

let u1 = new Universe();
let u2 = new Universe();

console.log(u1.foo);
console.log(u1 === u2);