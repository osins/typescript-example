import { IAnimal } from "./IAnimal";
export interface IPerson extends IAnimal {
    hello(): string;
}
