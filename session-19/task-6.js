const p = [];
document.getElementById('f').onsubmit = e => {
  e.preventDefault();
p.push({n: document.getElementById('n').value,
  c: document.getElementById('c').value,
  r: document.getElementById('r').value});
};

