'use strict';
let data = new Map([['first_name', 'Super'], ['last_name', 'Man'], ['age', 'unknown'], ['username', 'o_O']]);
let config = new Map([['first_name', 'isNonEmpty'], ['age', 'isNumber'], ['username', 'isAlphaNum']]);

class Checker {
  constructor(check, instructions) {
    [this.check, this.instructions] = [check, instructions];
  }
}

class Validator {
  constructor(config) {
    [this.config, this.messages] = [config, []];
  }

  validate(data) {
    for (let [k, v] of data.entries()) {
      let type = this.config.get(k);
      let checker = Validator[type];
      if (!type) continue;
      if (!checker) throw new Error(`No handler to validate type ${type}`);
      let result = checker.check(v);
      if (!result) this.messages.push(checker.instructions + ` **${v}**`);
    }
  }

  hasError() {
    return this.messages.length !== 0;
  }
}

Validator.isNumber = new Checker((val) => !isNaN(val), 'the value can only be a valid number');
Validator.isNonEmpty = new Checker((val) => val !== "", 'the value can not be empty');
Validator.isAlphaNum = new Checker((val) => !/^a-z0-9/i.test(val), 'the value can not have special symbols');

let validator = new Validator(config);
validator.validate(data);
console.log(validator.messages.join('\n')); //the value can only be a valid number **unknown**