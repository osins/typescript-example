/// <reference path="IPerson.ts" />

namespace TSO {
    export class Person implements IPerson {
        public name: string;
        public age: number;
        public sex: Sex;

        constructor() {
            this.name = "\"name no set!please set your name.\"";
        }

        public hello(): string {
            return `Hello ${this.name}, welcome to world! your age is ${this.age}. your sex is ${Sex[this.sex]}.`;
        }

        public setName(val: string): Person {
            this.name = val;

            return this;
        }

        public setAge(val: number): Person {
            this.age = val;

            return this;
        }

        public setSex(val: Sex): Person {
            this.sex = val;

            return this;
        }
    }
}