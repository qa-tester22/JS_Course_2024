const hourNow = new Date().getHours();

let greeting;

if (hourNow < 3) {
    greeting = "Bed time, babies!";
} else if (hourNow < 12) {
    greeting = "Good morning!";
} else if (hourNow < 18) {
    greeting = "Good afternoon!";
} else if (hourNow < 23) {
    greeting = "Good evening!";
} else {
    greeting = "Good night!";
};

console.log("Now time is " + hourNow + ", " + greeting);