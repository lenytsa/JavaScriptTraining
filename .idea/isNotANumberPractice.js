
// Напишите функцию isValid, которое проверяет, содержит ли аргумент value значение NaN.
//     Если аргумент является NaN, возвратить строку "Value is not a number".
//     В противном случае возвратить строку "Value is valid".
//     Используйте в решении метод Number.isNaN(value)
//     функция isValid(NaN) должна возвратить "Value is not a number";
// функция isValid('abc' * 3) должна возвратить "Value is not a number";
// функция isValid(NaN + 1) должна возвратить "Value is not a number";
// функция isValid(0/0) должна возвратить "Value is not a number";
// функция isValid('abc' + 3) должна возвратить "Value is valid";
// функция isValid(25) должна возвратить "Value is valid";
// функция isValid(1/0) должна возвратить "Value is valid";
// функция isValid('abc') должна возвратить "Value is valid".
console.log('-----------------------')
function isValid(value){
    return Number.isNaN(value) ? 'Value is not a number': 'Value is valid';
}
console.log(isValid(1/0));
console.log(isValid('abc' * 3));
console.log('-----------------------')

//Является ли величина NaN?
// Напишите функцию isArgNaN, которое проверяет, содержит ли аргумент value значение NaN.
//
//     Если аргумент является NaN, возвратить значение NaN.
//
//     В противном случае возвратить значение величины value.
//
//     Используйте в решении функцию isNaN(value)
    // функция isArgNaN(NaN) должна возвратить NaN;
    // функция isArgNaN('hello' * 2) должна возвратить NaN;
    // функция isArgNaN(NaN + 1) должна возвратить NaN;
    // функция isArgNaN(0/0) должна возвратить NaN;
    // функция isArgNaN('abc') должна возвратить NaN;
    // функция isArgNaN('a') должна возвратить NaN";
    // функция isArgNaN('2,5') должна возвратить NaN";
    // функция isArgNaN(25) должна возвратить 25;
    // функция isArgNaN(1/0) должна возвратить Infinity;
    // функция isArgNaN('23' * 3) должна возвратить 69;
    // функция isArgNaN('2.343') должна возвратить "2.343";
    // функция isArgNaN(true) должна возвратить true;
function isArgNaN(value){
    return isNaN(value) ? NaN:  value;
}
console.log(isArgNaN(NaN));
console.log(isArgNaN('hello' * 2));
console.log(isArgNaN(25));
console.log(isArgNaN(true));
console.log('-------------------------------')
//Подсчитайте количество значений NaN в массиве
// Напишите функцию countNaN, которая принимает массив arr в качестве аргумента и
// возвращает количество элементов массива, имеющих значение NaN.
// функция countNaN([NaN, 1, NaN + 1, "a" * 2]) должна возвратить 3, так как данный массив содержит три элемента,
// имеющих значение NaN;
// функция countNaN(['hello', 'Hello' * 5) должна возвратить 1;
// функция countNaN([NaN + 1]) должна возвратить 1;
// функция countNaN([1, 2]) должна возвратить 0;
// функция countNaN([]) должна возвратить 0.
function countNaN(arr){
    let count = 0
    for(let elm of arr){
        if(Number.isNaN(elm)){
            count = count + 1;
        }
    }
    return count;
}
console.log(countNaN([1, 2])); //0
console.log(countNaN(['hello', 'Hello' * 5])); //1
console.log(countNaN([NaN + 1])); //1
console.log('-------------------------------')

//Если аргумент функции - NaN
// Напишите функцию multBy5, которая принимает величину value в качестве аргумента, и если это NaN, возвращает строку "Value is NaN", иначе умножает величину на 5.
//
// Примеры:
//
//     функция multBy5(3) должна возвратить 15;
// функция multBy5(0) должна возвратить 0;
// функция multBy5(true) должна возвратить 5;
// функция multBy5(false) должна возвратить 0;
// функция multBy5(null) должна возвратить 0;
// функция multBy5('a') должна возвратить NaN;
// функция multBy5(undefined) должна возвратить NaN.
//     функция multBy5('a' * 5) должна возвратить "Value is NaN";
// функция multBy5(NaN) должна возвратить "Value is NaN";
// функция multBy5(+'hello') должна возвратить "Value is NaN".

function multBy5(value){
    if(Number.isNaN(value)) return 'Value is NaN';
    else return value * 5;
}
console.log(multBy5(+'hello')); //Value is NaN
console.log(multBy5(true)); //5
console.log('-------------------------------')

//Подсчитайте количество бесконечных значений в массиве
// Напишите функцию countInfinity, которая принимает массив arr в качестве аргумента и возвращает
// количество элементов массива, не являющихся конечными.
// функция countInfinity([Infinity, 1/0, -10/0, 12]) должна возвратить 3, так как данный массив
// содержит три элемента, имеющих не конечные значения: это Infinity, 1/0, -10/0 ;
// функция countInfinity([1, 100, 10, -10]) должна возвратить 0 (все значения в массиве являются конечными);
// функция countInfinity([Infinity, NaN]) должна возвратить 2 (оба значения Infinity, NaN не конечны).
function countInfinity(arr){
    let count = 0;
    for(let elm of arr){
        if(!isFinite(elm)){
            count +=1;
        }
    }
    return count;
}
console.log(countInfinity([Infinity, 1/0, -10/0, 12])); //3
console.log(countInfinity([1, 100, 10, -10])); //0
console.log(countInfinity([Infinity, NaN])); //0
console.log('-------------------------------')

//Является ли результат операции деления двух чисел конечным числом?
// Напишите функцию checkingForFinite, которая принимает две числа
// a и b в качестве аргументов, выполняет деление числа a на число b и проверяет
// результат деления (частное чисел) на конечность. Функция должна возвратить true, если результат -
// конечное число, и false - в противном случае.
// функция checkingForFinite(4, 2) должна возвратить true;
// функция checkingForFinite(3, 0) должна возвратить false;
// функция checkingForFinite(-1, 0) должна возвратить false
function checkingForFinite(a, b){
    if(isFinite(a/b) ) return true;
    return false
}
console.log(checkingForFinite(4, 2)); //true
console.log(checkingForFinite(3, 0)); //false
console.log('-------------------------------')

//Является ли целое число безопасным числом для вычислений?
//Напишите функцию safeNumber, которая принимает целое число x, и возвращает true,
// если переменная x содержит безопасное целочисленное значение, и false - в противном случае.
// функция safeNumber(20000) должна возвратить true;
// функция safeNumber(9007199254740991) должна возвратить true;
// функция safeNumber(9007199254740992) должна возвратить false.
function safeNumber(x){
    if(Number.isSafeInteger(x)) return true;
    return false;
}
console.log(safeNumber(20000)); //true
console.log(safeNumber(9007199254740992)) //false
console.log('-------------------------------')

//Подсчитайте количество безопасных значений в массиве
//Напишите функцию countOfSafeNumbers, которая принимает массив arr в качестве аргумента и возвращает
// количество элементов массива, являющихся числами, безопасными для вычислений.
// функция countOfSafeNumbers([Infinity, 9007199254740991, -Infinity, 0]) должна возвратить 2;
// функция countOfSafeNumbers([1, 3, 10, -10, NaN) должна возвратить 4;
// функция countOfSafeNumbers([Infinity, NaN]) должна возвратить 0.
function countOfSafeNumbers(arr){
    let count = 0;
    for(let elm of arr){
        if(Number.isSafeInteger(elm)){
           count++
        }
    }
    return count;
}
console.log(countOfSafeNumbers([Infinity, NaN])); //0
console.log(countOfSafeNumbers([1, 3, 10, -10, NaN]));