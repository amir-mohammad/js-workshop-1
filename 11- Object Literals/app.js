//Create Object Literal

let person = {
  firstName : "Steve",
  lastName : "Smith",
  age : 35,
  hobbies : ['Music', 'Sport'],
  address : {
    city: 'Miami',
    state : 'FL'
  },
  SayBirthDay : function(){
     return 2018 - this.age;
  }
}

let val;
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[0];
val = person.address.city;
val = person['address']['state'];
val =  person.SayBirthDay();
person.car = true;
val = person.car;
person['house'] = null;
val = person['house'];



//OutPut
console.log(val);

let pepole = [

  {name:'steve' , age:25},
  {name:'scott' , age:22},
  {name:'David' , age:31},
  {name:'jeams' , age:50}
];

for(let i = 0 ; i < pepole.length ; i++){
  let per = pepole[i].name + ' ' + pepole[i]['age'];
  console.log(per)
}