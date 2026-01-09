let purchaseAmount = 125;
let discount = purchaseAmount > 100 ? 10:0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);