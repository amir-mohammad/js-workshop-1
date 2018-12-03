//Let , const , Var

var a = 1;
let b = 2;
const c = 30;


//Block Scope

// if(true){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`a : ${a} , b : ${b} , c: ${c}`)
// }

// for(let b = 0 ; b < 10; b++){
//   console.log(b)
// }

//Function Scope

 function test(){
   
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`a : ${a} , b : ${b} , c: ${c}`);
 }

 test();

//Output
console.log(`a : ${a} , b : ${b} , c: ${c}`);
