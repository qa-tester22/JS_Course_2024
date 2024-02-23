/**
 * Retrieving and Setting Object Properties
 * Получение и установка свойств объекта

После того как вы создадите объект и определите его свойства, вам понадобится возможность извлекать и изменять эти свойства. 
Два способа доступа к свойствам объекта — 

✓✓ использование записи через точку или 

✓✓ запись в квадратных скобках.

******************************************************
Dot notation
Точечное обозначение

В точечной записи за именем объекта следует точка, за которой следует имя свойства, которое вы хотите получить или установить.

Чтобы создать новое свойство с именем firstName в объекте person или изменить значение существующего свойства firstName, вы должны использовать оператор, подобный следующему:
*/

let person = {};

console.log(person); //  {}

person.firstName = "Bob";

/*
Если свойство firstName еще не существует, этот оператор создаст его.
Если он существует, он обновит его новым значением.
*/

console.log(`person = ${person}`); // person = [object Object]

console.log("person" + person);  // person[object Object]

console.log("person", person);  // person { firstName: 'Bob' }

console.log(person); // { firstName: 'Bob' }

// Изменим имя

person.firstName = "John";

console.log("person", person);  // person { firstName: 'John' }

/*
Чтобы получить значение свойства с использованием точечной записи, вы должны использовать тот же синтаксис, но вы должны переместить имена объекта и свойства (называемые средством доступа к свойству) в другую позицию в инструкции. Например, если вы хотите объединить значения person.firstName и person.lastName и присвоить их новой переменной с именем fullName, вы должны сделать следующее:
*/

let fullName = person.firstName + person.lastName;

console.log("person", person);  // person { firstName: 'John' }

console.log(fullName);

person.lastName = "Doe";

console.log(fullName);
console.log("person", person);

fullName = person.firstName + person.lastName;

console.log(fullName);
console.log("person", person);

fullName = person.firstName + " " + person.lastName;

console.log(fullName);
/*
Или, чтобы записать значение person.firstName в ваш html-документ, просто используйте метод доступа к свойству, как и любую переменную; такой как
*/

// document.write(person.firstName);

/**
 * Square bracket notation
 * Обозначение квадратных скобок

В обозначении квадратных скобок, как вы уже догадались, используются квадратные скобки после имени объекта для получения и установки значений свойств. Чтобы задать значение свойства с помощью квадратных скобок, поместите имя свойства в кавычки внутри квадратных скобок, например:
*/

person["firstName"] = "Ann";

/*
Обозначение квадратных скобок имеет несколько возможностей, которых нет у точечной записи. Основной из них заключается в том, что вы можете использовать переменные внутри квадратных скобок в тех случаях, когда вы не знаете имя свойства, которое хотите получить при написании программы.

Следующий пример делает то же самое, что и предыдущий, но с переменной внутри квадратных скобок, а не с буквенной строкой. Используя эту технику, вы можете составить одно утверждение, которое может функционировать во многих различных ситуациях , обстоятельства, например, в цикле или функции:
 * 
 */

let personProperty = "firstName";

person[personProperty] = "Gena";

console.log(person);

let key = "lips";
person[key] = 2;

let ключ = "ключ";

person[ключ] = "значение";

console.log(person); // { firstName: 'Gena', lastName: 'Doe', lips: 2, 'ключ': 'значение' }

/**
 * Вот простая программа, которая создает объект под названием стул, затем проходит по каждому свойству объекта и просит пользователя ввести значения для каждого из них. После того как пользователь ввел значение для каждого свойства, вызывается функция writeChairReceipt, которая распечатывает каждое свойство вместе со значением, введенным пользователем.
 */
/*
let myChair = {
    "cushionMaterial" : "",
    "numberOfLegs" : "",
    "legHeight" : ""
};

function configureChair() {
    let userValue;
    
    for (let property in myChair) {
        if (myChair.hasOwnProperty(property)) {
            userValue
        }
    }
}
*/

/*можно подключить к файлу html*//*
let myChair = {
    "cushionMaterial": "",
    "numberOfLegs": "",
    "legHeight": ""
};

function configureChair() {
    let userValue;

    for (let property in myChair) {
        if (myChair.hasOwnProperty(property)) {
            userValue = prompt("Enter a value for " + property);
            myChair[property] = userValue;
        }
    }
}

function writeChairReceipt() {
    console.log("Your chair will have the following configuration:");

    for (let property in myChair) {
        if (myChair.hasOwnProperty(property)){
            console.log(property + ": " + myChair[property]);
        }
    }
}

configureChair();
writeChairReceipt();


// Этот код выполняет те же самые функции, что и предыдущий, но теперь он представляет собой отдельную программу на JavaScript, которая может быть запущена независимо от HTML-документа. Конфигурация стула запрашивается с помощью встроенной функции `prompt`, а результат выводится в консоль с помощью функции `console.log`.

/*

Конечно, в браузерной среде, такой как консоль, `prompt` не доступен. `prompt` является методом, используемым для интерактивного ввода данных пользователем в окне браузера, и он доступен только в окружении браузера.

Чтобы переписать этот код для выполнения в среде консоли, можно использовать методы ввода-вывода Node.js, такие как `readline`, или передавать данные как аргументы при запуске программы.

Вот пример, как можно изменить код для выполнения в среде Node.js с использованием модуля `readline`:
*/
/*
const readline = require('readline');

let myChair = {
    "cushionMaterial": "",
    "numberOfLegs": "",
    "legHeight": ""
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function configureChair() {
    rl.question("Enter a value for cushionMaterial: ", (cushionMaterial) => {
        myChair.cushionMaterial = cushionMaterial;

        rl.question("Enter a value for numberOfLegs: ", (numberOfLegs) => {
            myChair.numberOfLegs = numberOfLegs;

            rl.question("Enter a value for legHeight: ", (legHeight) => {
                myChair.legHeight = legHeight;
                
                rl.close();
                writeChairReceipt();
            });
        });
    });
}

function writeChairReceipt() {
    console.log("Your chair will have the following configuration:");
    for (let property in myChair) {
        if (myChair.hasOwnProperty(property)){
            console.log(property + ": " + myChair[property]);
        }
    }
}

configureChair();

// Этот код использует модуль `readline` для взаимодействия с пользователем через консольное окно ввода-вывода
*/

//  код, чтобы значения для каждого свойства объекта `myChair` заполнялись сразу в переменную `userValue`, а затем передавались в объект `myChair`:


let myChair = {
    "cushionMaterial": "",
    "numberOfLegs": "",
    "legHeight": ""
};

// Предположим, что  есть массив с названиями свойств myChair
let propertyNames = Object.keys(myChair);

// Давайте наполним переменную userValue значениями
let userValues = ["Leather", 4, "Adjustable"]; // Здесь вы можете предварительно заполнить значениями

function configureChair() {
    for (let i = 0; i < propertyNames.length; i++) {
        myChair[propertyNames[i]] = userValues[i];
    }
}

function writeChairReceipt() {
    console.log("Your chair will have the following configuration:");

    for (let property in myChair) {
        if (myChair.hasOwnProperty(property)){
            console.log(property + ": " + myChair[property]);
        }
    }
}

configureChair();
writeChairReceipt();

/* В этом коде мы предполагаем, что у вас есть массив `userValues`, в котором вы можете предварительно определить значения для свойств `myChair`. Затем мы проходимся циклом по всем свойствам объекта `myChair` и присваиваем значения из массива `userValues` с помощью индексов.
cushionMaterial: Leather
numberOfLegs: 4
legHeight: Adjustable

 В представленном коде про стул метод `hasOwnProperty` также встроенный, предоставляемый прототипом `Object`. Этот метод используется для проверки существования собственных свойств объекта `myChair`.

Таким образом, выражение `myChair.hasOwnProperty(property)` проверяет, содержит ли объект `myChair` собственное свойство с именем `property`.

Благодаря использованию этого метода мы можем обеспечить корректную работу цикла `for...in`, исключив из перечисления свойства, унаследованные от прототипа, и учитывая только собственные свойства объекта `myChair`.
*/