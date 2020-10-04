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
console.log('-----------------');

/*Содержит ли массив элемент, который на единицу больше минимального элемента данного массива?
    Напишите функцию includeGreaterThanMin, которая принимает непустой массив arr в качестве аргумента, и возвращает
true, если массив содержит элемент, который на единицу больше минимального элемента, и false - в противном случае.

    Пример:

функция includeGreaterThanMin([1, 3, 4, 5]) должна возвратить false, так как минимальный элемент равен 1, и массив
не содержит 2;
функция includeGreaterThanMin([0, 1, 2, 3]) должна возвратить true, так как минимальный элемент равен 0, и массив
содержит 1;
функция includeGreaterThanMin([9, -2, 10, -1, 8]) должна возвратить true, так как минимальный элемент равен -2, и
массив содержит -1.*/
function includeGreaterThanMin(arr){
    let min = Math.min(...arr);
    return arr.includes(min +1);
}
console.log(includeGreaterThanMin([1, 3, 4, 5])); //false
console.log(includeGreaterThanMin([0, 1, 2, 3]));//true