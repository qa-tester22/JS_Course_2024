const otherFruits = ["Orange", "Mango", "Apple", "Banana"];

let textForEach = "<ul>";
otherFruits.forEach(myFunction);
textForEach += "</ul>";

console.log(textForEach);
document.getElementById("demo3").innerHTML = textForEach;

function myFunction(value) {
    textForEach += "<li>" + value + "</li>";
};