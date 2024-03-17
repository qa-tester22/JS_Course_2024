/*
Homework 08. Course JavaScript.
Задача 1.

Создайте класс Person и его подкласс Teacher на примере функций Person и  Teacher
 
function Person(first, last, age, gender, interests) {
  this.name = {
    	first,
    	last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Все методы определены в прототипе конструктора. Например:

Person.prototype.greeting = function () {
  console.log("Hi! I'm " + this.name.first + ".");
};

Мы хотели создать класс Teacher,  который наследует всех членов от Person, но также включает в себя:
Новое свойство, subject - оно будет содержать предмет, который преподаёт учитель.
Обновлённый метод greeting(), который звучит немного более формально, чем стандартный метод greeting() — более подходит для учителя, обращающегося к некоторым ученикам в школе.
Определение функции-конструктора Teacher()
Первое, что нам нужно сделать, это создать конструктор Teacher() - добавьте ниже следующий код:
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

В качестве примечания мы могли бы просто сделать это:

function Teacher(first, last, age, gender, interests, subject) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.subject = subject;
}

Teacher.prototype.greeting = function () {
    
    let prefix = "";

  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr.";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Mrs.";
  } else {
    prefix = "Mx.";
  }


 console.log(   "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      ".");
}
Но это просто переопределяет свойства заново, а не наследует их от Person(), так что теряется смысл того, что мы пытаемся сделать. Он также занимает больше строк кода.

Создайте экземпляры классов, и убедитесь, что они умеют приветствовать.

 let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);

let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');



******************************************************************************************************************************
*/


/*
Задача 4.

Create User and Admin classes

    In this challenge we'll be using private properties to hide certain values and prevent them from being directly accessed. Private properties can only be accessed from inside the class declaration.

We denote a private variable or function with the hash (#) symbol.

    For example if we had a Person class with a social security number and a function to calculate their tax bracket, we wouldn't necessarily want that information publicly accessible. So we can make these fields private as in the example below:

*/
/*
class Person {
    #socialSecurityNumber;

    #calculateTaxBracket() {

    }
}
*/
/*
Your task

    Create a User  class and an  Admin  class. The Admin  class extends the User  class. The User  class has a private updatePassword()  function and a public  resetPassword()  function. The Admin  class has a public deleteUser()   function.


Parameters for the User class

    username: String
    (private) password: String

Parameters for the Admin class

    Parameters for the Admin class

    username: String
    (private) password: String

Properties of the Admin class

    The following properties must also be added to the Admin class. They are not parameters.

        isAdmin = true;

User class functions

    resetPassword(newPassword): Calls the private function updatePassword  with the new password. 

    updatePassword(newPassword): Sets the user's password to the newPassword. This is a private function.

Admin class functions

    deleteUser(userToDelete): Takes a string, userToDelete  and returns a string message: The user [userToDelete] has been deleted.

Result

    [testUser, testAdmin]: An array containing an instance of the User  class and an instance of the Admin  class

Constraints

    Password must be a private variable
    updatePassword must be a private function
    You must use the extends keyword to create a relationship between User and Admin

Example 1:
Input: 
*/
/*
const userData = {
    username: "emma",
    password: 'ZRYAK3GSS3wQujr'
};

const adminData = {
    username: "sarah",
    password: 'r5tHZE9DUP1SgTB'
}
*/
/*
Result:
*/
/*
[
    User { username: "emma" },
    Admin { username: "sarah", isAdmin: true}
]

// Answer

// JavaScript code​​​​​​‌​‌​‌‌​‌‌‌‌​‌​‌​‌‌‌‌​​‌‌‌ below
// Change these boolean values to control whether you see 
// the expected answer and/or hints.

const showExpectedResult = false;
const showHints = false;

const userData = {
    username: 'emma',
    password: 'ZRYAK3GSS3wQujr'
};

const adminData = {
    username: 'sarah',
    password: 'r5tHZE9DUP1SgTB'
}

const userToDelete = 'carter'


// Your code goes here

class User {

}

class Admin {

}


// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.

const result= [
    new User(userData.username, userData.password),
    new Admin(adminData.username, adminData.password)
]

✓ Test passed: User username data matches expected data.
✓ Test passed: Admin data matches expected data.
✓ Test passed: Password is private.
✓ Test passed: User cannot delete another user.
✓ Test passed: Admin can delete another user.
✓ Test passed: Reset password works as expected.

*/

/*
1. Задача. Решение.
*/

class Person {

    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting(){
        console.log("Hi! I'm " + this.name.first + ".")
    }
}

class Teacher extends Person {

    constructor(first, last, age, gender, interests, subject) {
        super(first, last, age, gender, interests)
        this.subject = subject;
    }

    greeting() {

        let prefix = "";

        if(
            this.gender === "male" ||
            this.gender === "Male" ||
            this.gender === "m" ||
            this.gender === "M"
        ) {
            prefix = "Mr.";
        } else if (
            this.gender === "female" ||
            this.gender === "Female" ||
            this.gender === "f" ||
            this.gender === "F"
        ) {
            prefix = "Mrs."
        } else {
            prefix = "Mx."
        }
            

        console.log("Hello. My name is  " +
        prefix +
        " " +
        this.name.last +
        ", and I teach " +
        this.subject + 
        ".")
    }
}

let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);

let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

person1.greeting();  // Hi! I'm Tammi.
teacher1.greeting();  // Hello. My name is  Mr. Griffiths, and I teach mathematics.

/*
4. Задача. Решение.
*/

class User {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password; 
    }

    #updatePassword(newPassword) {
            this.#password = newPassword;
    }

    resetPassword(newPassword) {
        this.#updatePassword(newPassword);
        return "Your password has been updated";
    }
}

class Admin extends User {

    constructor(username, password) {
        super(username, password);
        this.isAdmin = true;
    }

    deleteUser(userToDelete) {
            return `The user ${userToDelete} has been deleted`
        }

}

const user = new User("emma", 'ZRYAK3GSS3wQujr');

const admin = new Admin("sarah", 'r5tHZE9DUP1SgTB');

const userToDelete = 'carter';

console.log(user);  // User { username: 'emma' }
console.log(admin);  // Admin { username: 'sarah', isAdmin: true }

console.log(user.username);  // emma
console.log(user.password);  // undefined
// console.log(user.#password);  // SyntaxError: Private field '#password' must be declared in an enclosing class

console.log(admin.username);  // sarah
console.log(admin.password);  // undefined
// console.log(admin.#password);  // SyntaxError: Private field '#password' must be declared in an enclosing class

// console.log(user.deleteUser(userToDelete));  // TypeError: user.deleteUser is not a function
console.log(admin.deleteUser(userToDelete));  // The user carter has been deleted

console.log(user.resetPassword("newpassword"));  // Your password has been updated
console.log(admin.resetPassword("newpassword"));  // Your password has been updated


/*

Чтобы проверить тесты, вам нужно написать соответствующий код для каждого из них. Вот как это можно сделать:
*/
// 1. Проверка соответствия данных пользователя ожидаемым данным:



const userData = { username: "emma", password: 'ZRYAK3GSS3wQujr' };
const adminData = { username: "sarah", password: 'r5tHZE9DUP1SgTB' };



const result = [
    new User(userData.username, userData.password),
    new Admin(adminData.username, adminData.password)
];

// Проверка данных пользователя
console.log(result[0].username === userData.username); // Должно быть true
// console.log(result[0].#password === undefined); // Должно быть true или ошибка
console.log(result[1].username === adminData.username); // Должно быть true
// console.log(result[1].#password === undefined); // Должно быть true или ошибка
console.log(result[1].isAdmin === true); // Должно быть true


// 2. Проверка приватности пароля:

// console.log(result[0].#password === undefined); // Должно быть true или ошибка
// console.log(result[1].#password === undefined); // Должно быть true или ошибка


// 3. Проверка невозможности пользователя удалить другого пользователя:

// console.log(result[0].deleteUser("carter")); // Должно вернуть undefined или ошибку


// 4. Проверка возможности администратора удалить другого пользователя:

console.log(result[1].deleteUser("carter")); // Должно вернуть "The user carter has been deleted"


// 5. Проверка функции сброса пароля:

console.log(result[0].resetPassword("newPassword")); // Должно вернуть "Your password has been updated"
console.log(result[1].resetPassword("newPassword")); // Должно вернуть "Your password has been updated"

/*
Это лишь примеры тестов, которые вы можете написать, чтобы проверить правильность вашего кода. В реальном проекте вы, вероятно, захотите написать более полные и комплексные тесты, чтобы удостовериться, что ваше приложение работает как ожидается.
*/
/*
 We'll create the user object using JavaScript class syntax. 
 The user class constructor takes two parameters, username and password. 
 Since password is a private variable, we'll prepend the property name with a hash symbol. 
 Additionally, we'll declare password as a private variable above the constructor. 
  Now we can create the resetPassword function. 
  This takes one parameter, newPassword. 
  We don't want the user to be able to directly alter the password, so we'll create another private function that will do the updating. 
  We'll call our private function updatePassword. 
  It will take the newPassword parameter as well. 
  To make this function private, we'll prepend a hash symbol to the function name like we did with our password variable. 
  
  Back inside our resetPassword function, we can call our private updatePassword function and pass a new password. 
  Then we'll return the string, "Your password has been updated". 
  
  Now we can create the admin class. 
  Since admin is a special type of user, we'll inherit from the user class with the extends keyword. 
  Admin also takes a username and password. 
  We need to pass these values up the prototype chain to the user class. 
  To do this, we'll call the super function, and pass username and password through. 
  We'll also add a variable to the admin constructor called isAdmin. 
  We'll set this property to true. 
  
  Lastly, we need to create our deleteUser function. 
  It takes one parameter, a string containing the username to delete. 
  This function just returns a template literal stating that the user we passed into the function has been deleted. 
   When we run our code, we can see all of our tests are passing. 


 Мы создадим объект пользователя, используя синтаксис класса JavaScript. 
 Конструктор класса пользователя принимает два параметра: имя пользователя и пароль. 
 Поскольку пароль является частной переменной, мы добавим к имени свойства символ решетки. 
 Кроме того, мы объявим пароль как закрытую переменную над конструктором. 
 Теперь мы можем создать функцию сброса пароля. 
 Она принимает один параметр, newPassword. 
 Мы не хотим, чтобы пользователь мог напрямую изменить пароль, поэтому создадим еще одну приватную функцию, которая будет выполнять обновление. 
 Мы назовем нашу частную функцию updatePassword. 
 Она также примет параметр newPassword. 
 Чтобы сделать эту функцию частной, мы добавим к имени функции символ решетки, как мы это сделали с нашей переменной пароля. 
 
 Вернувшись в нашу функцию resetPassword, мы можем вызвать нашу частную функцию updatePassword и передать новый пароль. 
 Затем мы вернем строку: Ваш пароль обновлен. 
 
 Теперь мы можем создать класс администратора. 
 Поскольку администратор — это особый тип пользователя, мы унаследуем его от класса пользователя с помощью ключевого слова «extends». 
 Администратор также принимает имя пользователя и пароль. 
 Нам нужно передать эти значения по цепочке прототипов пользовательскому классу. 
 Для этого мы вызовем суперфункцию и передадим ей имя пользователя и пароль. 
 Мы также добавим переменную в конструктор администратора под названием isAdmin. 
 Мы установим для этого свойства значение true. 
 
 Наконец, нам нужно создать функцию deleteUser. 
 Она принимает один параметр — строку, содержащую имя пользователя, которое нужно удалить. 
 Эта функция просто возвращает литерал шаблона, сообщающий, что пользователь, которого мы передали в функцию, был удален. 
  Когда мы запускаем наш код, мы видим, что все наши тесты проходят успешно.
*/