import * as Tsl from "./src";

function greeter(val: Tsl.IPerson): string {
    return val.hello();
}

const p: Tsl.Person = new Tsl.Person();

p.setName("richard").setAge(20).setSex(Tsl.Sex.man);

console.log(greeter(p));