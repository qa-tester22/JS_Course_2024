//Новый массив JavaScript
// В JavaScript есть встроенный конструктор массива new Array().
const pointsNew1 = new Array();
// Но вы можете смело использовать []вместо него.
const points1 = [];

// два разных оператора создают новый массив, содержащий 6 чисел
const pointsNew = new Array(40, 100, 1, 5, 25, 10);

const points = [40, 100, 1, 5, 25, 10];

// document.getElementById('demo6').innerHTML = pointsNew + ' and ' + points;

console.log(pointsNew1 + "<=> " + points1);

console.log(pointsNew + ' and ' + points);

//  Ключевое newслово может привести к неожиданным результатам
// Create an array with one element ???
let pointsOneNew = new Array(40); // создаст 40 элементов массива, а не 1 элемент со значением 40. это не то же самое, что: 
let pointsOne = [40];

console.log(pointsOneNew + " or " + pointsOne); // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, or 40 
// document.getElementById("demo6a").innerHTML = pointsNew + ' and ' + points  + ' || ' +  pointsOneNew + " or " + pointsOne; 

// Чтобы создать массив с одним элементом, вы можете сначала создать массив без аргументов, а затем добавить этот элемент
pointsNew1.push(40);  // 

document.getElementById("demo6b").innerHTML = pointsNew + ' and ' + points  + ' || ' +  pointsOneNew + " or " + pointsOne + ' || ' + pointsNew1;