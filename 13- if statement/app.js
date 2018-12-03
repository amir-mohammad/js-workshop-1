// if(something){
//   do some thing
// }else{
//   do some thing else
// }

let id = '100';
//COMPARE ASSIGN
//EQUAL TO ==
// if( id == 100){
//   console.log('CORRECT');
// }else{
//   console.log('INCORRECT');
// }


//NOT EQUAL TO !=
// if( id != 100){
//     console.log('CORRECT');
//   }else{
//     console.log('INCORRECT');
//   }
//EQUAL VALUE AND TYPE
// if( id !== 100){
//   console.log('CORRECT');
// }else{
//   console.log('INCORRECT');
// }

//CHECK THE VALUE
// if(typeof id !== 'undefined'){
//   console.log(`ID is ${id}`);
// }else{
//   console.log('NOT ID');
// }

//GREATER AND LESS THAN
//  if(id >= 100){
//    console.log('correct');

//  }else{
//    console.log('incorrect');
//  }


//IF ELSE
  // let color = 'orange';

  // if(color == 'red'){
  //   console.log('Color is red');
  // }else if(color == 'blue'){
  //   console.log('Color is blue');
  // }else{
  //   console.log('Color is other thing');
  // }



//LOGICAL OPERATORS
//AND && operator
    let name ="steve";
    let age = 65;

    // if(age > 0 && age < 12){
    //   console.log(`${name} is child`);
    // }else if( age > 12 && age < 19){
    //   console.log(`${name} is teenager`);
    // }else{
    //   console.log(`${name} is adult`);
    // }

   

//OR ||
  if(age <= 16 || age >= 65 ){
    console.log(`${name} can not run in race`);
  }else{
    console.log(`${name} registerd in the race`);
  }


//TERNARY OPERRATOR
console.log(age > 65 ? 'Correct' : 'Incoreect');

if(age > 60)
  'Correct'
else
'Incoreect'