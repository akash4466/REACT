const items = [{price: 100}, {price: 200}]; const total = items.map(i => i.price).reduce((a, b) => a + b, 0);
