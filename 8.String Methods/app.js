let firstName = "Scott";
let lastName ="Johnson";
let str = "Hi there This is Scott";
let tags="WebDesign,WebDeveloper,Programing";
let val;


//Concatination

val = firstName + lastName;
val = firstName + ' ' + lastName;

//Append
val = "Tim ";
val += 'Jackson';

//Escaping

val = 'That\'s awesome, I can\'t wait';

//Lenght
val = firstName.length;

//Concat();
val = firstName.concat(' ', lastName);

//change case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

//string is an array of chars
val  = firstName[2];

//IndexOf();
val = firstName.indexOf('o');
val = firstName.lastIndexOf('t');

//charAt();

val = firstName.charAt(1);
val = firstName.charAt(firstName.length - 1);

//subString();
val  = firstName.substring(0,3);
val  = firstName.substring(2);

//Slice();
val = firstName.slice(-3);

//split

val = str.split(' ');
val = tags.split(',');

//replace
val  = str.replace('Scott','Willams');

//includes

val = str.includes('willams')
//OutPut

console.log(val);