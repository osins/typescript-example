import * as Person from "./src/person";

function greeter(val: Person.iface.IPerson): string {
    return val.hello();
}

const p: Person.cls.Person = new Person.cls.Person();

p.setName("richard").setAge(20).setSex(Person.cls.Sex.man);

console.log(greeter(p));