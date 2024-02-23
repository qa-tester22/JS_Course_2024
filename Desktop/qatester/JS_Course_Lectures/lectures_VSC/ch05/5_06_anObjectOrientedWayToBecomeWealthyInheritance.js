/**
 * An Object-Oriented Way to Become Wealthy: Inheritance
 * Объектно-ориентированный способ разбогатеть: наследование
 

Когда вы создаете объекты, вы не ограничиваетесь созданием конкретных объектов, таких как гитара, машина, кошка или сэндвич. Настоящая красота объектов в том, что с их помощью можно создавать типы объектов, из которых можно создавать другие объекты.

Если вы прочитали предыдущие разделы этой главы, то увидите, что каждый созданный объект был создан непосредственно из объекта типа Object.

Примеры метода конструктора создания объекта из раздела «Создание объектов» ранее в этой главе наглядно это демонстрируют:
*/

let person = new Object()

/*
Здесь создается новый объект человека типа Object. Этот новый объект person содержит все свойства и методы по умолчанию типа Object, но с новым именем. Затем вы можете добавить к объекту person свои собственные свойства и методы, чтобы он конкретно описывал то, что вы подразумеваете под человеком person.

Здесь создается новый объект человека типа Object. Этот новый объект person содержит все свойства и методы по умолчанию типа Object, но с новым именем. Затем вы можете добавить к объекту person свои собственные свойства и методы, чтобы он конкретно описывал то, что вы подразумеваете под человеком person.
*/
person.eyes = 2;
person.ears = 2;
person.arms = 2;
person.hands = 2;
person.feet = 2;
person.legs = 2;
person.species = "Homo sapien";

/**
 * Итак, теперь вы установили некоторые конкретные свойства объекта person. Представьте, что вы хотите создать новый объект, представляющий собой конкретного человека, например Уилли Нельсона. 
 * Вы можете просто создать новый объект с именем tom и присвоить ему все те же свойства, что и объекту person, а также свойства, которые делают Tom уникальным.
 */

let tom = new Object();

tom.eyes = 2;
tom.ears = 2;
tom.arms = 2; 
tom.hands = 2;
tom.feet = 2;
tom.legs = 2;
tom.species = "Homo sapien";
tom.occupation = "qa tester";
tom.hometown = "LA";
tom.hair = "Long";
tom.sex = "male";

/**
 * Однако этот метод определения объекта tom является расточительным. Это требует от вас много работы, и здесь нет никаких указаний на то, что Tom — person человек. Просто он обладает всеми теми же свойствами, что и person человек.
 * 
 * Решение состоит в том, чтобы создать новый тип объекта с именем Person, а затем сделать объект tom типа Person.


Обратите внимание: когда мы говорим о типе объекта, мы всегда пишем имя типа объекта с заглавной буквы. Это не обязательное требование, но это почти универсальное соглашение. Например, мы говорим
 */
// let person = new Object(); - ранее объявили;

// let tom = new Person();

// console.log(tom.person); // TypeError: person is not a constructor


/*********************************************************
 * Constructing Objects with
constructor functions


 * Создание объектов с помощью
функции конструктора

Чтобы создать новый тип объекта, вы определяете новую функцию-конструктор. 
Функции-конструкторы формируются так же, как и любая функция в JavaScript, но они используют ключевое слово this для присвоения свойств новому объекту. 

Новый объект затем наследует свойства типа объекта.

Вот функция-конструктор для нашего типа объекта Person:
 */
function Person() {
    this.eyes = 2;
    this.ears = 2;
    this.arms = 2;
    this.hands = 2;
    this.feet = 2;
    this.legs = 2;
    this.species = "Homo sapiens";
};

/*
Чтобы создать новый объект типа Person сейчас, все, что вам нужно сделать, это присвоить функцию новой переменной. Например:
*/

let willy = new Person();

/*
Объект willy наследует свойства типа объекта Person. Несмотря на то, что вы специально не создавали никаких свойств для объекта willy, он содержит все свойства Person.
*/

console.log(tom);

/**
 * {
  eyes: 2,
  ears: 2,
  arms: 2,
  hands: 2,
  feet: 2,
  legs: 2,
  species: 'Homo sapiens',
  occupation: 'qa tester',
  hometown: 'LA',
  hair: 'Long',
  sex: 'male'
}

все свойства стянул  Том.

 */

console.log(willy);

/**
 * Person {
  eyes: 2,
  ears: 2,
  arms: 2,
  hands: 2,
  feet: 2,
  legs: 2,
  species: 'Homo sapien'
}
 */

console.log("Willy has " + willy.eyes + " eyes!");
// Willy has 2 eyes!

/******************************************************
 * Modifying an object type
 *  * Изменение типа объекта
 * 
Том поменял работу. как изменить?

Предположим, у вас есть тип объекта Person, который служит прототипом для нескольких объектов. В какой-то момент ты понимаешь, что person человек, как и все объекты, которые от него наследуются, должен иметь еще несколько свойств.

Чтобы изменить объект-прототип, используйте свойство прототипа, которое каждый объект наследует от Object. 
 как это работает.
 * 
 */

 function Person() {
    this.eyes = 2;
    this.ears = 2;
    this.arms = 2;
    this.hands = 2;
    this.feet = 2;
    this.legs = 2;
    this.species = "Homo sapien";
 };

 let chloe = new Person();
 let rob = new Person();
 let amy = new Person();

 // Человеку нужно больше свойств!

 Person.prototype.knees = 2;
 Person.prototype.toes = 10;
 Person.prototype.elbows = 2;

 // проверим новые свойства человека

 console.log(chloe);

 /**
  * Person {
  eyes: 2,
  ears: 2,
  arms: 2,
  hands: 2,
  feet: 2,
  legs: 2,
  species: 'Homo sapien'
}
  */

console.log("Rob has " + rob.knes + " knes!"); // Rob has undefined knes!

console.log("Rob has " + rob.knees + " knees!"); // Rob  has 2 knees! 

console.log("Chloe has " + chloe.toes + " toes!"); // Chloe has 10 toes!

console.log("Amy has " + amy.elbows + " elbows!");

/**
 * 
 * Проблема здесь в том, что доопределение свойств через прототип не меняет отображение свойств в списке свойств объекта при использовании функции `console.log()` или при просмотре его в консоли разработчика. 

Когда вы вызываете `console.log(chloe)`, он отображает только свойства, определенные непосредственно в объекте `chloe`, а не те, которые добавлены через прототип. Поэтому свойства `knees`, `toes`, и `elbows`, определенные через `Person.prototype`, не отображаются в списке свойств при выводе в консоль.

Однако, если вы обратитесь к этим свойствам напрямую, как вы это делаете в ваших `console.log()` вызовах, они будут доступны:

console.log("Rob has " + rob.knees + " knees!"); // Rob has 2 knees!
console.log("Chloe has " + chloe.toes + " toes!"); // Chloe has 10 toes!


Это потому, что JavaScript включает эти свойства в прототип объекта `Person`, и они становятся доступными для всех экземпляров `Person`, включая `rob`, `chloe` и `amy`. 

Таким образом, хотя эти свойства не отображаются в списке свойств при использовании `console.log()`, они все равно доступны для использования в коде.
 */

/**
 * 
 * Вы можете получить информацию о всех свойствах объекта, включая унаследованные, с помощью метода `Object.getOwnPropertyNames()` и его вариации, таких как `Object.keys()` и `Object.getOwnPropertyDescriptors()`. 

1. **Object.getOwnPropertyNames()**: Этот метод возвращает массив со всеми собственными (не унаследованными) именами свойств указанного объекта. Он не включает в себя свойства, определенные в прототипе.

Пример:

let chloe = new Person();
console.log(Object.getOwnPropertyNames(chloe));


2. **Object.keys()**: Этот метод возвращает массив с именами всех собственных перечислимых свойств указанного объекта. Он также не включает в себя свойства, определенные в прототипе.

Пример:


// let chloe = new Person();
console.log(Object.keys(chloe));
// [
  'eyes',    'ears',
  'arms',    'hands',
  'feet',    'legs',
  'species'
]


3. **Object.getOwnPropertyDescriptors()**: Этот метод возвращает объект, содержащий дескрипторы для всех собственных свойств указанного объекта. Дескриптор содержит информацию о свойствах, таких как значение, доступность для записи и дальнейшие.

Пример:


let chloe = new Person();

console.log(Object.getOwnPropertyDescriptors(chloe));

// {
//     eyes: { value: 2, writable: true, enumerable: true, configurable: true },
//     ears: { value: 2, writable: true, enumerable: true, configurable: true },
//     arms: { value: 2, writable: true, enumerable: true, configurable: true },
//     hands: { value: 2, writable: true, enumerable: true, configurable: true },
//     feet: { value: 2, writable: true, enumerable: true, configurable: true },
//     legs: { value: 2, writable: true, enumerable: true, configurable: true },
//     species: {
//       value: 'Homo sapien',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     }
//   }

Используйте соответствующий метод в зависимости от ваших потребностей.
 */

/**
 * 
 *  Методы `Object.getOwnPropertyNames()`, `Object.keys()` и `Object.getOwnPropertyDescriptors()` возвращают только собственные свойства объекта, но не учитывают свойства, добавленные через прототип.

Чтобы получить все свойства объекта, включая унаследованные, вы можете использовать цикл `for...in`, который будет перечислять все свойства объекта, включая те, которые унаследованы через прототип.

Вот пример:


function getAllProperties(obj) {
    let properties = [];
    for (let prop in obj) {
        properties.push(prop);
    }
    return properties;
}

// let chloe = new Person();
console.log(getAllProperties(chloe));


// [
  'eyes',    'ears',
  'arms',    'hands',
  'feet',    'legs',
  'species', 'knees',
  'toes',    'elbows'
]

Этот код выведет все свойства объекта `chloe`, включая унаследованные свойства из прототипа.
 */

/*****************************************************
 * Creating Objects with Object.create
 * Создание объектов с помощью Object.create

Еще один способ создания объектов из других объектов — использование метода Object.create. Преимущество этого метода заключается в том, что вам не требуется писать функцию-конструктор. Он просто копирует свойства указанного объекта в новый объект. Когда объект наследуется от другого объекта, объект, от которого он наследуется, называется прототипом.

запишем как можно использовать Object.create для создания объекта Garry из прототипа.
 */

// create a generic Person 

let Tester = {
    eyes: 2,
    arms: 2,
    feet: 2
};

// create the garry object, based on Person 

let garry = Object.create(Tester);

console.log(garry);  // {}

console.log(`Garry the Tester has ${garry.feet} feet!`);
// Garry the Tester has 2 feet!

/**
 * вы можете добавить свойства к объекту `garry`, который был создан с помощью `Object.create()`. Просто обращайтесь к объекту `garry` и добавляйте свойства, как вы делали бы с любым другим объектом.
*/


// Добавим свойство 'hands' объекту garry
garry.hands = 2;

console.log(`Garry the Tester has ${garry.hands} hands!`);
// Выведет: Garry the Tester has 2 hands!

/**
Теперь объект `garry` имеет свойство `hands`, которое вы добавили к нему после создания.
*/

let ann = Object.create(Tester); 
// Какими свойствами будет обладать? будет ли свойство hands?

console.log(ann);  // {}

console.log(`Ann the Tester has ${ann.feet} feet!`);

console.log(`Ann the Tester has ${ann.hands} hands!`);

console.log(`Ann the Tester has ${ann.eyes} feet!`);

console.log(`Ann the Tester has ${ann.arms} feet!`);

/**
 * Ann the Tester has 2 feet!
Ann the Tester has undefined hands!
Ann the Tester has 2 feet!
Ann the Tester has 2 feet!
 */