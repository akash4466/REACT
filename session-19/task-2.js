const p = []; document.getElementById('f').onsubmit = e => { e.preventDefault(); p.push({n: document.getElementById('n').value, d: document.getElementById('d').value}); };
