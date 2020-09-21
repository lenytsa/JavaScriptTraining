/*
Сумма элементов массива
Напишите функцию sumOfElements, которая принимает массив arr в качестве аргумента и возвращает сумму элементов массива.

    Используйте в решении цикл. Не разрешается использование методов массивов.

    Пример:

функция sumOfElements([1, 2, 3]) должна возвратить 6;
функция sumOfElements([15]) должна возвратить 15;
функция sumOfElements([]) должна возвратить 0.*/
function sumOfElements(arr){
    let sum = 0;
    for(let elm of arr){
        sum =  sum + elm;
    }
    return sum;
}
console.log(sumOfElements([1, 2, 3]));

console.log('----------------')
/*
Произведение элементов массива
Напишите функцию productOfElements, которая принимает массив arr в качестве аргумента и возвращает произведение элементов массива.

    Используйте в решении цикл. Не разрешается использование методов массивов.

    Пример:

функция productOfElements([1, 2, 4]) должна возвратить 8;
функция productOfElements([2, 15]) должна возвратить 30;
функция productOfElements([]) должна возвратить 0.*/
function productOfElements(arr){
    let product = 1;
    if(arr.length === 0) return 0;
    for(let elm of arr){
        product = product * elm;
    }
    return product;
}