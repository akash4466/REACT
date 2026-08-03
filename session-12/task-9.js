fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()).then(d => alert(d.map(u => u.email).join(',')));
