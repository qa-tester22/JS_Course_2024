const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
let text = '<ul>';

for (let i = 0; i < fLen; i++) {
    text += '<li>' + fruits[i] + '</li>';
};
text += '</ul>';

console.log(text); // <ul><li>Banana</li><li>Orange</li><li>Apple</li><li>Mango</li></ul>
document.getElementById('demo2').innerHTML = text;

// Использование циклов на сайте. выводим список фруктов из массива.