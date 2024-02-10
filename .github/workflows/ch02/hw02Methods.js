/*
3.	Установить какие методы строк изменяют начальное значение строки.

Дано: Строка: “Knowledge of built-in JavaScript methods speeds up a tester's work.”
Методы:
1. s.charAt(0); или 
2. s[0]
3. s.charAt(s.length - 1);
извлечение подстроки:
4. s.substring(1, 4); 
5. s.substr(1, 3); 
6. s.slice(1, 4); 
7. s.slice(-3);
8. s.indexOf(‘l’); 
9. s.lastIndexOf(‘l’); 
10. s.split(‘, ’);
11. s.replace(“l”, “L”); 
12. s.replaceAll(“l”, “L”); 
13. s.toUpperCase();
14. s.toLowerCase(); 

*/

let s = "Knowledge of built-in JavaScript methods speeds up a tester's work."
let newS;
console.log(s);
newS = s.charAt(3);

console.log("1. newS has value " + newS);
console.log("1. s has value " + s);

newS = s[3];

console.log("2. newS has value " + newS);
console.log("2. s has value " + s);

newS = s.charAt(s.length - 1);

console.log("3. newS has value " + newS);
console.log("3. s has value " + s);

newS = s.substring(1, 4);

console.log("4. newS has value " + newS);
console.log("4. s has value " + s);

newS = s.substr(1, 3);

console.log("5. newS has value " + newS);
console.log("5. s has value " + s);

newS = s.slice(1, 4);

console.log("6. newS has value " + newS);
console.log("6. s has value " + s);

newS = s.slice(-3);

console.log("7. newS has value " + newS);
console.log("7. s has value " + s);

newS = s.indexOf("l");

console.log("8. newS has value " + newS);
console.log("8. s has value " + s);

newS = s.lastIndexOf("l");

console.log("9. newS has value " + newS);
console.log("9. s has value " + s);

newS = s.split("'");

console.log("10. newS has value " + newS);
console.log("10. s has value " + s);

newS = s.replace("l", "L");

console.log("11. newS has value " + newS);
console.log("11. s has value " + s);

newS = s.replaceAll("l", "L");

console.log("12. newS has value " + newS);
console.log("12. s has value " + s);

newS = s.toUpperCase();

console.log("13. newS has value " + newS);
console.log("13. s has value " + s);

newS = s.toLowerCase();

console.log("14. newS has value " + newS);
console.log("14. s has value " + s);

let standardOfS = s;

newS = s.charAt(3);

if(s === standardOfS) {
    console.log("S has no any changes.");
} else {
    console.log("S was changed.");
};