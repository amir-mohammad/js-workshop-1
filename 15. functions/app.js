//Function Declarations
// function greet(firstName,lastName){
//   firstName = firstName || 'John';
//   lastName = lastName || 'Jackson';
//   //console.log('Hello');
//   return 'Hello ' + firstName + ' '+ lastName;
// }


// console.log(greet('Scott','Smith'));






//DEFAULT OPERATOR ES6

// function greet(firstName = 'John',lastName = 'Jackson'){
  
//   //console.log('Hello');
//   return 'Hello ' + firstName + ' '+ lastName;
// }


// console.log(greet());


//Spread Operator ES6
// function greet(firstName = 'John',lastName = 'Jackson'){
  
//   //console.log('Hello');
//   return 'Hello ' + firstName + ' '+ lastName;
// }

// let args = ['Scott','Smith'];
// console.log(greet(...args));


//FUNCTION EXPRESION

// let squre = function(x = 0){
//   return x*x;
// }
// console.log(squre(8));
//ARROW FUNCTION ES6

  // let squre = (x = 0) => {
  //   return x*x;
  // }
  // console.log(squre(8));



//IMMDIATLEY INVOKABLE FUNCTION EXPRESIONS - IFFEs

  // (function(firstName){
  //   console.log('Hello ' + firstName);
  // })('Scott');


//OOP Models

let todo = {
  add : function(){
    console.log('Add Task...');
  },
  edit: (id = 0) =>{
    console.log(`Edit by ${id}`);
  }
}

todo.add();
todo.edit(22);

todo.delete = () =>{
  console.log('Delete task ...');
}

todo.delete();




