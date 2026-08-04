const transactions = [{amount: 50},
  {amount: 150}];
const totalAmount = transactions.map(t => t.amount).reduce((a,
  b) => a + b,
  0);

