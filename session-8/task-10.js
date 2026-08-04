document.getElementById('clearBtn').onclick = () => {
  localStorage.removeItem('restaurants');
console.log('Cleared');
};

