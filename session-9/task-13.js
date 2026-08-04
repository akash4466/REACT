const addToCartArrow = (...prices) => prices.reduce((sum,
  price) => sum + price,
  0);

