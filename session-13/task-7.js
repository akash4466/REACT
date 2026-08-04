class FlipkartProduct {
  constructor(title,
  price,
  rating) {
  this.title = title;
this.price = price;
this.rating = rating;
} getDiscountedPrice(d) {
  return this.price - (this.price * d/100);
}
} console.log(new FlipkartProduct('Phone',
  1000,
  4).getDiscountedPrice(10));

