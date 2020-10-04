/*Coding Practice
Есть ли хоть один нулевой элемент в массиве?
    question
    Напишите функцию includeZero, которая принимает массив arr в качестве аргумента, и возвращает true,
    если массив содержит хотя бы один элемент равный 0, и false - в противном случае.

    Пример:

функция includeZero([1, 10, 2, -3, 8]) должна возвратить false;
функция includeZero([0, 1, 2]) должна возвратить true;
функция includeZero([]) должна возвратить false.*/
function includeZero(arr) {
    return arr.includes(0);
}

console.log(includeZero([1, 10, 2, -3, 8]));
console.log(includeZero([0, 1, 2]));