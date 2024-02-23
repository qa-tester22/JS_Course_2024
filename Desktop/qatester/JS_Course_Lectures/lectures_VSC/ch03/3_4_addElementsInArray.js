//  Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:

const newFruits = ["Apple", "Orange", "Banana"];

document.getElementById("demo4").innerHTML = newFruits;

console.log(newFruits);
newFruits.push("lemon");
console.log(newFruits);

function myFunction() {
    newFruits.push("Lemon");
    document.getElementById("demo4").innerHTML = newFruits;
};

//  Adding elements with high indexes can create undefined "holes" in an array

newFruits[9] = "Lime";
console.log(newFruits);