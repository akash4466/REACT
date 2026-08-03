const msg = document.getElementById('msg'); setTimeout(() => { msg.innerText = 'Loading your feed...'; setTimeout(() => { msg.innerText = 'Feed loaded!'; }, 2000); }, 2000);
