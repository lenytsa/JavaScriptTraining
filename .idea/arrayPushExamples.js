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

console.log('------------------------------');
/*
Разделите массив на два массива: массив четных чисел и массив нечетных чисел
Дан массив, содержащий числа. Получить два массива: массив четных чисел и массив нечетных чисел.

    Напишите функцию separateEvenAndOdd, которая принимает числовой массив arr в качестве аргумента,
    возвращает массив, содержащий массив четных чисел и массив нечетных чисел в виде: [[array of even numbers],
    [array of odd numbers]].

    Пример:

функция separateEvenAndOdd([-2, -3, 7, 4) должна возвратить [[-2, 4],[-3, 7]];
функция separateEvenAndOdd([4, 2]) должна возвратить [[4, 2], []];
функция separateEvenAndOdd([]) должна возвратить [[], []].*/
function separateEvenAndOdd(arr){
    let even =[];
    let odd = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] %2 === 0){ even.push(arr[i])};
        if(arr[i] %2 !== 0){ odd.push(arr[i])};
    }
    return [even,odd];
}
console.log('---------------------');

/*Разделите строку на отдельные буквы
Напишите функцию splitString, которая принимает строку str в качестве аргумента, и возвращает массив,
    содержащий буквы этой строки. В решении используйте цикл по строке и метод push. В этой задаче запрещено
использование метода split().

    Пример:

функция splitString("Monkey") должна возвратить ["M", "o", "n", "k", "e", "y"];
функция splitString([]) должна возвратить [].*/
    function splitString(str){
    let res =[];
    for(let i=0; i<str.length; i++){
        res.push(str[i]);
    }
    return res;
}
console.log(splitString("Monkey"));
    console.log('------------------------')
/*
Удалите последний элемент массива
Напишите функцию deleteFromEnd, которая принимает массив arr в качестве аргумента, удаляет последний элемент массива
и возвращает полученный массив.
    Пример:
функция deleteFromEnd([1, 2, 3]) должна возвратить [1, 2];
функция deleteFromEnd([1]) должна возвратить [];
функция deleteFromEnd([]) должна возвратить [].*/
function deleteFromEnd(arr){
    arr.pop();
    return arr;
}
console.log(deleteFromEnd([1, 2, 3]));
console.log('------------------------')

/*Удаление последнего элемента: новый массив и удаленный элемент
Напишите функцию deleteFromEnd, которая принимает массив arr в качестве аргумента, удаляет последний элемент массива
и возвращает полученный массив и удаленный элемент в виде массива [newArray, element].

    Пример:

функция deleteFromEnd([1, 2, 3]) должна возвратить [[1, 2], 3];
функция deleteFromEnd([1]) должна возвратить [[], 1];
функция deleteFromEnd([]) должна возвратить [[], undefined].*/
function deleteFromEnd(arr){
    let del = arr.pop();
    return [arr, del]
}
console.log(deleteFromEnd([1, 2, 3]));

//remotes last 3 elements from array
const arrx = [11, 12, 13, 2, 4, 5];
for (let i = 0; i < 3; i++){
    arrx.pop();
}
console.log(arrx)

/*
Массив из цифр числа.
    Дано целое положительное число. Получите массив его цифр.

    Напишите функцию с именем arrayOfDigits, которая принимает в качестве аргумента число n и возвращает массив его
цифр. Запрещено использование методов. В решении используйте цикл do while.

    Примеры:

функция arrayOfDigits(123456) должна возвратить [1, 2, 3, 4, 5, 6];
функция arrayOfDigits(1000) должна возвратить [1,0,0,0];
функция arrayOfDigits(1) должна возвратить [1].
    функция arrayOfDigits(0) должна возвратить [0].*/
console.log('---------------')

function arrayOfDigits(n) {
    let res = [];
    let i = 0;
    do {
        let lastDigit = n % 10;
        res.unshift(lastDigit)
        n = Math.floor(n / 10);
        i++
    } while (n > 0)
    return res;
}

console.log(arrayOfDigits(126));
console.log(arrayOfDigits(1000));
console.log('---------------')

/*Добавление величины в начало или конец массива
Напишите функцию addValue, которая принимает массив arr и величину value в качестве аргументов, добавляет
величину value в конец массива, если value является числом, или в начало массива, если value является строкой, затем
возвращает полученный массив.

    Пример:

функция addValue([1, 2, 3], 10) должна возвратить [1, 2, 3, 10];
функция addValue([1, 1, 1], "a") должна возвратить ["a", 1, 1, 1];
функция addValue([1], 10) должна возвратить [1, 10];
функция addValue([1], "b") должна возвратить ["b", 1];
функция addValue([], 0) должна возвратить [0].*/
function addValue(arr, value){
        if(typeof value === 'number') arr.push(value);
        if(typeof value === 'string') arr.unshift(value)

    return arr;
}
console.log(addValue([1, 2, 3], 10));
console.log(addValue([1, 2, 3], 'a'));
console.log(addValue([1], "b"));

//Array.prototype.shift() examples
/*
Удалите первый элемент массива
Напишите функцию deleteFirstElement, которая принимает массив arr в качестве аргумента, удаляет первый элемент
массива и возвращает полученный массив.

    Пример:

функция deleteFirstElement([10, 1, 2, 3]) должна возвратить [1, 2, 3];
функция deleteFirstElement([1]) должна возвратить [];
функция deleteFirstElement([]) должна возвратить [].*/
function deleteFirstElement(arr){
    arr.shift();
    return arr;
}
console.log(deleteFirstElement([10, 1, 2, 3]));