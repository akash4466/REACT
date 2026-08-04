function checkPaymentAmount(amount) {
  if (amount <= 0) throw new Error('Amount must be positive');
return 'Payment accepted';
}

