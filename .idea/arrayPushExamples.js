// Добавьте величину в конец массива
// Напишите функцию addValue, которая принимает массив arr и величину value в качестве аргументов,
//     добавляет величину value в конец массива и возвращает полученный массив.
//
//     Пример:
//
// функция addValue([1, 2, 3], 10) должна возвратить [1, 2, 3, 10];
// функция addValue([1, 1, 1], "a") должна возвратить [1, 1, 1, "a"];
// функция addValue([], 10) должна возвратить [10].
function addValue(arr, value){
    arr.push(value);
    return arr;
}
console.log(addValue([1, 2, 3], 10));
console.log('---------------------------');

/*
Новая длина массива
Напишите функцию addValue, которая принимает массив arr и величину value в качестве аргументов,
    добавляет величину value в конец массива и возвращает новую длину массива. В этой задаче нельзя использовать
свойство length.

    Пример:

функция addValue([1, 2, 3], 10) должна возвратить 4;
функция addValue([1, -1, 14, 0], "a") должна возвратить 5;
функция addValue([], 10) должна возвратить 1.*/
function addValue(arr, value){
    arr.push(value);
    let count =0;
    for(let elm of arr){
        arr[elm];
        count++
    }
    return count;
}
console.log(addValue([1, 2, 3,5], 10));

console.log('--------------------------------')
/*
Получить массив из букв
Дан массив, содержащий имена. Получить массив, состоящий из первых букв имен, содержащихся в исходном массиве.

    Напишите функцию arrayOfFirstLetters, которая принимает массив строк names в качестве аргумента, и
возвращает массив, содержащий первые буквы строк исходного массива.

    Пример:

функция arrayOfFirstLetters(["Alice", "Bob"]) должна возвратить ["A", "B"];
функция arrayOfFirstLetters(["Kate"]) должна возвратить ["K"];
функция arrayOfFirstLetters([]) должна возвратить []*/
function arrayOfFirstLetters(names){
    let res =[];
    for(let i=0; i<names.length; i++){
        res.push(names[i][0])
    }
    return res;
}
console.log(arrayOfFirstLetters(["Alice", "Bob"]));