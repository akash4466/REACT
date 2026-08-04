function getDeliveryDetails(address = 'Ahmedabad',
  paymentMethod = 'UPI') {
  console.log(`Delivering to ${address} via ${paymentMethod}`);
} getDeliveryDetails();
getDeliveryDetails('Delhi',
  'Card');

