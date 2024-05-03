 function message() {
    return "I love JS!";
}

export default message;

// const message =  () =>  "I love JavaScript!";

// export default message;


// для js файла 9_02_modules.mjs


/*
текст как все работает в файле 9_20_modules.js 
подключаем в  файл 9_10_asyncPromise.html c 39 строки 

    <script type="module">
        import message from "./message.js";
        import {name, age} from "./person.js";

        document.getElementById("demo").innerHTML = message() + " Do you know, " + name + " is " + age;
    </script>
*/
