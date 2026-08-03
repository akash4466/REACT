const getDiscountedPrice = function(price, discountPercent) {
  return price - (price * (discountPercent / 100));
};
console.log(getDiscountedPrice(1000, 20));
