import { BasketCalculator } from './services/BasketCalculator';

const shoppingList = ["Apple", "Apple", "Banana", "Melon", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"];

const calculator = new BasketCalculator(shoppingList);
const totalInPence = calculator.calculateTotal();
const pounds = Math.floor(totalInPence / 100);
const pence = totalInPence % 100;

console.log(`Total price: £${pounds}.${pence.toString().padStart(2, '0')}`);
