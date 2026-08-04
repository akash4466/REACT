const list = document.getElementById('list');
const load = () => {
  const rests = JSON.parse(localStorage.getItem('restaurants') || '[]');
list.innerHTML = rests.map(r => `<li>${r}</li>`).join('');
};
document.getElementById('addBtn').onclick = () => {
  const val = document.getElementById('restInput').value;
const rests = JSON.parse(localStorage.getItem('restaurants') || '[]');
rests.push(val);
localStorage.setItem('restaurants',
  JSON.stringify(rests));
load();
};
load();

