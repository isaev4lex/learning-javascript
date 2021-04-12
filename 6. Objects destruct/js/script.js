"use strict";

const options = { // Создаю объект options.
    name: 'test', // Даю ему первое свойство name со значением test.
    width: 1024, // Даю ему второе свойство со значением.
    height: 1024, // Даю ему третье свойство со значением.
    colors: { // Даю ему четвёртое свойство, которое является объектом.
        border: 'black', // Даю четвёртому свойству options, свойству border значение black.
        bg: 'red' // Даю  четвёртому свойству options, свойству bg значение red.
    },
    showtext: function(text) { // Даю пятому свойству в значения - функцию.
        console.log(text); // Данная функция будет выводить на экран текст, который передан в параметры.
    }
};

console.log(options['name']); // Вывожу на экран значение свойства name, объекта options.
delete options.name; // Удаляю свойство name у объекта options.
console.log(options); // Вывожу на экран объект options.

for (let i in options) { // Пробегаюсь циклом по свойствам объекта options
    if (typeof options[i] === 'object') { // Если вдруг, значение свойства будет равна объекту, то...
        console.log(`Ключ ${i} равен объекту. Который состоит из следующих частей:`); // Вывести на экран строку.
        for (let j in options[i]) { // Пробежаться циклом по этому объекту, внутри объекта.
            console.log(`Свойство ${j} равно ${options[i][j]}`); // Вывожу на экран строку.
        }
        continue; // Продолжаю цикл.
    } else { // Во всех других случаях...
        console.log(`Свойство ${i} равно ${options[i]}`); // Вывожу на экран строку.
    }
}

let optionsKeys = Object.keys(options); // Создаю переменную, которая равна всем свойствам option, НО это уже получается массив.
console.log(optionsKeys); // Вывожу на экран этот массив.

options.showtext("Hello world"); // Использую метод объекта options, под названием showtext, который выводин на экран текст, пераданный в параметры.

let {border, bg} = options.colors; // Создаю 2 переменные, которые равняются свойстам, которые лежат в объекте colors, лежащим в объекте options
console.log(border); // Вывожу на экран значение переменной border.
console.log(bg); // Вывожу на экран значение переменно bg.