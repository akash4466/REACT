class Movie {
  constructor(title,
  genre) {
  this.title = title;
this.genre = genre;
} display() {
  console.log(this.title + ' - ' + this.genre);
}
} new Movie('Inception',
  'Sci-Fi').display();

