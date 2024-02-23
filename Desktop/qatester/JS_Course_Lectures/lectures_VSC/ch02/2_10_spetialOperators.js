/*
Special operators

JavaScript’s special operators are a hodge-podge of miscellaneous other ­symbols and words that perform other and important functions.


Специальные операторы

Специальные операторы JavaScript представляют собой смесь разных символов и слов, выполняющих другие важные функции.


Conditional operator

The conditional operator (also known as the ternary operator) uses three operands. It evaluates a logical expression and then returns a value based on whether that expression is true or false. The conditional operator is the only operator that requires three operands. For example:


var isItBiggerThanTen = (value > 10) ? "greater than 10" :
"not greater than 10";

Comma operator

The comma operator evaluates two operands and returns the value of the second one. It’s most often used to perform multiple assignments or other operations within loops. It can also serve as a shorthand for initializing vari-ables. For example:



var a = 10 , b = 0;

Because the comma has the lowest precedence of the operators, its operands are always evaluated separately.

delete operator

The delete operator removes a property from an object or an element from an array.


When you use the delete operator to remove an element from an array, the length of the array stays the same. The removed element will have a value of undefined.


var animals = ["dog","cat","bird","octopus"]; console.log (animals[3]); // returns "octopus" delete animals[3];
console.log (animals[3]); // returns "undefined"

in operator

The in operator returns true if the specified value exists in an array or object.


var animals = ["dog","cat","bird","octopus"]; if (3 in animals) {
console.log ("it's in there");
}
*/

/* 

In this example, if the animals array has an element with the index of 3, the string "it's in there" will print out to the JavaScript console.

instanceof operator

The instanceof operator returns true if the object you specify is the type of object that has been specified.


var myString = new String();
if (myString instanceof String) {
console.log("yup, it's a string!");
}

new operator

The new operator creates an instance of an object. As you can see in Chapter 8, JavaScript has several built-in object types, and you can also define your own. In the following example, Date() is a built-in JavaScript object, while Pet() and Flower() are examples of objects that a program-mer could create to serve custom purposes within a program.


var today = new Date();
var bird = new Pet();
var daisy = new Flower();

this operator

The this operator refers to the current object. It’s frequently used for retrieving properties within an object.

Chapter 8 covers the this operator in much more detail.

typeof operator

The typeof operator returns a string containing the type of the operand:


var businessName = "Harry's Watch Repair"; console.log typeof businessName; // returns "string"

void operator

The void operator causes an expression in the operand to be evaluated without returning a value. The place where you most often see void used is in HTML documents when a link is needed, but the creator of the link wants to override the default behavior of the link using JavaScript:


<a href="javascript:void(0);">This is a link, but it won't do anything</a>
Оператор void вызывает вычисление выражения в операнде без возврата значения. Чаще всего используется void в документах HTML, когда необходима ссылка, но создатель ссылки хочет переопределить поведение ссылки по умолчанию с помощью JavaScript:
 

*/

/* 

Combining operators

You can combine assignment operators with the other operators as a short-hand method of assigning the result of an expression to a variable. For exam-ple, the following two examples have the same result:


a = a + 10;


a += 10;

Table 5-6 lists all the possible combinations of the assignment operators with other operators.



Table 5-6	Combining the Assignment Operators
		and Other Operators
		
Name	Shorthand	Standard Operator
		
Assignment	x = y	x = y
		
Addition assignment	x += y	x = x + y
		
Subtraction assignment	x -= y	x = x - y
		
Multiplication assign-	x *= y	x = x * y
ment		
		
Division assignment	x /= y	x = x / y
		
Remainder assignment	x %= y	x = x % y
		
Left shift assignment	x <<= y	x = x << y
		
Right shift assignment	x >>= y	x = x >> y
		
Unassigned right shift	x >>>= y	x = x <<< y
assignment		
		
Bitwise AND assignment	x &= y	x = x & y
		
Bitwise XOR assignment	x ^= y	x = x ^ y
		
Bitwise OR assignment	x |= y	x = x | y
		
 


*/