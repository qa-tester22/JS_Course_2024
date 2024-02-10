/*
Оператор while создает цикл, который выполняется до тех пор, пока условие принимает значение true. 
например,  показана веб-страница, содержащая пример цикла while.
*/
/*
<html>
<head>
<title>Guess the Word</title>
</head>
<body>
<script>
var guessedWord = prompt("What word am I thinking of?");
while (guessedWord != "sandwich") { // as long as the guessed word is not sandwich
prompt("No. That's not it. Try again.");
}
alert("Congratulations! That's exactly right!"); // do this after exiting the loop
</script>
</body>
</html>
*/

let key = 5;
while(key >= 15) {
    console.log(key++);
}; // не выполнится ни разу

let line = 25;
while(line >= 15) {
    console.log(line--);
    console.log(--line);
}

