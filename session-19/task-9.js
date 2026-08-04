let p = [];
const render = () => document.getElementById('l').innerHTML = p.map((x,
  i) => `<li>${x.n} <button onclick="del(${i})">Del</button> <button onclick="edit(${i})">Edit</button></li>`).join('');
window.del = i => {
  p.splice(i,
  1);
render();
};
window.edit = i => {
  p[i].n = prompt('New name:',
  p[i].n);
render();
};
document.getElementById('f').onsubmit = e => {
  e.preventDefault();
p.push({n: document.getElementById('n').value,
  c: document.getElementById('c').value,
  r: document.getElementById('r').value});
render();
};

