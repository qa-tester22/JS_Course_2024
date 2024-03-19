/*
Задача 40. Работник и его возраст.
*/

class Employee {
    constructor(name, age, position, salary) {
        this._name = name;
        this._age = age;
        this._position = position;
        this._salary = salary;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this._age = newAge;
        } else {
            console.error('Invalid age input. Age must be a positive number.');
        }
    }

    get position() {
        return this._position;
    }

    set position(newPosition) {
        this._position = newPosition;
    }

    get salary() {
        return this._salary;
    }

    set salary(newSalary) {
        if (typeof newSalary === 'number' && newSalary >= 0) {
            this._salary = newSalary;
        } else {
            console.error('Invalid salary input. Salary must be a non-negative number.');
        }
    }
}
/*
Вопрос:
Какой метод класса Employee используется для получения значения возраста работника?

Варианты ответов:
1) getAge()
2) get age()
3) age()
4) get age


Выберите один ответ.
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
:one:   :two:   :three:   :four:

*************************************************************************************************

Правильный ответ:
3) age()

Правильный ответ - "age()", а не "get age()", потому что в JavaScript синтаксис геттеров и сеттеров не требует использования ключевых слов "get" и "set" при их вызове. Вместо этого, геттеры и сеттеры используются как обычные свойства объекта. Таким образом, когда мы хотим получить значение геттера, мы обращаемся к нему, как к свойству объекта, без использования ключевого слова "get".

Пример:

const emp = new Employee("John Doe", 30, "Software Engineer", 50000);

// Вызываем геттер age без использования ключевого слова "get"
console.log(emp.age); // 30

// Вызываем сеттер age без использования ключевого слова "set"
emp.age = 31;


Поэтому правильный ответ на вопрос о том, какой метод класса Employee используется для получения значения возраста работника, это "age()".

*/
/*
Задача:

Создайте класс `Employee`, представляющий работника. У работника должны быть следующие свойства:

1. `name` - строка, представляющая имя работника.
2. `age` - число, представляющее возраст работника.
3. `position` - строка, представляющая должность работника.
4. `salary` - число, представляющее зарплату работника.

Требования:

1. Создайте конструктор класса `Employee`, который принимает аргументы `name`, `age`, `position`, `salary` и инициализирует соответствующие свойства объекта.
2. Создайте геттеры и сеттеры для свойств `age`, `position` и `salary`.
3. Геттеры должны возвращать значения свойств, а сеттеры должны устанавливать новые значения свойств.

Пример использования:

*/
const emp = new Employee("John Doe", 30, "Software Engineer", 50000);

console.log(emp.age); // 30
emp.age = 31;
console.log(emp.age); // 31

console.log(emp.position); // "Software Engineer"
emp.position = "Senior Software Engineer";
console.log(emp.position); // "Senior Software Engineer"

console.log(emp.salary); // 50000
emp.salary = 60000;
console.log(emp.salary); // 60000
