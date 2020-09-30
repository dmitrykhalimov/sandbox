'use strict'

const placeToPage = (container, givenResult) => {
    document.querySelector(container).textContent = givenResult;
}
// Метод String.match
let str = "Маленькие зайки в майках, скачут по лужАйке";
let regexp;
let result;
// Пример 1-1

regexp = (/ай/);
result = str.match(regexp) 
console.log(`Пример 1 ${result}`);
placeToPage('.example__result-1-1', result)

// Пример 1-2

regexp = (/ай/g);
result = str.match(regexp) 
console.log(`Пример 2 ${result}`);
placeToPage('.example__result-1-2', result)

// Пример 1-3

regexp = (/ай/gi);
result = str.match(regexp) 
console.log(`Пример 3 ${result}`);
placeToPage('.example__result-1-3', result)

// Пример 1-4

regexp = (/ой/gi);
result = str.match(regexp) 
console.log(`Пример 4 ${result}`);
placeToPage('.example__result-1-4', String(result));

// Пример 1-5

let regexpConstructor = new RegExp(/ай/gi);
result = str.match(regexpConstructor) 
console.log(`Пример 5 ${result}`);
placeToPage('.example__result-1-5', result)