function payment() {
  return new Promise(resolve => {
  setTimeout(() => {
  console.log('Payment successful!');
resolve();
},
  1000);
});
}

