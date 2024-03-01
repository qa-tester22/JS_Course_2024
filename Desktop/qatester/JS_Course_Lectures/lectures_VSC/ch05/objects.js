const arr1 = [1, 2, 3];
const arr2 = arr1;
arr1.push('a'); // Array , Date

console.log(arr2);  // [ 1, 2, 3, 'a' ]
console.log(arr1);  // [ 1, 2, 3, 'a' ]

/*
|___|   
______   -->  |____|    <-- ________

*/

let obj = {};

const guitar = {};

console.log(typeof obj);  // object

obj = "Hello";

console.log(typeof obj);  // string

// guitar = {
//     name: "Ann"
// };  // TypeError: Assignment to constant variable.

guitar.bodyColor = "black"; //{ bodyColor: 'green', tune: [Function (anonymous)] }

console.log(typeof guitar);  // TypeError: Assignment to constant variable.

guitar.bodyColor = "green"; 

console.log(guitar);  // 

guitar.tune = function () {console.log('Hello')};

console.log(guitar);  // { bodyColor: 'black', tune: [Function (anonymous)] }

/*
1.push(15);  // 115

Number("15")
String

Math.pow(2, 32)
2^32
*/

const meta = {
    for: 1,
    return: "two",
    let: 3
}

console.log(meta.for + meta.return + meta.let);  // 6 // 1two3

const personGirl = new Object;

personGirl.feet = 2;
personGirl.name = "Sandy";
personGirl.hair = "black";

console.log(personGirl);  // { feet: 2, name: 'Sandy', hair: 'black' }

console.log(personGirl.name);  // Sandy



let person = {};

console.log(person); //  {}

person.firstName = "Bob";

console.log(person);  // { firstName: 'Bob' }

person.firstName = "Tom";

console.log(person);  //  { firstName: 'Tom' }

person.lastName = "Smith";

console.log(person);  //  { firstName: 'Tom', lastName: 'Smith' }

let fullName = person.firstName + " " + person.lastName;

// person.fullName = person.firstName + " " + person.lastName;

console.log(fullName);  // Tom Smith

console.log(person["firstName"]);  // Tom

let key = "lips";
person[key] = 2;

console.log(person);  // { firstName: 'Tom', lastName: 'Smith', lips: 2 }

const personBoy = {
    
    fullName: {
        firstName: "John",
        lastName: "Davis",
    },
    age: 20,   

}

console.log(personBoy.fullName.lastName); // Davis
console.log(personBoy.age);  // 20

console.log(personBoy["fullName"]["lastName"]);  // Davis

delete personBoy.age;

console.log(personBoy.age);  // undefined

console.log(personBoy.fullName); // { firstName: 'John', lastName: 'Davis' }