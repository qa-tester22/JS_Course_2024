/*
В предыдущих главах этой книги мы обычно говорим и демонстрируем линейный код JavaScript. Однако чаще всего наступает момент

(на самом деле, много раз) в программе, где вам нужно сделать выбор или где вам нужно изменить прямую логику программы, чтобы повторять операторы несколько раз с разными значениями. В этой главе мы обсуждаем операторы цикла и ветвления.


Не забудьте посетить веб-сайт, чтобы ознакомиться с онлайн-упражнениями, относящимися к этой главе!



Разветвление 
Операторы цикла и ветвления называются управляющими операторами, поскольку они управляют порядком выполнения программ JavaScript. Вы можете использовать операторы ветвления для создания разных путей выполнения кода JavaScript в зависимости от условной логики. Циклы — это самый простой способ сгруппировать операторы JavaScript в программе.
*/

/*

if . . . else

The if and else statements work together to evaluate a logical expression and run different statements based on the result. if statements can be, and often are, used by themselves. else statements must always be used in con-junction with an if statement.
Операторы if и else работают вместе, чтобы оценить логическое выражение и выполнить различные операторы в зависимости от результата. если утверждения могут использоваться и часто используются сами по себе. Операторы else всегда должны использоваться вместе с оператором if.

The basic syntax for an if statement is


if (condition) {
...
}

The condition here is any expression that evaluates to a Boolean (true or false) value. If the result of the expression is true, the statements between the brackets will be executed. If it’s false, they will just be skipped over.

The else statement comes in when you want to do something if the condi-tion evaluates to false. For example:



Условием здесь является любое выражение, которое принимает логическое значение (истина или ложь). Если результат выражения истинен, операторы в скобках будут выполнены. Если это ложь, они будут просто пропущены.

Оператор else используется, когда вы хотите что-то сделать, если условие оказывается ложным. Например:
 


var age = 19;
if (age < 21){
document.write ("You are under the legal drinking age in the U.S.");
} else {
document.write ("What'll it be?");
}

Many other programming languages have a combination keyword called the elseif, which can be used multiple times in an if ... else statement until a true value occurs. JavaScript doesn’t have an elseif keyword.

However, you can get the same functionality as an elseif keyword by using if and else together with a space between them. For example:


if (time < 12){
document.write ("Good Morning!");
} else if (time < 17){ document.write ("Good Afternoon!"); } else if (time < 20){ document.write ("Good Evening!"); } else {
document.write ("Good Night!");
}


*/

/* 


Понимание, если . . . еще стенография
 

Вам следует знать несколько сокращений для использования операторов if ... else. Первый — использовать тернарный оператор вместо if...else. Это несколько сложнее читать, чем стандарт if... else:

var whatToSay = (time < 12 ? "Good Morning" : "Hello");

let isAble = age < 21 ? «Выбирай безалкогольные напитки!» : «Можешь выбирать любые напитки»
 
В этом случае значение WhatToSay устанавливается на «Доброе утро», если время меньше 12, и устанавливается на «Привет», если время не меньше 12.

В другом сокращенном методе записи операторов if ... else используется логический оператор AND (&&). Помните, что логическое И будет оценивать второй операнд только в том случае, если первый имеет значение true. Программисты называют это коротким замыканием, потому что нет необходимости оценивать второй операнд в логической операции И, если первый операнд дает ложное значение.

time < 12 && document.write ("Good Morning!");


В предыдущем примере оператор && сначала проверяет, меньше ли значение times 12. Если да, то в HTML-документ будет записана строка «Доброе утро». Если это не так, ничего не будет сделано из-за побочного эффекта оператора &&.

Этот метод широко не используется, прежде всего потому, что его трудно понять и запутать. Однако время от времени вы можете столкнуться с чем-то подобным, и вам нужно будет понять, как это работает.

Notice the use of line breaks and spaces in the preceding examples. Many people have different styles for how to write if ... else statements. You may also see them written with fewer line breaks or without space between the keywords and brackets. These will work, too. However, whenever pos-sible, it is preferable to choose ease of reading over brevity.
Обратите внимание на использование разрывов строк и пробелов в предыдущих примерах. Многие люди используют разные стили написания операторов if... else. Вы также можете увидеть их написанными с меньшим количеством разрывов строк или без пробелов между ключевыми словами и скобками. Это тоже подойдет. Однако, когда это возможно, предпочтительнее отдавать предпочтение простоте чтения, а не краткости.


*/