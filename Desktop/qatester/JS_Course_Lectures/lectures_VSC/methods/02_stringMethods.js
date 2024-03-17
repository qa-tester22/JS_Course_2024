/*
Методы строк
s.charAt(0); или s[0]
s.charAt(s.length - 1);
извлечение подстроки:
s.substring(1, 4); 
s.substr(1, 3); 
s.slice(1, 4); 
s.slice(-3);
s.indexOf(‘l’); 
s.lastIndexOf(‘l’); 
s.split(‘, ’);
s.replace(“l”, “L”); 
s.replaceAll(“l”, “L”); 
s.toUpperCase();
s.toLowerCase(); 


Строка 
*/

let str = "auto qa engineer";
let newStr = '';

// str.length

let strLength = str.length;

console.log(`Метод str.length: strLength = ${strLength}.`);

// str.slice()*******************************************************

// str.slice(start, end), 
 let start = 0, end = 4;
	// str.slice(-11)
	// str.slice(-11, -9)

    let strSliceStartEnd = str.slice(start, end);

console.log(`Метод str.slice(start, end): strSliceStartEnd = ${strSliceStartEnd}. 
str = ${str}`);

console.log(str.slice(0, 4));  // можно сразу метод вывести в консоль

start = -11;

let strSliceStart = str.slice(start);

console.log(`Метод str.slice(start): strSliceStart = ${strSliceStart}.
str = ${str}`);

end = -9;

let strSliceNegative = str.slice(start, end);

console.log(`Метод str.slice(start, end):  strSliceNegative	= ${strSliceNegative}.
str = ${str}`);


let strSlice = str.slice();

console.log(`Метод str.slice(): strSlice = ${strSlice}. 
str = ${str}`);