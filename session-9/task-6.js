function orderFood(item,
  quantity = 1) {
  return `You ordered ${quantity} ${item}.`;
} console.log(orderFood('Pizza'));
console.log(orderFood('Burger',
  2));

