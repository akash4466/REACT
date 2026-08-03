let movies = ['Jawan', 'Pathaan', 'Dunki']; localStorage.setItem('movies', JSON.stringify(movies)); let saved = localStorage.getItem('movies'); let arr = JSON.parse(saved); console.log(arr);
