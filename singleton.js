'use strict';
let __instance = (function () {
  let instance;
  return (newInstance) => {
    if (newInstance) instance = newInstance;
    return instance;
  }
}());

class Universe {
  constructor() {
    if (__instance()) return __instance();
    this.foo = 'bar';
    __instance(this);
  }
}

let u1 = new Universe();
let u2 = new Universe();

console.log(u1.foo); //'bar'
console.log(u1 === u2); //true
