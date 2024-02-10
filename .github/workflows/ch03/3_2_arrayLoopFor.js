const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
let text = '<ul>';

for (let i = 0; i < fLen; i++) {
    text += '<li>' + fruits[i] + '</li>';
};
text += '</ul>';

console.log(text);
document.getElementById('demo2').innerHTML = text;