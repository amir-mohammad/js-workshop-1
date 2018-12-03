//Create some array
let numbers = [15,78,15,36,25,45];
let numbers2 = new Array(15,25,35,45,55);
let fruit = ['Apple','Orange','Pear','Banna'];
let mixed = [20,'Hello',undefined,null,new Date(),[1,2],{a:1 , b:2}];
let val;

//Get array length
val = numbers.length;

// Check if is an array?
val = Array.isArray(numbers);

//Get single element val;
val = numbers[2];

//change array value
// numbers[2] = 80;

// //IndexOf
// val = numbers.indexOf(40);
// val = numbers.lastIndexOf(40);

// //muting array
// //add to the end
// val = numbers.push(90);

// // add to the first
// val= numbers.unshift(100);

// //Take off from the end
// val  = numbers.pop();

// //take off from the first
// val = numbers.shift();

// //splice
// //val = numbers.splice(1,3);


// //reverse
// val = numbers.reverse();

//concatination
//val = numbers.concat(numbers2);

//sort()
 /* val = fruit.sort();
  val = fruit.reverse();*/

 /* val = numbers.sort(function(a,b){
      return a-b;
  });
  val = numbers.sort(function(a,b){
    return b-a;
});*/
  //val = numbers.reverse();

  //find
  val = numbers.find(function(num){
      return num < 50;
  });

  //filter
  val = numbers.filter(function(num){
      return num < 50;
  })


//Output
console.log(numbers);
console.log(val);




