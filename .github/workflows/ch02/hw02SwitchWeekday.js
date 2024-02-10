let weekday = new Date().getDay(); // The getDay() method returns the weekday as a number between 0 and 6.
let today;
let weekend;
let weekEnd;
let x = "0";

 console.log(weekday);

 switch(weekday) {
    case 0: 
        today = "Sunday";
        break;
    case 1:
        today = "Monday";
        break;
    case 2:
        today = "Tuesday";
        break;
    case 3:
        today = "Wednesday";
        break;
    case 4:
        today = "Thursday";
        break;
    case 5:
        today = "Friday";
        break;
    case 6:
        today = "Saturday";
        break;
    default:
        today = "Strange";
 };

 console.log('Today is ' + today);

 // The default case does not have to be the last case in a switch block:
// If default is not the last case in the switch block, remember to end the default case with a break.

 switch (weekday) {
    default:
        weekend = "Looking forward to the weekend.";
        break;
    case 6:
        weekend = "Today is Saturday. Hava a nice weekend!";
        break;
    case 0: 
        weekend = "Today is Sunday. Have a nice weekend!";
        break;
 };

 console.log(weekend);

//  Common Code Blocks
// Sometimes you will want different switch cases to use the same code.

switch (weekday) {
    case 4:
    case 5:
        weekEnd = "Soon it is Weekend!";
        break;
    case 0:
    case 6:
        weekEnd = "It is Weekend!";
        break;
    default:
        weekEnd = "Looking forward to the Weekend!"
};

console.log(weekEnd);

//  Switch cases use strict comparison (===).

switch(x){
    case 0:
        console.log("It is Off.");
        break;
    case 1:
        console.log("It is On.");
        break;
    default:
        console.log("No value found.");
};