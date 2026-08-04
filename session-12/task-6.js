fetch('https://jsonplaceholder.typicode.com/posts',
  {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({title: 't',
  body: 'b'})
}).then(r => r.json()).then(d => console.log(d.id));

