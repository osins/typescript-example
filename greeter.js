"use strict";
exports.__esModule = true;
var Tsl = require("./src");
function greeter(val) {
    return val.hello();
}
var p = new Tsl.Person();
p.setName("richard").setAge(20).setSex(Tsl.Sex.man);
console.log(tso.greeter());
