// array element, the index numbers

/*
Массив состоит из элементов массива. 
Элементы массива состоят из имени массива и порядкового номера, заключенного в квадратные скобки. Отдельное значение myArray[0] в массиве называется элементом массива. 
*/

let myArray = [0, 1, 2, 6, 99];

console.log(myArray);

myArray = ["a", "b", "c", "d"];

console.log(myArray + " - this is array with letters.");

myArray = [
    true, 
    99, 
    "million", 
    false, 
    null, 
    NaN, 
    "apple".toUpperCase()
];

console.log(myArray);


/*
Массивы используют числа (называемые номерами индексов) для доступа к этим элементам. 
*/
/*
Следующий пример иллюстрирует, как массивы используют номера индексов для доступа к элементам:
*/

myArray[0] = "zero";
myArray[1] = 1;
myArray[2] = 4 + 9;

console.log(`myArray [${myArray}] contains an array element myArray[0] with value ${myArray[0]}.`);


/*
В этом примере элемент с индексным номером 0 имеет значение «zero». Элемент с индексом 3 имеет значение false. 

Как и любой переменной, массиву можно дать любое имя, соответствующее правилам именования переменных JavaScript. Назначая индексные номера в массивах, JavaScript дает вам возможность сделать так, чтобы одно имя переменной содержало практически неограниченный список значений.
*/

/*
Именование переменных – Имя для переменных

Имена переменных могут начинаться со следующих символов:

✓✓Прописная или строчная буква
✓✓Подчеркивание (_)
✓✓Знак доллара ($)

Хотя для начала переменной можно использовать знак подчеркивания или доллара, лучше всего начинать с буквы. Неожиданные символы часто могут привести к тому, что ваш код будет выглядеть запутанным и трудным для чтения, особенно если вы новичок в программировании на JavaScript.


После первого символа в имени переменной можно использовать любую букву или цифру, длина имени может быть любой. 

Переменные JavaScript не могут содержать пробелы, математические операторы или знаки препинания (кроме подчеркивания).

Всегда помните, что JavaScript чувствителен к регистру. Переменная с именем myname — это не та же переменная, что и Myname или myName.

Разделять слова в имени переменной :
PascalCase - для переменных - типов и классов
CONST_JS - для неизменяемых и известных до запуска приложения переменных
camelCase - для всех
under_score - почти никогда
*/

/*
Чтобы вы не слишком увлекались, на самом деле существует ограничение на количество элементов, которые вы можете иметь в массиве, хотя вы вряд ли когда-либо достигнете его. Предел — 4 294 967 295 элементов.*/

myArray[4294967295] = "maximum";
myArray[4394967296] = "?";

console.log(myArray);

/*
Помимо требований к именованию (которые одинаковы для любого типа переменных), у массивов есть еще несколько правил и специальных свойств, с которыми вам необходимо ознакомиться:

✓✓Массивы имеют нулевой индекс.
✓✓Массивы могут хранить данные любого типа.

*/

// Переведем наши переменные в массив

// Testing Principles
let principle_1 = "Testing shows the presence, not the absence of defects";
let principle_2 = "Exhaustive testing is impossible";
let principle_3 = "Early testing saves time and money"; 
let principle_4 = "Defects cluster together";
let principle_5 = "Tests wear out"; 
let principle_6 = "Testing is context dependent"; 
let principle_7 = "Absence-of-defects fallacy";

let testingPrinciples = [ 
    "Testing shows the presence, not the absence of defects",
    "Exhaustive testing is impossible",
    "Early testing saves time and money", 
    "Defects cluster together",
    "Tests wear out",
    "Testing is context dependent", 
    "Absence-of-defects fallacy"
];

console.log(testingPrinciples);
