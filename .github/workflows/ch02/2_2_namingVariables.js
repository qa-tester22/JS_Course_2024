// Имена переменных могут начинаться со следующих символов: 
// Прописная или строчная буква
// Подчеркивание (_)
//Знак доллара ($)
// лучше всего начинать с буквы. 
// После первого символа в имени переменной можно использовать любую букву или цифру, длина имени может быть любой. 

// Переменные JavaScript не могут содержать пробелы, математические операторы или знаки препинания (кроме подчеркивания).


// Всегда помните, что JavaScript чувствителен к регистру. Переменная с именем myname — это не та же переменная, что и Myname или myName.

// Имена переменных на самом деле являются идентификаторами; Лучшее, что вы можете сделать, — это назвать переменную как-то точно и актуально. Такое соглашение об именах иногда может привести к очень длинным именам, но, как правило, более длинное имя, которое точно представляет переменную, более полезно, чем более короткое и расплывчатое имя.

let a = "Митрофан";
let girlName = "Дуняша";

// Рекомендации по созданию хороших имен переменных JS

// Хотя JavaScript дает вам большую свободу в именах переменных, лучше всего определить для себя некоторые основные правила, прежде чем приступить к программированию. Например, имена переменных начинаются со строчной или прописной буквы? 
// Используете ли вы подчеркивание между несколькими словами в имени переменной или используете верблюжий регистр camelCase? 
// По мере того как ваш код становится более сложным, важность правильного именования становится очевидной.

// К счастью, вы не одиноки, когда выбираете свой стиль. Существует несколько рекомендаций, с которыми согласны многие профессиональные программисты JavaScript и которые используют при именовании переменных:

// ✓✓ Не используйте слишком короткие имена! Простые однобуквенные имена или бессмысленные имена не являются хорошим вариантом для именования переменных.

// ✓✓ Используйте имена, состоящие из нескольких слов, чтобы они были как можно более точными.

// ✓✓ В именах, состоящих из нескольких слов, всегда помещайте прилагательные слева, как в let redLight;

let redLight = "red";

// Выберите стиль для нескольких названий слов и будьте последовательны. 

// Есть два способа соединения слов для создания имени: CamelCase и Under_score. JavaScript — гибкий язык, и вы можете использовать любой метод, хотя обычно чаще используется CamelCase.
let variableForUs;
let variable_for_us;

variableForUs = "This is camalCase";
variable_for_us = "This is Under_score";

console.log(variableForUs + " или " + variable_for_us);


// Некоторые слова нельзя использовать в качестве имен переменных. Существует список зарезервированных слов, которые нельзя использовать в качестве переменных, функций, методов, меток циклов или имен объектов JavaScript.

let Math = 7;
console.log(Math);
console.log(Math.min(Math, 7 ,10)); // TypeError: Math.min is not a function - ошибка
let twentyTwo = 22
console.log(Math.min(twentyTwo, 45, 33));


let Mith = 7;
console.log(Mith);
console.log(Math.min(Mith, 7 ,10));
console.log(mith); // mith is not defined - ошибка