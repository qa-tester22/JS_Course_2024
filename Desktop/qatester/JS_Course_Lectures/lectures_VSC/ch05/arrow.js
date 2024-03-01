function myFunc(theObject) {
    theObject.make = "Toyota";
};

const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998
};

let x, y;

x = myCar.make;  // x получает значение "Honda"

console.log(x);

myFunc(myCar);

y = myCar.make;  // y получает значение "Toyota"
// (свойство было изменено функцией)

console.log(y);  // Toyota

let carFunc = function (theObject) {
    theObject.make = "Niva";
}

carFunc(myCar);

console.log(myCar);  // { make: 'Niva', model: 'Accord', year: 1998 }
/*
let arrowFunc = (theObject) => {
    theObject.make = "BMW";
};

arrowFunc(myCar);

console.log(myCar);  // { make: 'BMW', model: 'Accord', year: 1998 }

*/

let arrowFunc = theObject => theObject.make = "BMW";

arrowFunc(myCar);

console.log(myCar);  // { make: 'BMW', model: 'Accord', year: 1998 }


let arrowEmpty = () => "Hello!"



function square(num1, num2) {
    return num1 * num2;
}

console.log(square(5, 10));

let square2 = function (num1, num2) {
    return num1 * num2;
}

console.log(square2(5, 10));

let arrowSquare = (num1, num2) => {
    return num1 * num2;
}

console.log(arrowSquare(5, 10));


let arrowSquare2 = (num1, num2) => num1 * num2;


console.log(arrowSquare2(5, 10));