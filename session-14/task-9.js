function getOrderTotal(items) { try { items.forEach(i => { if (i.price < 0) throw new Error('Invalid item price'); }); console.log('Valid order'); } catch (e) { console.log(e.message); } }
