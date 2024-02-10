/*
do ... while 
делать . . . пока

Цикл do ... while работает во многом так же, как цикл while, за исключением того, что операторы помещаются перед выражением для проверки. В результате операторы внутри цикла do... while всегда будут выполняться хотя бы один раз.
*/


let key = 5;
do {
    console.log(++key);
} while(key >= 15) ; //  выполнится один  разу

let line = 25;
do {
    console.log(line--);
} while(line >= 15); 


let arrNan = [1, 3]
arrNan[2] = arrNan[0], 
arrNan[5] = arrNan[8]*3;

console.log(arrNan);