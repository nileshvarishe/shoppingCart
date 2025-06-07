type PricingFunction = (quantity: number, unitPrice: number) => number;

export const pricingRules: Record<string, PricingFunction> = {
  Apple: (quantity, price) => quantity * price,
  Banana: (quantity, price) => quantity * price,
  Melon: (quantity, price) => {
    const payable = Math.ceil(quantity / 2);
    return payable * price;
  },
  Lime: (quantity, price) => {
    const setsOfThree = Math.floor(quantity / 3);
    const remaining = quantity % 3;
    return ((setsOfThree * 2) + remaining) * price;
  },
};
