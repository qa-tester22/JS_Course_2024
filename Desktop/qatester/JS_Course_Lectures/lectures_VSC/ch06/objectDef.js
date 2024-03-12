let obj = {}

const obj1 = new Object();

// create

console.log(typeof obj);

// objectName.property

obj.name = "John";

let age = "возраст"

obj[age] = 25;

console.log(obj["name"]);


console.log(obj.возраст);

// arr[0]... arr[n]

console.log(obj);

obj[55] = "55";

console.log(obj);

// for of , for in

for (key in obj) {
    console.log(key);
}

// for(key of obj) {
//     console.log(key);
// }

// TypeError: obj is not iterable

for (let i = 0; i < obj.length; i++) {
    console.log(i);
}

obj.name = {
    firstName: "John",
    lastName: "Doe"
};

// console.log(obj.name.firstName);


// console.log(obj["name"]["lastName"]);

obj.name.fullName = function () {this.firstName + " " + this.lastName};

console.log(obj.name.fullName());

// console.log(this);

// this = {name: "name"}

// obj.name.fullName1 = () => {this.firstName + " " + this.lastName};

// console.log(obj.name.fullName1());

const myArr = Object.values(obj);

console.log(myArr);

obj = JSON.stringify(obj);

console.log(typeof obj);

let arrStr = JSON.stringify(myArr)

console.log(arrStr);

function Person (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye
}

"ggg".toUpperCase()

const myFather = new Person("John", "Doe", 35, "blue");

console.log(myFather);

const myMother = new Person("Marry", "Doe", 38, "blue");


console.log(myMother.lastName);

myFather.nationality = "English";

console.log(myFather);
console.log(myMother);

function Person (first, last, age, eye, nationality = "Russian") {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = nationality;
}


console.log(myFather);
console.log(myMother);
