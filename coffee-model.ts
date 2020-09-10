import { CoffeeType } from "./coffee-type";

export interface ICoffee {
  type: CoffeeType;
  preparationTime: number;
  cost: number;
}
