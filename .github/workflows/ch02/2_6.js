//Строковый тип данных String

// Строки могут состоять из любых символов:

// ✓✓буква
let letter = "letter";
console.log(letter);

// ✓✓Число
let digit = "777"
console.log(digit);

// ✓✓Пунктуация (например, запятые и точки)
let strange = ":;%(£$_:-))";
console.log(strange);

// ✓✓Специальные символы, которые можно записать с помощью обратной косой черты, за которой следует символ
let mySymbol = "\"";
console.log(mySymbol);
// некоторые спецсимволы:

//  \'	single quote
	console.log('Это строка с одинарной кавычкой: \'одинарные кавычки\'');


// \"	double quote
 console.log("Это строка с двойными кавычками: \"двойные кавычки\"");

// \\	backslash
console.log("Это строка с обратным слешем: \\");


// \n	new line
console.log("Это строка с символом новой строки: первая строка\nвторая строка");


// \r	carriage return  возврат каретки/ возврат выполнения 
console.log("Это строка с возвратом каретки: текст до возврата\rтекст после возврата");


// \t	tab
console.log("Это строка с символом табуляции:\tтекст после табуляции");
	
// \b	backspace

console.log("Это строка с символом backspace: hello\bworld");


// При выводе этой строки в консоль результат будет "helloworld". Символ backspace будет удалять предыдущий символ, в данном случае, символ 'o', и результатом будет строка "helloworld".
// не влияет на отображение в консоли. Он в основном используется для работы с текстовыми строками в терминальных средах или при обработке текста в других контекстах, где его поведение может быть определено специальным образом.

// \f	form feed


console.log("\f");
console.log("Это строка с символом подачи формы:\fЭто следующая строка после символа подачи формы.");

//При выводе этой строки в консоль результат будет визуально разделен на две строки, с текстом "Это строка с символом подачи формы:" и "Это следующая строка после символа подачи формы." на отдельных строках. Символ подачи формы приведет к тому, что вторая часть строки будет выведена на новой странице или экране (в зависимости от контекста вывода).

// Вы создаете строковую переменную, заключая ее в одинарные или двойные кавычки, например:
let ourString = 'This is an our string.'

//**** */ let peterString = 'This's Peter's string';

// На самом деле не имеет значения, используете ли вы одинарные или двойные кавычки, главное, чтобы начальные и конечные кавычки, окружающие строку, совпадали.

//**** */ let diferentQuotes = "Нельзя использовать разные кавычки для объявления одной строки';

// Если вы заключаете строку в одинарные кавычки, вы можете без проблем использовать двойные кавычки внутри этой строки. То же самое происходит, если вы заключаете строки в двойные кавычки; вы можете без проблем использовать одинарные кавычки внутри строки.

let multiQuotes = "В тексте могут быть 'другие кавычки'."

// Однако если вы создаете строку и окружаете ее одним типом кавычек, вы не сможете использовать этот тип кавычек внутри строки, иначе синтаксический анализатор JavaScript подумает, что вы хотите завершить строку, и выдаст ошибку.
// Добавление обратной косой черты перед кавычкой называется экранированием кавычек.

/* 
String functions

JavaScript includes many helpful functions for working with and converting strings.


Here’s a list of the most frequently used built-in string functions:

✓✓charAt() produces the character at a specified position. Note that the counting of characters starts with 0:


var watzThisString = 'JavaScript is Fun!'; console.log (watzThisString.charAt(3)); // returns a

✓✓concat() combines one or more strings and returns the incorporated string:


var watzThisString = 'JavaScript is Fun!'; console.log (watzThisString.concat(' We love
JavaScript!'));
// returns JavaScript is Fun! We love JavaScript!

✓✓indexOf() searches and returns the position of the first occurrence of the searched character or substring within the string:


var watzThisString = 'JavaScript is Fun!'; console.log (watzThisString.indexOf('Fun'); // returns 14

✓✓split() splits strings into an array of substrings:


var watzThisString = 'JavaScript is Fun!'; console.log (watzThisString.split('F')); // returns ["JavaScript is ", "un!"]

✓✓substr() extracts a portion of a string beginning at "start" through a specified length:


var watzThisString = 'JavaScript is Fun!'; console.log (watzThisString.substr(2,5)); // returns vaScr

✓✓substring() extracts the characters within a string between two specified positions:


var watzThisString = 'JavaScript is Fun!'; console.log (watzThisString.substring(2,5)); // returns Vas
 
52	Part I: Getting Started with JavaScript


✓✓toLowerCase() produces the string with all of its characters converted to lowercase:


var watzThisString = 'JavaScript is Fun!'; console.log (watzThisString.toLowerCase()); // returns javascript is fun!

✓✓toUpperCase() produces the string with all of its characters converted to uppercase:


var watzThisString = 'JavaScript is Fun!'; console.log (watzThisString.toUpperCase()); // returns JAVASCRIPT IS FUN!


*/