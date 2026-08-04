const orders = [ {
  orderId: 1,
  items: [{itemName: 'Burger',
  price: 50}],
  delivery: {status: 'Pending'}
} ];
for (let order of orders) {
  let sum = 0;
for (let item of order.items) sum += item.price;
console.log(order.orderId,
  sum);
}

