let date = new Date();
let birthday = new Date('10-09-2018');
let val;

val = date;
val = date.getDate();
val = date.getMonth();
val  =  date.getFullYear();
val = date.getDay();
val = date.getHours();
val = date.getMinutes();
val = date.getSeconds();
val = date.getMilliseconds();

val =birthday.setFullYear('2020');
val = birthday.setMonth('3');

//output
console.log(birthday);