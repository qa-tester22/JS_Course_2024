// doTheThing('play');

let doTheThing = function(thingToDo) {
    console.log('I will do: ' + thingToDo);
}
doTheThing('play');
doTheThing('sleep');


function greet () {
    console.log('Hello World!');
};

let sayGoodbye = function(){
    console.log('Goodbye');
};

greet();
sayGoodbye();

sayGoodbye = function() {
    console.log('Пока');
};

sayGoodbye();

function greet () {
    console.log('Привет, World!');
};

greet();