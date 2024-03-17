// "use strict"

const obj = {};

const user = {};

console.log(user.color);

obj.color = "blue";
console.log(obj["color"]);
console.log(obj.color);

const SIZE = Symbol();
obj.SIZE = 0;
console.log(obj.SIZE);
obj[SIZE] = 8;

console.log(obj[SIZE]);  // 8
console.log(obj["SIZE"]);  // 0

for (let key in obj) {
    console.log(`${key} - ${obj[key]}`);
}

const sam = {
    name: "Sam",
    speak () {
        console.log(`${this.name} can speak`)
        return;
    }
}

sam.speak();
console.log(sam);

console.log(delete sam.name);
/*
const obj = {
    get propName() {

    }

    set propName(value) {

    }
}
*/

const user1 = {
    name: "John",
    surname: "Doe",

    get fullName() {
        return `${this.name} ${this.surname}`
    },

    set fullName (value) {
        [this.name, this.surname] = value.split(" ");
       // [this.name, this.surname] = "Bob Miller".split(" ");
    }
}
console.log("Bob Miller".split(" "));  // [ 'Bob', 'Miller' ]

console.log(user1.fullName);


user1.fullName = "Bob Miller";

console.log(user1.fullName);


Object.defineProperty(user1, "job", {
    value: "QA",
    writable: true,
    enumerable: true,
    configurable: false
});

console.log(user1.job);

const user2 = {
    name: "John",
    surname: "Doe",

}

Object.defineProperty(user2, "fullName", {
    get () {
        return `${this.name} ${this.surname}`
    },

    // writable: true,- нельзя
    enumerable: true,
    configurable: true
});

console.log(user2);

const animal = {
    eats: true,
    walk() {
        console.log("Animal walks")
    }
};

const rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

console.log(rabbit["eats"]);
console.log(rabbit.jumps);

rabbit.walk();