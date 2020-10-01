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
console.log('--------------------------------')

/*
Разделите массив на массив чисел и массив строк
Дан массив, содержащий числа и строки. Получить два массива: массив чисел и массив строк из значений исходного массива.

    Напишите функцию separateNumsAndStrings, которая принимает смешанный массив arr в качестве аргумента,
    возвращает массив, содержащий массив чисел и массив строк в виде: [[array of numbers], [array of strings]]

Пример:

    функция separateNumsAndStrings([1, 2, "a", 3, "b"]) должна возвратить [[1, 2, 3],["a", "b"]];
функция separateNumsAndStrings([1, 1, 1]) должна возвратить [[1, 1, 1], []];
функция separateNumsAndStrings(["a", "b", "c"]) должна возвратить [[], ["a", "b", "c"]];
функция separateNumsAndStrings([]) должна возвратить [[], []].
*/
function separateNumsAndStrings(arr){
    let resStrings = [];
    let resNumbers = [];
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === 'number') resNumbers.push(arr[i]);
        if(typeof arr[i] === 'string') resStrings.push(arr[i]);
    }
    return [resNumbers, resStrings]
}
console.log(separateNumsAndStrings([1, 2, "a", 3, "b"]));

console.log('--------------------------------')

/*
Разделите массив на два массива: массив положительных чисел и массив отрицательных чисел
Дан массив, содержащий числа. Получить два массива: массив положительных чисел и массив отрицательных чисел.

    Напишите функцию separatePosAndNeg, которая принимает числовой массив arr в качестве аргумента, возвращает
массив, содержащий массив положительных чисел и массив отрицательных чисел в виде:

    [[array of positive numbers], [array of negative numbers]].

        Элемент, равный нулю, не должен входить ни в один массив.

    Пример:

функция separatePosAndNeg([-2, 3, 7, -4) должна возвратить [[3, 7],[-2, -4]];
функция separatePosAndNeg([1, 2]) должна возвратить [[1, 2], []];
функция separatePosAndNeg([]) должна возвратить [[], []].*/
function separatePosAndNeg(arr){
    let pos = [];
    let neg = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0) {neg.push(arr[i])};
        if(arr[i] > 0) {pos.push(arr[i])};
    }
    return [pos, neg];
}
console.log(separatePosAndNeg([-2, 3, 7, -4]));