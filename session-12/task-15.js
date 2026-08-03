fetch('https://jsonplaceholder.typicode.com/albums').then(r => r.json()).then(d => console.log(d.filter(a => a.userId === 2).map(a => a.title)));
