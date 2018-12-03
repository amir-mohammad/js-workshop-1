let color = 'yellow';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  case 'green':
    console.log('Color is green');
    break;
  default :
    console.log('color is other things');  
}

let day = new Date();
//console.log(day.getDay());
switch(day.getDay()){
  case 0:
    console.log('Sunday');
    break;
case 1:
    console.log('Monday');
    break;
case 2:
    console.log('Tuesday');
    break;
case 3:
    console.log('Wendsday');
    break;
case 4:
    console.log('Thurseday');
    break;
case 5:
    console.log('Friday');
    break;
case 6:
    console.log('Stureday');
    break;
}