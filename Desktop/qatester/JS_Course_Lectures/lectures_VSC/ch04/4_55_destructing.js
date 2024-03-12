/*
Деструктуризация Destructing Arrays

Синтаксис деструктурирующего присваивания в выражениях JavaScript позволяет извлекать данные из массивов или объектов при помощи синтаксиса, подобного объявлению массива или литералов в объекте.

Для более сложного присваивания в JavaScript есть синтаксис деструктуризации - это выражение, которое позволяет извлекать данные из массивов или объектов, используя синтаксис, который зеркалирует конструкторы массивов и литералы объектов.
*/
let foo = ["one", "two", "three"];

// без деструктуризации
// let one = foo[0];
// let two = foo[1];
// let three = foo[2];

// с деструктуризацией
let [one, two, three] = foo;

let a = 2;
let b = 7;

let arr = [a, b]   // [ 2, 7 ]
console.log(arr);  // [ 2, 7 ]

[a, b] = [b, a]; //  [ 2, 7 ] = [ 7, 2 ]  - деструктуризация
console.log(a);  //  7

let [x, y, ...rest] = [1, 2, 3, 4, 5];
console.log(x);  // 1
console.log(y);  //  2
console.log(rest);  // [3, 4, 5]

// аналогично с объектами

({one, two} = {one: 1, two: 2});
console.log(one);  // 1
console.log(two);  // 2

({one, two, ...rest} = {one: 1, two: 2, three: 3, four: 4});
console.log(one);  // 1
console.log(two);  // 2
console.log(rest);  // {three: 3, four: 4}

/*
Описание
Выражения объявления объектов или массивов предоставляют простой способ создания пакета однородных данных. При создании такого пакета вы получаете возможность использовать его любым доступным образом. Также вы можете возвращать его в функциях.

Одной из ключевых возможностей использования деструктурирующего присваивания является чтение структуры данных одним оператором, хотя помимо этого вы можете найти множество других применений в приведённых ниже примерах.

Данная возможность подобна таковой, присутствующей в языках Perl и Python.
*/


function calculate (firstOperand, secondOperand) {

    const divide = firstOperand / secondOperand;
    const add = firstOperand + secondOperand;
    const subtract = firstOperand - secondOperand;
    const multiply = firstOperand * secondOperand;
    // const divide = firstOperand / secondOperand;

    return [add, subtract, multiply, divide];
};

// console.log(add, subtract, multiply, divide);

const [add, subtract, multiply, divide] = calculate(2, 4);

console.log(`Sum = ${add}, 
Difference = ${subtract}, 
Product = ${multiply}, 
Quotient = ${divide}`);

[x, y, z] = [a, 99, b];  // - объявленные переменные включаем в массив, и не имеет значение их порядок

console.log([x, y, z]);   // [ 7, 99, 2 ] 

[three, one, two] = foo;   // - присваиваем значение массива, и имеет значение порядок элементов.

console.log([three, one, two]);   // [ 'one', 'two', 'three' ] 

/*
Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в несколько переменных, так как иногда они более удобны.

Деструктуризация также прекрасно работает со сложными функциями, которые имеют много параметров, значений по умолчанию и так далее.
*/

let [firstName, lastName] = "Дуня Минтрофанова".split(' ');
console.log(firstName);

console.log(lastName);

/*
«Деструктуризация» не означает «разрушение».
«Деструктурирующее присваивание» не уничтожает массив. Оно вообще ничего не делает с правой частью присваивания, его задача – только скопировать нужные значения в переменные.
Без деструктурирующего присваивания, для обмена значений требуется дополнительная временная переменная 

Это просто короткий вариант записи:
*/

// let [firstName, lastName] = arr;
// let firstName = arr[0];
// let lastName = arr[1];

// Нежелательные элементы массива также могут быть отброшены с помощью дополнительной запятой:

let [operandOne, operandTwo, , plus] = [3, 7, 15, 3 + 7, 7 + 15, 3 + 15];

console.log(operandOne + " + " + operandTwo + " = " + plus);  // 3 + 7 = 10

/*
Обычно, если массив длиннее, чем список слева, «лишние» элементы опускаются.

Например, здесь берутся только первые элементы, а остальные просто игнорируются.
*/
/*
Если мы хотим не просто получить первые значения, но и собрать все остальные, то мы можем добавить ещё один параметр, который получает остальные значения, используя оператор «остаточные параметры» – троеточие ("..."):
*/
let [item1, item2, ...rest] = [3, 7, 15, 3 + 7, 7 + 15, 3 + 15];  // Переменная rest является массивом из оставшихся элементов.

console.log(rest);  // [ 15, 10, 22, 18 ]

/*
// Значения по умолчанию
Если в массиве меньше значений, чем в присваивании, то ошибки не будет. Отсутствующие значения считаются неопределёнными:
*/

let [testTypeOne, testTypeTwo, testTypeThree, testTypeFour] = [];

console.log(`${testTypeOne}, ${testTypeTwo}, ${testTypeThree}, ${testTypeFour}.`)  // undefined, undefined, undefined, undefined.
/*
Если мы хотим, чтобы значение «по умолчанию» заменило отсутствующее, мы можем указать его с помощью =
*/
let [testTypeFirst = 'functional', testTypeSecond = 'non-functional', testTypeThird, testTypeFourth] = [];

console.log(`${testTypeFirst}, ${testTypeSecond}, ${testTypeThird}, ${testTypeFourth}.`)

/*
Значения по умолчанию могут быть гораздо более сложными выражениями или даже функциями. Они выполняются, только если значения отсутствуют.
*/

let [testType1 = 'functional', testType2 = 'non-functional', testType3 = console.log("I do't know."), testType4] = [];

console.log(`${testType1}, ${testType2}, ${testType3}, ${testType4}.`);

testType3 = 'alpha testing';

console.log(`${testType1}, ${testType2}, ${testType3}, ${testType4}.`);

[testType1 = 'functional', testType2 = 'non-functional', testType3 = console.log("I do't know."), testType4] = [,, , "beta testing"];

console.log(`${testType1}, ${testType2}, ${testType3}, ${testType4}.`);  // I do't know.
// functional, non-functional, undefined, beta testing.

/*
Возврат нескольких значений

Благодаря деструктурирующему присваиванию, функции могут возвращать несколько значений. Хотя всегда можно было возвращать массивы в функциях, оно предоставляет гибкость:
*/

function f() {
  return [1, 2];
}
/*
Как вы видите, возвращаемые результаты имеют вид массива, значения которого заключены в квадратные скобки. Вы можете возвращать неограниченное количество результатов таким образом. В следующем примере, f() возвращает [1, 2] как результат:
*/

let p, q;
[p, q] = f();
console.log("P is " + p + " Q is " + q);

/*
Оператор [p, q] = f() присваивает результаты функции переменным в квадратных скобках: p будет присвоено 1, q будет присвоено 2.

Вы также можете использовать результат функции в виде массива:
*/
let r = f();
console.log("R is " + r);
/*
В данном случае r будет массивом с элементами 1 и 2.

Игнорирование некоторых значений
Вы также можете проигнорировать не нужные значения:
*/

function f() {
  return [1, 2, 3];
}

let [a, , b] = f();
console.log("A is " + a + " B is " + b);
/*
После выполнения кода, a будет 1, b будет 3. Значение 2 игнорируется. Таким же образом вы можете игнорировать любые (или все) значения. Например:
*/

[, ,] = f();

/*
Получение значений из результата регулярного выражения
Когда метод exec() регулярного выражения находит совпадение, он возвращает массив, содержащий первый совпадающий фрагмент строки и далее группы, определённые в регулярном выражении. Деструктурирующее присваивание упрощает получение данных из этих групп, игнорируя первый фрагмент:
*/

let url = "https://developer.mozilla.org/en-US/Web/JavaScript";

let parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // выведет "https"
/*
Разбор объектов
Простой пример
*/ 
let s = { t: 42, w: true };
let { t, w } = s;

console.log(t); // 42
console.log(w); // true

// Объявление новых переменных
let { t: foo, w: bar } = s;

console.log(foo); // 42
console.log(bar); // true

/*
Загрузка модулей
Деструктурирующее присваивание помогает загружать специфичные наборы модулей:
*/

const { Loader, main } = require("toolkit/loader");

/*
Вложенный объект и разбор массива
*/
let metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/ru/docs/Tools/Scratchpad",
};

let {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"

/*
Деструктурирование во время обхода
*/

let people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (let {
  name: n,
  family: { father: f },
} of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

/*
Получение полей объекта-параметра функции
*/

function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  console.log(displayName + " is " + name);
}

let user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
/*
В приведённом примере извлекаются поля id, displayName и firstName из объекта пользователь.

Деструктурирование вычисляемых имён свойств

Вычисляемые имена свойств, например, литералы объектов, могут использоваться при деструктурирующем присваивании:
*/

let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"