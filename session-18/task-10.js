function placeOrder() {
  confirmOrder();
} function confirmOrder() {
  processPayment();
} function processPayment() {
  throw new Error('Payment failed');
} placeOrder();

