class Car {

    constructor() {

    }
}

console.log(typeof Car);  //  function

let car1 = new Car();
let car2 = new Car();

console.log(car1 instanceof Car)
console.log(car1 instanceof Array)
console.log(car1 instanceof Object)

console.log(typeof car1);

class Car2 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ["P", "N", "R", "D"];
        this.userGear = this.userGears[0];
    }

    shift(gear) {
        if (this.userGears.indexOf(gear) < 0) {
        throw new Error(console.log(`Ошибочная передача ${gear}`));
        }
    this.userGear = gear;
    }
}

const car3 = new Car2("Tesla", "Model S");
const car4 = new Car2("Mazda", "3");

car3.shift("D");
car4.shift("R");

console.log(car3.userGear);
console.log(car4.userGear);


class Car20 {
    static year;

    static getNextVin() {
        return Car20.nextVin++;
    }

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ["P", "N", "R", "D"];
        this.userGear = this.userGears[0];
        this.vin = Car20.getNextVin();
    }

    shift(gear) {
        if (this.userGears.indexOf(gear) < 0) {
            throw new Error(console.log(`Ошибочная передача ${gear}`));
        }
    this.userGear = gear;
    }

    static areSame(car1, car2) {
        return car1.vin === car2.vin;
    }

    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model === car2.model;
    }
}

Car20.nextVin = 100;


const car21 = new Car20("Tesla", "S");
const car22 = new Car20("Tesla", "S");
const car23 = new Car20("Mazda", "3");

console.log(car21.vin);
console.log(car22.vin);
console.log(car23.vin);

car21.nextVin = 99;  // "use strict"

console.log(car21.vin);

console.log(Car20.areSimilar(car21, car22));
console.log(Car20.areSimilar(car21, car23));
console.log(Car20.areSimilar(car23, car22));


console.log(Car20.areSame(car21, car22));
console.log(Car20.areSame(car21, car23));
console.log(Car20.areSame(car23, car22));

let car25 = new Car2();

console.log(car25);
car25 = new Car20();

console.log(car25);

class InsurancePolicy {}

function makeInsurable(o) {
    o.addInsurancePolicy = function(p) {this.InsurancePolicy = p;}
    o.getInsurancePolicy = function () {return this.InsurancePolicy}
    o.isInsured = function() {return !!this.InsurancePolicy}
}

makeInsurable(Car20.prototype);

const car30 = new Car20();

car30.addInsurancePolicy(new InsurancePolicy());

console.log(car30.isInsured());

for(let prop in car30) {
    console.log(prop);
}
console.log(Object.keys(car30));