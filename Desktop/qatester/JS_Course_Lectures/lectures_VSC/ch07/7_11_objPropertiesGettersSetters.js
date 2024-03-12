// "use strict"
/*
Свойства - геттеры и сеттеры

Есть два типа свойств объекта.

Первый тип это свойства-данные (data properties). Мы уже знаем, как работать с ними. Все свойства, которые мы использовали до текущего момента, были свойствами-данными.

Второй тип свойств -  Это свойства-аксессоры (accessor properties). 
По своей сути это функции, которые используются для присвоения и получения значения, но во внешнем коде они выглядят как обычные свойства объекта.

Геттеры и сеттеры****************************************

Свойства-аксессоры представлены методами: 
«геттер» – для чтения и 
«сеттер» – для записи. При литеральном объявлении объекта они обозначаются get и set:
*/
const obj = {
    get propName() {
        // геттер, срабатывает при чтении obj.propName
    },

    set propName(value) {
      // сеттер, срабатывает при записи obj.propName = value    
    }
};

/*
Геттер срабатывает, когда obj.propName читается, сеттер – когда значение присваивается.

Например, у нас есть объект user со свойствами name и surname:
*/

const user1 = {
    name: "John",
    surname: "Doe",

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(user1.fullName);   // John Doe


/*
добавим свойство объекта fullName для полного имени, которое в нашем случае "John Doe". 
мы не хотим дублировать уже имеющуюся информацию, так что реализуем его при помощи аксессора: get

Снаружи свойство-аксессор выглядит как обычное свойство. В этом и заключается смысл свойств-аксессоров. 
Мы не вызываем user.fullName как функцию, а читаем как обычное свойство: геттер выполнит всю работу за кулисами.

На данный момент у fullName есть только геттер. Если мы попытаемся назначить user.fullName=, произойдёт ошибка:
*/

user1.fullName = "Bob Miller"; // "use strict" - TypeError: Cannot set property fullName of #<Object> which has only a getter

console.log(user1.fullName);  // John Doe - не поменял
/*

user.fullName = "Тест"; // Ошибка (у свойства есть только геттер)
Давайте исправим это, добавив сеттер для user.fullName:
*/

const user2 = {
    name: "Dunya",
    surname: "Lapteva",

    get fullName() {
        return `${this.name} ${this.surname}`
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

console.log(user2.fullName);  // Dunya Lapteva

user2.fullName = "Prohor Mitrofanov";
// set fullName запустится с данным значением
console.log(user2.name);  // Prohor
console.log(user2.surname);  // Mitrofanov
/*

В итоге мы получили «виртуальное» свойство fullName. Его можно прочитать и изменить.


Дескрипторы свойств доступа*****************************

Дескрипторы свойств-аксессоров отличаются от «обычных» свойств-данных.

Свойства-аксессоры не имеют 
- value и 
- writable, 
но взамен предлагают функции get и set.

То есть, дескриптор аксессора может иметь:

get – функция без аргументов, которая сработает при чтении свойства,

set – функция, принимающая один аргумент, вызываемая при присвоении свойства,

enumerable – то же самое, что и для свойств-данных,

configurable – то же самое, что и для свойств-данных.

Например, для создания аксессора fullName при помощи defineProperty мы можем передать дескриптор с использованием get и set:
*/

const user3 = {
    name: "Mary",
    surname: "Green"
};

Object.defineProperty(user3, "fullName", {
    get() {
        return `${this.name} ${this.surname}`; 
    },
    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(user3.fullName);  // Mary Green

for(let key in user3) {
    console.log(key);
} 

/*
вывел:
name
surname
 свойство fullName не является перечисляемым по умолчанию. При использовании метода Object.defineProperty() для добавления свойства к объекту по умолчанию оно становится неперечисляемым, если параметр enumerable не указан или имеет значение false. Поэтому оно не появляется при переборе свойств объекта в цикле for...in.

Чтобы сделать свойство fullName перечисляемым, нужно установить параметр enumerable в true при его определении:
*/

const user4 = {
    name: "Tom",
    surname: "White"
};

Object.defineProperty(user4, "fullName", {
    enumerable: true,
    configurable: true,
    get() {
        return `${this.name} ${this.surname}`;
    },
    
    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(Object.keys(user4));  // [ 'name', 'surname', 'fullName' ]

/*
Ещё раз заметим, что свойство объекта может быть либо 

свойством-аксессором (с методами get/set), либо 

свойством-данным (со значением value).

При попытке указать и get, и value в одном дескрипторе будет ошибка:
*/

/*
Object.defineProperty(user4, "job", {
    get() {
        return this.job;
    },

    value: "QA"
});
*/




/*
TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>


Умные геттеры/сеттеры************************************

Геттеры/сеттеры можно использовать как обёртки над «реальными» значениями свойств, чтобы получить больше контроля над операциями с ними.

Например, если мы хотим запретить устанавливать короткое имя для user, мы можем использовать сеттер name для проверки, а само значение хранить в отдельном свойстве _name:
*/

const user5 = {
    get name() {
        return this._name
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Имя слишком короткое, должно быть более 4 символов");
            return;
        }
        this._name = value;
    }
};

user5.name = "Аня";  // Имя слишком короткое, должно быть более 4 символов

console.log(user5.name = "Анюта");  // Анюта

console.log(user5._name); // Анюта

console.log(Object.keys(user5));  // [ 'name', '_name' ]
/*
Таким образом, само имя хранится в _name, доступ к которому производится через геттер и сеттер.

Технически, внешний код всё ещё может получить доступ к имени напрямую с помощью user._name, но существует широко известное соглашение о том, что свойства, которые начинаются с символа "_", являются внутренними, и к ним не следует обращаться из-за пределов объекта.

Использование для совместимости**************************

У аксессоров есть интересная область применения – они позволяют в любой момент взять «обычное» свойство и изменить его поведение, поменяв на геттер и сеттер.

Например, представим, что мы начали реализовывать объект user, используя свойства-данные имя name и возраст age:
*/

function User(name, age) {
    this.name = name;
    this.age = age;
};

const fedor = new User("Fedor", 25);

console.log(fedor.age);  // 25

/*

…Но рано или поздно всё может измениться. Взамен возраста age мы можем решить хранить дату рождения birthday, потому что так более точно и удобно:
*/

function UserDob(name, birthday) {
    this.name = name;
    this.birthday = birthday;
}

const fekla = new UserDob("Fekla", new Date(1992, 6, 1));

/*
Что нам делать со старым кодом, который использует свойство age?

Мы можем попытаться найти все такие места и изменить их, но это отнимает время и может быть невыполнимо, если код используется другими людьми. И кроме того, age – это отличное свойство для user, верно?

Давайте его сохраним.

Добавление геттера для age решит проблему:
*/

function UserDob(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

const tom = new UserDob("Tom", new Date(1992, 7, 2));

console.log(tom.birthday);  // 1992-08-01T23:00:00.000Z
console.log(tom.age);  // 32
/*
 // доступен как день рождения
 // ...так и возраст
Теперь старый код тоже работает, и у нас есть отличное дополнительное свойство!
*/