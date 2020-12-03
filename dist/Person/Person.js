"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const Sex_1 = require("./Sex");
class Person {
    constructor() {
        this.name = "\"name no set!please set your name.\"";
    }
    hello() {
        return `Hello ${this.name}, welcome to world! your age is ${this.age}. your sex is ${Sex_1.Sex[this.sex]}.`;
    }
    setName(val) {
        this.name = val;
        return this;
    }
    setAge(val) {
        this.age = val;
        return this;
    }
    setSex(val) {
        this.sex = val;
        return this;
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map