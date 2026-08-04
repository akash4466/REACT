function getOrderStatus(orderId) {
  return new Promise((resolve,
  reject) => {
  setTimeout(() => {
  orderId % 2 === 0 ? resolve('Order delivered') : reject('Order not found');
},
  1500);
});
} getOrderStatus(2).then(console.log).catch(console.error);

