import { CoffeeBar } from "./coffee-bar";

export class WorkingDay {
  public duration: number;
  opened: boolean;
  location: CoffeeBar;
  break: boolean = false;
  constructor(duration, location) {
    this.duration = duration;
    this.opened = true;
    this.location = location;
  }

  public randomNumber = () => {
    const random = Math.floor(Math.random() * 5000);
    return random;
  };

  public startWorkingDay = () => {
    setTimeout(() => {
      this.opened = false;
    }, this.duration);
    this.setBreak();
    this.receiveOrders();
  };

  public receiveOrders = () => {
    if (this.break === false) {
      this.location.takeOrder();
    }
    if (this.opened === false)
      return console.log("profit", this.location.countProfit());
    setTimeout(() => {
      return this.receiveOrders();
    }, this.randomNumber());
  };

  public setBreak = () => {
    if (this.opened === false) return;
    setTimeout(() => {
      console.log("time for break");
      this.break = true;
      this.executeBreak();
    }, 12000);
  };

  public executeBreak = () => {
    if (this.opened === false) return;
    setTimeout(() => {
      console.log("finish break");
      this.break = false;
      this.setBreak();
    }, 5000);
  };
}
