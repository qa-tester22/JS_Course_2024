/*
W3schools
ECMAScript 2015, также известный как ES6, представил классы JavaScript.

Классы JavaScript — это шаблоны объектов JavaScript.
интаксис классов JavaScript
Используйте ключевое слово classдля создания класса.

Всегда добавляйте метод с именем constructor():

class ClassName {
    name;
    #privateName 

    constructor() {...}

    static method() {...}

    method_1 () {...}
    method_2 () {...}
}
*/

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

/*
создается класс с именем «Автомобиль».

Класс имеет два начальных свойства: «имя» и «год».

Класс JavaScript не является объектом.

Это шаблон для объектов JavaScript.
*/

console.log(typeof Car);  // function

/*
Использование класса
Если у вас есть класс, вы можете использовать его для создания объектов:
*/

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

/*
Метод конструктора вызывается автоматически при создании нового объекта.

Метод конструктора**************************************

Метод конструктора — это специальный метод:

Он должен иметь точное имя «конструктор» constructor.
Он выполняется автоматически при создании нового объекта.
Он используется для инициализации свойств объекта.
Если вы не определите метод конструктора, JavaScript добавит пустой метод конструктора.

Методы класса******************************************

Методы класса создаются с тем же синтаксисом, что и методы объекта.

Используйте ключевое слово class для создания класса.

Всегда добавляйте constructor() метод.

Затем добавьте любое количество методов.

Создайте метод класса с именем «возраст», который возвращает возраст автомобиля:
*/

class Car2 {
    constructor (name, year) {
       this.name = name;
       this.year = year;
    }

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar3 = new Car2("Ford", 2014);
console.log("My car is " + myCar3.age() + " years old.");  // My car is 10 years old.

/*
Вы можете отправлять параметры методам класса:
*/

class Car4 {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
        return x - this.year;
    }     
}

const date = new Date();
let year = date.getFullYear();

const myCar4 = new Car4("Ford", 2014);

console.log(`My car is ${myCar4.age(year)} years old.`);  // My car is 10 years old.
