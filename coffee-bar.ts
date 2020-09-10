import { CoffeeType } from "./coffee-type";
import { Coffee } from "./coffee";
import { count } from "console";

export class CoffeeBar {
  profit: number;
  orders: Coffee[] = [];
  constructor() {}

  takeOrder(): void {
    const types = [
      CoffeeType.latte,
      CoffeeType.espresso,
      CoffeeType.cappucino,
      CoffeeType.americano,
    ];
    const numberOfCoffees = Math.floor(Math.random() * 6);
    const randomType = types[Math.floor(Math.random() * types.length)];
    let i = 0;
    while (i < numberOfCoffees) {
      const newCoffee = new Coffee(randomType);
      console.log(newCoffee);
      this.orders.push(newCoffee);
      i++;
    }
  }

  countProfit(): number {
    const profit = this.orders.reduce(function (
      acccumulator,
      currentValue
    ): any {
      return acccumulator + currentValue.cost;
    },
    0);
    return profit.toFixed(2);
  }
}
