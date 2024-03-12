/* Задача 27. Шифр Цезаря.
Как исправить конструктор объекта в JavaScript, который реализует шифрование и дешифрование строк с помощью шифра Цезаря:
*/

function CaesarCipher(shift) {
    this.shift = shift;

    this.encrypt = function(text, shift = this.shift) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {  // uppercase letters
                result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
            } else if (charCode >= 97 && charCode <= 122) {  // lowercase letters
                result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
            } else {
                result += text.charAt(i);  // non-alphabetic characters
            }
        }
        return result;
    };

    // this.decrypt = function(text) {

    // }
}



// Example usage:
const cipher = new CaesarCipher(3);  // create a cipher with shift 3

// Adding the decrypt method 


const encrypted = cipher.encrypt("Hello, World!");  // encrypt a string
console.log(encrypted);  // Output: "Khoor, Zruog!"

const decrypted = cipher.decrypt(encrypted);  // decrypt the encrypted string
console.log(decrypted);  // Output: "Hello, World!"

/*
Варианты ответов:

    1) Часть текста утерена при шифровании, расшифровать невозможно.

    2) this.decrypt = function(text) {
         return this.encrypt(text, -this.shift);  
       };


    3) CaesarCipher.decrypt = function(text) {
        return this.encrypt(text, 26 - this.shift);  
    };
  
    4) CaesarCipher.prototype.decrypt = function(text) {
        return this.encrypt(text, 26 - (this.shift % 26));  
       };

   Выберите один ответ.
   / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
   :one:   :two:   :three:   :four:
 
   //**************************************************************************************
   // Правильный ответ: 4).

   



*/










    /*  
    // this.decrypt = function(text) {
    //     return this.encrypt(text, 26 - this.shift);  // using positive shift for decryption
    // };

    
    this.decrypt = function(text) {        // не верно работает
        return this.encrypt(text, 26 * this.shift);  // 
    };
    
    
    // this.decrypt = function(text) {        // не верно работает
    //     return this.encrypt(text, 26 - (-this.shift % 26));  // 
    // };
    
    // this.decrypt = function(text) {        // не верно работает
    //     return this.encrypt(text, this.shift % 26);  // 
    // };
    
*/












/*
Вы можете использовать простой шифр Цезаря для этой цели. Вот пример конструктора объекта в JavaScript, который реализует шифрование и дешифрование строк с помощью шифра Цезаря:
*/
/*
Вы правы, в текущей реализации метод `decrypt` не учитывает отрицательный сдвиг, а просто вызывает метод `encrypt` без изменений. Давайте исправим это, чтобы метод `decrypt` действительно использовал отрицательное значение сдвига для расшифровки.

 код метода `decrypt`:


this.decrypt = function(text) {
    return this.encrypt(text, -this.shift);  // using negative shift for decryption
};


Теперь метод `decrypt` будет передавать отрицательное значение сдвига в метод `encrypt`, что приведет к корректной расшифровке текста. Вот как будет выглядеть исправленный код:
*/
/*
function CaesarCipher(shift) {
    this.shift = shift;

    this.encrypt = function(text, shift = this.shift) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {  // uppercase letters
                result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
            } else if (charCode >= 97 && charCode <= 122) {  // lowercase letters
                result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
            } else {
                result += text.charAt(i);  // non-alphabetic characters
            }
        }
        return result;
    };

    // this.decrypt = function(text) {
    //     return this.encrypt(text, -this.shift);  // using negative shift for decryption
    // };

    // this.decrypt = function(text) {
    //     return this.encrypt(text, 26 - (this.shift % 26));  // using positive shift for decryption
    // };
    
    // this.decrypt = function(text) {
    //     return this.encrypt(text, 26 - this.shift);  // using positive shift for decryption
    // };

    
    this.decrypt = function(text) {        // не верно работает
        return this.encrypt(text, 26 * this.shift);  // 
    };
    
    
    // this.decrypt = function(text) {        // не верно работает
    //     return this.encrypt(text, 26 - (-this.shift % 26));  // 
    // };
    
    // this.decrypt = function(text) {        // не верно работает
    //     return this.encrypt(text, this.shift % 26);  // 
    // };
    
}

// Example usage:
const cipher = new CaesarCipher(3);  // create a cipher with shift 3
const encrypted = cipher.encrypt("Hello, World!");  // encrypt a string
console.log(encrypted);  // Output: "Khoor, Zruog!"

const decrypted = cipher.decrypt(encrypted);  // decrypt the encrypted string
console.log(decrypted);  // Output: "Hello, World!"


// Теперь метод `decrypt` использует отрицательное значение сдвига для расшифровки зашифрованной строки.
*/

/*
function CaesarCipher(shift) {
    this.shift = shift;

    this.encrypt = function(text) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {  // uppercase letters
                result += String.fromCharCode((charCode - 65 + this.shift) % 26 + 65);
            } else if (charCode >= 97 && charCode <= 122) {  // lowercase letters
                result += String.fromCharCode((charCode - 97 + this.shift) % 26 + 97);
            } else {
                result += text.charAt(i);  // non-alphabetic characters
            }
        }
        return result;
    };

    this.decrypt = function(text) {
        return this.encrypt(text);  // decryption is essentially encryption with negative shift
    };
}

// Example usage:
const cipher = new CaesarCipher(3);  // create a cipher with shift 3
const encrypted = cipher.encrypt("Hello, World!");  // encrypt a string
console.log(encrypted);  // Output: "Khoor, Zruog!"

const decrypted = cipher.decrypt(encrypted);  // decrypt the encrypted string
console.log(decrypted);  // Output: "Hello, World!"
*/
/*
Этот код создает конструктор `CaesarCipher`, который принимает параметр `shift`, определяющий сдвиг шифра. Метод `encrypt` принимает строку и возвращает ее зашифрованную версию, а метод `decrypt` принимает зашифрованную строку и возвращает исходную строку.
const decrypted = cipher.decrypt(encrypted);  // decrypt the encrypted string
console.log(decrypted);  

Шаги кода:

1. Создание конструктора `CaesarCipher` с одним параметром `shift`, который устанавливает сдвиг шифра.
2. Внутри конструктора устанавливается свойство `shift` экземпляра объекта равным переданному параметру `shift`.
3. Создание метода `encrypt`, который принимает строку `text` и необязательный параметр `shift` (по умолчанию равный `this.shift`). Метод перебирает каждый символ строки `text` и, в зависимости от его кода символа (ASCII), выполняет шифрование шифром Цезаря. Полученные зашифрованные символы добавляются к результату `result`.
4. Создание пустого метода `decrypt` в конструкторе `CaesarCipher`.
5. Создание экземпляра объекта `cipher` класса `CaesarCipher` со сдвигом на 3.
6. Добавление метода `decrypt` к прототипу класса `CaesarCipher`, который использует метод `encrypt` с отрицательным сдвигом для расшифровки строки.
7. Зашифровка строки "Hello, World!" с помощью метода `encrypt` и вывод результата на консоль.
8. Расшифровка зашифрованной строки с помощью метода `decrypt` и вывод результата на консоль.

*/