import { Sex } from "./Person/Sex";
import { Person } from "./Person/Person";

namespace globalLib {
    export class base {
        version: string
        options: { [key: string]: any }
        doSomething(): void {
            const p: Person = new Person();

            p.setName("richard").setAge(20).setSex(Sex.man);
            p.hello();

            console.log('global lib do something')
        }
    }
}

let base: globalLib.base = new globalLib.base;
base.doSomething();

function test() {
    console.log("this is a test.");
}

test();