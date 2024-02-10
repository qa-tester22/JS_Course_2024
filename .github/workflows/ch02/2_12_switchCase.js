/*

Switch

The switch statement chooses between multiple statements to execute based on possible values of a single expression. Each of these values in a switch statement is called a case. In English, you may say, for example:

“In the case that we are expecting six guests, order three pizzas. In the case that we are expecting 12 guests, order six pizzas. In the case that we’re expecting more than 20 guests, freak out.”

The syntax for the switch statement is

Switch

Оператор switch выбирает между несколькими операторами для выполнения на основе возможных значений одного выражения. Каждое из этих значений в операторе switch называется случаем case. По-английски вы можете сказать, например:

«В случае, если мы ожидаем шестерых гостей, закажите три пиццы. В случае, если мы ожидаем 12 гостей, закажите шесть пицц. В случае, если мы ожидаем более 20 гостей, не волнуйтесь».

Синтаксис оператора переключения:



switch (expression) {
case value1:
//	Statements break;
case value2:
//	Statements break;
case value3:
//	Statements break; default:

//	Statements break;
}

Notice the break statement after the statements associated with each case. The break statement tells the switch statement to stop and exit the switch statement. Without the break, the switch statement would continue and run the statements in the next clause, regardless of whether the expres-sion meets the conditions of that case.


Forgetting a break statement within a switch can cause big problems, so be sure to always use it. Because a switch statement will run any statements within any case clause after a clause that evaluates to true, unpredictable results can occur when you forget a break statement. Problems caused by missing break statements are not easy to identify because they generally won’t produce errors, but will frequently produce incorrect results.


Обратите внимание на оператор прерывания break после операторов, связанных с каждым случаем case. Оператор Break сообщает оператору switch, что нужно остановиться и выйти из оператора переключателя switch. Без разрыва оператор переключения продолжит работу и выполнит операторы из следующего предложения, независимо от того, соответствует ли выражение условиям этого случая.


Если вы забудете оператор Break внутри переключателя, это может вызвать большие проблемы, поэтому обязательно всегда используйте его. Поскольку оператор переключения будет выполнять любые операторы в любом предложении case после предложения, которое имеет значение true, если вы забудете оператор прерывания, могут возникнуть непредсказуемые результаты. Проблемы, вызванные отсутствием операторов прерывания, выявить непросто, поскольку они обычно не приводят к ошибкам, но часто приводят к неверным результатам.
 


*/

/*


If no match is found in any of the case clauses, the switch statement will look for a default clause and execute the statement it contains.

The exception to the rule that you should always use a break statement between case clauses is the default clause. As long as the default clause is the last statement in your switch (which, it should be), you can safely omit the break after it because the program will break out of the switch after the last statement anyway.

Если совпадений не найдено ни в одном из предложений case, оператор переключения будет искать предложение по умолчанию и выполнять содержащийся в нем оператор.

Исключением из правила, согласно которому вы всегда должны использовать оператор разрыва между предложениями case, является предложение по умолчанию. Пока предложение по умолчанию является последним оператором в вашем переключателе (что и должно быть), вы можете безопасно опустить разрыв после него, потому что программа все равно выйдет из переключателя после последнего оператора.

Listing 6-1 shows an example of how you might use a switch statement.

Listing 6-1: 	Using a switch Statement to Personalize a Greeting


var languagePreference = "Spanish";
switch (languagePreference){
case "English":
console.log("Hello!");
break;
case "Spanish":
console.log("Hola!");
break;
case "German":
console.log("Guten Tag!");
break;
case "French":
console.log("Bon Jour!");
break;
default:
console.log("I'm Sorry, I don't Speak" + languagePreferance + "!");
}




*/

let color = "green";
switch (color) {
    case 'blue': console.log('(5,55,88)');
        break;
    case 'red': console.log('77,00,45');
        break;
    default: console.log('black: (0,0,0)')
}