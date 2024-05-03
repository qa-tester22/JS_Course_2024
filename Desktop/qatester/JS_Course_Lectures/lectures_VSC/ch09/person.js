const name = "Jane";
const age = 30;



export {name, age};

// export const name = "Tom";
// export const age = 35;

// для js файла 9_02_modules.mjs

// module.exports = {
//     name: "John",
//     age: 20
// };

/*
текст как все работает в файле 9_20_modules.js 
подключаем в  файл 9_10_asyncPromise.html c 39 строки 

    <script type="module">
        import message from "./message.js";
        import {name, age} from "./person.js";

        document.getElementById("demo").innerHTML = message() + " Do you know, " + name + " is " + age;
    </script>
*/
