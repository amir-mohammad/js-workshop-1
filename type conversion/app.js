let val;

val = 5 ;

//convert Number to String
val = String(5555);
val = String(4+4);

//Boolean to string
val = String(true);
val = String(new Date());
val = String([1,2,3,4]);

//toSting()

val = (5).toString();
val = (true).toString();
val = (new Date()).toString();
val = ([1,2,3,4]).toString();

// String to Number

 val = Number('5');

 val  = Number(true);
 val = Number(false);
 val = Number(null);

 val  = Number('Hello world');
 val  = Number([1,2,3,4]);

 //parseInt, Parsefloat

 val = parseInt('100.300');
 val = parseFloat('100.300');


//Output

/*console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));*/


let val1 = '5';
let val2 = 6;

let sum = val1 + val2 ;
console.log(sum);
console.log(typeof sum);