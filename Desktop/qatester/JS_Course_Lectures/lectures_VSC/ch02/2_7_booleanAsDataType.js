/*
Логический тип данных

Логические переменные хранят одно из двух возможных значений: true или false.


Термин «булевый» термин назван в честь Джорджа Буля (1815–1864), создавшего алгебраическую систему логики. Поскольку оно названо в честь человека, его обычно пишут с заглавной буквы.

Логические переменные часто используются для хранения результатов сравнений. Вы можете узнать логическое значение сравнения или преобразовать любое значение в JavaScript в логическое значение с помощью функции Boolean(). Например:



var isItGreater = Boolean (3 > 20);
alert (isItGreater); // returns false

var areTheySame = Boolean ("tiger" === "Tiger"); alert (areTheySame); // returns false


Результат преобразования значения в JavaScript в логическое значение с помощью
Функция Boolean() зависит от значения:

✓✓В JavaScript следующие значения всегда возвращают логическое ложное значение:

The result of converting a value in JavaScript into a Boolean value using the
Boolean() function depends on the value:

✓✓In JavaScript, the following values always evaluate to a Boolean false value:


•	NaN

•	undefined

•	0 (numeric value zero)

•	-0

•	"" (empty string)

•	false

✓✓Anything that is not one of the preceding values evaluates to a Boolean true. For example:


•	74

•	"Eva"

•	"10"

•	"NaN"


The number character "0" is not the same as the numeric value 0 (zero). While 0 will always result in a Boolean value of false, the string "0" will always result in a Boolean true.


✓✓Все, что не является ни одним из предыдущих значений, оценивается как логическое значение true. Например:
•	74

•	"Eva"

•	"10"

•	"NaN"

Логические значения в основном используются с условными выражениями. 

Следующая программа создает логическую переменную, а затем проверяет ее значение с помощью оператора if/then (о котором вы можете узнать в главе 5).


Boolean values are primarily used with conditional expressions. The

­following program creates a Boolean variable and then test its value using an if/then statement (which you can find out about in Chapter 5).


var b = true;
if (b == true) {
alert ("It is true!");
} else {
alert ("It is false.");

}

Boolean values are written without quotes around them, like this:


var myVar = true

On the other hand, var myVar = “true” creates a string variable.
*/