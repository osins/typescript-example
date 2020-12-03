"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sex_1 = require("/Person/Sex");
const Person_1 = require("/Person/Person");
var globalLib;
(function (globalLib) {
    class base {
        doSomething() {
            const p = new Person_1.Person();
            p.setName("richard").setAge(20).setSex(Sex_1.Sex.man);
            p.hello();
            console.log('global lib do something');
        }
    }
    globalLib.base = base;
})(globalLib || (globalLib = {}));
let base = new globalLib.base;
base.doSomething();
function test() {
    console.log("this is a test.");
}
test();
//# sourceMappingURL=app.js.map