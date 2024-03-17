class Person {
    name;

    constructor(name = "friend") {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}!`)
    }
}

const fekla = new Person();

fekla.introduceSelf();

class Animals {

    constructor() {

    }

    sleep() {
        console.log("ZZZZZ");
    }
}

const animalOne = new Animals();

animalOne.sleep();

class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name)
        // super()
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My name is ${this.name} , I will teach you ${this.teaches}`)
    }
}

const dunya = new Professor("Dunya", "Java");

dunya.introduceSelf();