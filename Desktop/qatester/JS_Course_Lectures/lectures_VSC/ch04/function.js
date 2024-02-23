/*
function addA(aString) {
    aString += "a";
    console.log(aString);
    // return aString;
};

addA('JavaScript');
console.log(addA('JavaScript'));
/*
function nameFunction () {
    // code
};

// let function = new Function() {
    // code
// };

nameFunction();

function myFunction(parameters) {
    // code
};

myFunction(myArgument);

return myValue;
*/
/*
function getTheDate(){
    let rightNow = new Date();
    console.log(rightNow.toDateString());
};

getTheDate();

function getHello() {
    return 'Hello!'
}

let helloText = getHello();

console.log(helloText);

function getCir () {
    let radius = 12;
    return 2 * Math.PI * radius ** 2;
}

console.log(getCir());

function addNumbers(numbersToAdd) {
    let sum = 0;
    for (let oneNumber in numbersToAdd) {
        sum = sum + numbersToAdd[oneNumber];
    }
    return sum;
}

// for (let i = 0; i <= arr.length - 1; i = i + 5) {
    // code
// }


let myNumbers1 = [0,0,0];
let myNumbers2 = [3333, 222, 111];
let myNumbers3 = [777, 555, 777, 555];

let sum1 = addNumbers(myNumbers1);
let sum2 = addNumbers(myNumbers2);
let sum3 = addNumbers(myNumbers3);

console.log(`sum1 = ${sum1}`);
console.log(`sum2 = ${sum2}`);
console.log(`sum3 = ${sum3}`);

function myTacos(meat, produce) {
    // code
};


function myTacos(meat, produce) {
    console.log(meat);
    // console.log(produce);
};

myTacos("beef", "onions");

let meat = "beef";

let produce = "onions";


function myTacos(meat, produce) {
    console.log(meat);
    console.log(produce);
};

myTacos();
*/

/*
function addToMyNumbers(number1, number2) {
    number1++;
    number2++;
    console.log(`number1: ${number1}`);
    console.log(`number2: ${number2}`);
};

let number1 = 3;
let number2 = 12;

addToMyNumbers(number1, number2);

console.log(`original number1: ${number1}`);
console.log(`original number2: ${number2}`);

addToMyNumbers();

function welcome (yourName) {
    if (typeof yourName === 'undefined') {
        yourName = 'friend';
    };
    console.log(`Hello, ${yourName}`);
}

welcome('Дуня', 'Митрофан');

function welcomeFriend (yourName = 'Друг', hisName = "Дуня") {
       console.log(`Привет, ${yourName} and ${hisName}`);
}

welcomeFriend ("Дуня");

welcomeFriend ();
*/
function flexibleWelcome() {
    let welcome = "Welcome, ";
    for (let i = 0; i <arguments.length; i++) {
        welcome += arguments[i] + ' ';
    }
    return welcome;
};

console.log(flexibleWelcome('Митрофанов', "Митрофан", "Митрофанович"));

console.log(flexibleWelcome('Митрофанова', "Дуня", 1, 4, "Ооо", true));

function flexibleWelcomeRest(...names) {
   let welcome = "Привет, ";
    for (let i = 0; i < names.length; i++) {
        welcome += names[i] + ' ';
    }
    return welcome;
};


console.log(flexibleWelcomeRest('Митрофанов', "Митрофан", "Митрофанович"));

console.log(flexibleWelcomeRest('Митрофанова', "Дуня"));

