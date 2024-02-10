/*
05.02.2024. Задача:
У вас есть переменная `str`, содержащая строку `"OpenAI"`. Какая буква будет находиться на позиции с индексом "3" в этой строке?
а) "n"
б) "p"
в) "e"
г) "A"
**Варианты ответов:**
1) а) "n"
2) б) "p"
3) в) "e"
4) г) "A"
Выберите правильный вариант ответа. 
*/

let str = "OpenAI";
let answer = str.indexOf('n');

console.log(answer);

console.log("OpenAI".indexOf("O") === 3);

if(str.indexOf("O") === 3) {
    console.log('My answer is "O"')
} else if (str.indexOf("p") === 3) {
    console.log('My answer is "p"')
} else if (str.indexOf('e') === 3) {
    console.log('My answer is "e"')
} else if (str.indexOf("n") === 3) {
    console.log('My answer is "n"')
} else if (str.indexOf('A') === 3) {
    console.log('My answer is "A"')
} else {
    console.log('My answer is "I"')
};
