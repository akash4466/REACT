const favApps = [ {title:'1',
  url:''},
  {title:'2',
  url:''},
  {title:'3',
  url:''},
  {title:'4',
  url:''},
  {title:'5',
  url:''} ];
favApps.splice(2,
  1,
  {title:'Most Used',
  url:'http'});
console.log(favApps);

