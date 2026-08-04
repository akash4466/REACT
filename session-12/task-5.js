function fetchTopMovies() {
  fetch('https://jsonplaceholder.typicode.com/albums').then(r => r.json()).then(d => console.log(d.slice(0,3).map(x => x.title)));
}

