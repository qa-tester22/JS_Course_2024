/*
Functions within Functions
Функции внутри функций
 

Функции могут быть объявлены внутри функций. 
 как работает этот метод и как он влияет на область видимости переменных, создаваемых внутри функций.

*/

function turnIntoAMartian (myName) {

    function recallName(myName) {
        let martianName = myName + " Martian";
    }

    let martianName = recallName(myName);
    console.log(martianName);  // returns undefined
}

turnIntoAMartian('Митрофан');  // undefined

/*
Предыдущий пример, как включение функции в функцию, создает еще один уровень видимости. 

Переменные, созданные внутри внутренних функций, недоступные непосредственно для крепления их функций. Чтобы получить их значения, необходим оператор return:
*/

function turnIntoAMartian(myName) {

    function recallName (myName) {
        let martianName = myName + " Martian";
        return martianName;
    }

    let martianName = recallName(myName);
    console.log(martianName);
};
