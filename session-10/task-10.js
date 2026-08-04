const products = ['Phone',
  'Laptop'];
function searchCallback(term,
  cb) {
  setTimeout(() => cb(products.filter(p => p.includes(term))),
  1000);
} function searchPromise(term) {
  return new Promise(resolve => setTimeout(() => resolve(products.filter(p => p.includes(term))),
  1000));
}

