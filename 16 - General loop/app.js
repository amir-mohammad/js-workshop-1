//FOR LOOP
// for(let i  = 0; i < 10; i++){
//   if( i === 2){
//     console.log('2 is my favorit number');
//     continue;
//   }

//   if( i == 5){
//     console.log('Stop the Loop');
//     break;
//   }
//     console.log( ' number ' + i);
// }



//WHILE LOOP
// let i = 0;

// while( i < 10 ){
//   console.log('number' + i);
//   if( i == 3 ){break;}
//   i++;
// }


//DO WHILE LOOP
// let i = 100 ;

// do{
//   console.log('number ' + i);
//   i++
// }
// while( i < 10);


// LOOP THROUGH ARRAY
 
let cars = ['Ford','Chevy' ,'Honda','Toyota'];

// for(let i = 0; i < cars.length ; i++){
//   console.log(cars[i]);
// }

//ForEach Loop
// cars.forEach(function(car,index,array){
//   console.log(array);
//   console.log(`${index} :  ${car}`);
// })
  



//MAP
//   let users = [
//     {id:1, name:'Scott', age:25},
//     {id:2, name:'Dave', age:25},
//     {id:3, name:'Smith', age:25},
//     {id:4, name:'Will', age:25},
//   ];

//  let names = users.map(function(user){
//       return user.name;
//   });

// names.forEach(function(name){
//   console.log(name);
// })

//FOR IN

let user = {
  firstName : 'Scott',
  lastName : 'Smith',
  age : 25,
  sayHello: ()=>{
    console.log('Hello');
  }
}


for(x in user){
  if(typeof user[x] === 'function'){
    user[x]();
    continue;
  }
  console.log(x + ' : ' + user[x]);
}

