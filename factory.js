'use strict';
class CarMaker {
  constructor() {
    this.doors = 0;
  }

  drive() {
    console.log(`jaja, i have ${this.doors} doors`);
  }

  static factory(type) {
    return new CarMaker[type]();
  }
}

CarMaker.Compact = class Compact extends CarMaker {
  constructor() {
    super();
    this.doors = 4;
  }
};

CarMaker.factory('Compact').drive(); // 'jaja, i have 4 doors'