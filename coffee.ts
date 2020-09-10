import { CoffeeType } from "./coffee-type";
import { ICoffee } from "./coffee-model";

export class Coffee implements ICoffee {
  preparationTime: number;
  cost: number;
  type: CoffeeType;
  constructor(type: CoffeeType) {
    this.type = type;
    switch (type) {
      case CoffeeType.espresso:
        this.preparationTime = 500;
        this.cost = 1;
        break;
      case CoffeeType.cappucino:
        this.preparationTime = 1000;
        this.cost = 3.5;
        break;
      case CoffeeType.latte:
        this.preparationTime = 1500;
        this.cost = 4.3;
        break;
      case CoffeeType.americano:
        this.preparationTime = 700;
        this.cost = 1.5;
        break;
    }
  }
}
