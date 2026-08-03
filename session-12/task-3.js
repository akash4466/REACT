fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()).then(d => console.log(d.slice(0,5).map(x => x.title)));
