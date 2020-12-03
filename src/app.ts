import { Sex } from "./Person/Sex";
import { Person } from "./Person/Person";

namespace TeApi {
    export class base {
        version: string = "0.0.1"
        options: { [key: string]: any }

        showVersion(): void {
            console.log(`This is teApi, Version: ${this.version}`)
        }

        doSomething(): void {
            const p: Person = new Person();

            p.setName("richard").setAge(20).setSex(Sex.man);
            p.hello();

            console.log('global lib do something')
        }
    }
}

export let teBase: TeApi.base = new TeApi.base();
teBase.showVersion();