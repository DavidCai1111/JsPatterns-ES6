'use strict';
class Real {
  doSomething() {
    console.log('do something...');
  }
}

class Proxy extends Real {
  constructor() {
    super();
  }

  doSomething() {
    setTimeout(super.doSomething, 1000 * 3);
  }
}

new Proxy().doSomething(); //after 3s ,do something...