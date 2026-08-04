const playlists = [{name:'1'},
  {name:'2'},
  {name:'3'}];
playlists.splice(1,
  1,
  {name:'New 2'});
console.log(playlists);

