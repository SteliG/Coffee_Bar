import { Coffee } from "./coffee";
import { CoffeeType } from "./coffee-type";
import { CoffeeBar } from "./coffee-bar";
import { WorkingDay } from "./working-day";

// const order = () => {
//   setInterval(() => {
//     console.log(randomNumber());
//   }, 500);
// };

// const myCoffeeBar = new CoffeeBar();

// console.log(myCoffeeBar.countProfit());

// const receiveOrders = () => {
//   finishWorkingDay(45000);
//   myCoffeeBar.takeOrder();
//   if (closeBar === true) return "closed";
//   setTimeout(() => {
//     return receiveOrders();
//   }, randomNumber());
// };

// console.log(receiveOrders());

const myCoffeeBar = new CoffeeBar();
const newWorkingDay = new WorkingDay(45000, myCoffeeBar);
newWorkingDay.startWorkingDay();
