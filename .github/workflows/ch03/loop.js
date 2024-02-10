
let alphabet = [];

alphabet[0] = "a";

console.log(`alphabet with alphabet[0]: ${alphabet}`);

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(`alphabet with alphabet ${alphabet}`);

// ASCII , "a " = 97, "z" = 122

alphabet = [];

for(let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
    console.log(`alphabet with for-loop: ${alphabet}`);
};

console.log(`alphabet with for-loop: ${alphabet}`);



let arr = [];

for (let j = 0; j <= 10;  ) {
    console.log(j);
    // j = j + 1
    // j += 1
    j++
};

for (let j = 0; j <= 10;  ) {
    // console.log(j);
    // j = j + 1
    // j += 1
    j++
};

for (let j = 20; j >= 10;  ) {
    console.log(j);
    // j = j - 1
    // j -= 1
    j--
};