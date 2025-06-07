import { pricingRules } from '../pricing/PricingRules';

const prices: Record<string, number> = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15,
};

export class BasketCalculator {
  private basket: string[];

  constructor(basket: string[]) {
    this.basket = basket;
  }

  calculateTotal(): number {
    const itemCounts = this.basket.reduce<Record<string, number>>((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    let total = 0;

    for (const itemName in itemCounts) {
      const quantity = itemCounts[itemName];
      const unitPrice = prices[itemName];

      if (!unitPrice) {
        throw new Error(`Price not found for item: ${itemName}`);
      }

      const pricingFn = pricingRules[itemName];
      if (!pricingFn) {
        throw new Error(`Pricing rule not defined for item: ${itemName}`);
      }

      total += pricingFn(quantity, unitPrice);
    }

    return total;
  }
}
