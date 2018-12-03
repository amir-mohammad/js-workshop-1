let name = "Scott johnson";
let age = 31;
let job = "Developer";
let city = "Miami";
let html;


//String teomplate with es5

html = '<ul>' +
  '<li> Name : ' + name + '</li>' +
  '<li> Age : ' + age + '</li>' +
  '<li> Job : ' + job + '</li>' +
  '<li> City : ' + city + '</li>' +

'</ul>';

function Hello(){
  return 'Hello world';
}
//String with Template literals ES6
html = `
  <ul>
    <li> Name : ${name} </li>
    <li> Age : ${age} </li>
    <li> Job : ${job} </li>
    <li> City : ${city} </li>
    <li> math : ${4+4} </li>
    <li> function : ${Hello()} </li>
    <li> if : ${ age > 30 ? 'over 30' : 'under 30'} </li>

  </ul>
`;

document.body.innerHTML = html;