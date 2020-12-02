namespace TSO {
    export enum Sex {
        man,
        woman
    }

    export interface IAnimal {
        name: string;
        age: number;
        sex: Sex;
    }

    export interface IPerson extends IAnimal {
        hello(): string;
    }
}