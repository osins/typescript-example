import { IPerson } from "./IPerson";
import { Sex } from "./Sex";
export declare class Person implements IPerson {
    name: string;
    age: number;
    sex: Sex;
    constructor();
    hello(): string;
    setName(val: string): Person;
    setAge(val: number): Person;
    setSex(val: Sex): Person;
}
