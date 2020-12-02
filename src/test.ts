/// <reference path="Person.ts" />

namespace TSO {
    export function test(): void {
        const p: Person = new Person;

        p.setName("richard").setAge(20).setSex(Sex.man);

        console.log(p.hello());
    }
}

TSO.test();
