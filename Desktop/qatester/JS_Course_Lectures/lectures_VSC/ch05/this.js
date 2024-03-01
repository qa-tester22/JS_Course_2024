let sandwich = {
    meat: "",
    cheese: "",
    bread: "",
    condiment: "",

    makeSandwich: function(meat, cheese, bread, condiment) {
        sandwich.meat = meat;
        sandwich.cheese = cheese;
        sandwich.bread = bread;
        sandwich.condiment = condiment;

        let mySandwich = sandwich.bread + ", " + sandwich.meat + ", " + sandwich.cheese + ", " + sandwich.condiment;
        return mySandwich;
    },
};

console.log(sandwich.makeSandwich);  // [Function: makeSandwich]

console.log(sandwich.makeSandwich());  // undefined, undefined, undefined, undefined

console.log(sandwich.makeSandwich("ham", "cheddae", "wheat", "sou"));  // wheat, ham, cheddae, sou

sandwich = {
    meat: "turkey",
    cheese: "",
    bread: "",
    condiment: "onion",

    makeSandwich: function(meaet, cheese, bread, condiment = this.condiment) {
        this.meat = meaet;
        this.cheese = cheese;
        this.bread = bread;
        this.condiment = condiment;

        let mySandwich = this.bread + ", " + this.meat + ", " + this.cheese + ", " + this.condiment;

        return mySandwich;
    },
};

console.log(sandwich.makeSandwich("ham", "cheddar", "wheat"));  //  wheat, ham, cheddar, sou

let str1 = "one";
let str2 = "two";
let str3 = "three";

console.log( str3 + " " + str2 + " " + str1);  // three two one


function strings (one, two, three) {
    let srts = three + " " + one + " " + two;
    return  srts;
}

console.log(strings(1, 2, 3));  // 3 2 1  // 3 1 2
