//EXAMPLE OF continue
let arr = [1, 3,5, -1, 4,];       // задан массив чисел
let sum = 0;                         // переменной sum присваивается начальное значение
for (let i = 0; i < arr.length; i++) {   // цикл, проходящий по массиву
    if (arr[i] === -1) {                // если элемент массива равен -1
        continue;			     // цикл прерывается и происходит переход к команде следующей после цикла
    }
    sum += arr[i];                      // прибавить элемент к сумме
}
console.log(sum);
console.log('--------------------------------------')

//EXAMPLE OF CONTINUE, sum of even numbers using continue
//Найти сумму четных чисел от 0 до 10 (2 + 4 + 6 + 8 + 10).
let x = 0;               // начальное значение числа
let sum1 = 0;             // начальное значение суммы
while (x <= 10) {        // проверка условия окончания цикла
    x++;                   // увеличение числа на 1
    if (x % 2 === 0) {      // если число четное
        sum1 += x;            // прибавить число к сумме
    } else {                // иначе
        continue;            // пропустить итерацию цикла
    }
}
console.log(sum);        // вывод результата в консоль после окончания цикла
console.log('--------------------------------------')

//Найти сумму нечетных чисел от 0 до 10 (1 + 3 + 5 + 7 + 9)
let sumarry = 0;                    // начальное значение суммы
for (let x = 0; x <= 10; x++) { // цикл перебирает все числа от 0 до 10 с шагом 1
    if (x % 2 !== 0) {             // если число нечетное
        sumarry += x;                   // прибавление числа к сумме
    } else {
        continue;                   // в противном случае – пропуск итерации цикла
    }
}
console.log(sum);               // вывод суммы в консоль
console.log('--------------------------------------')

//В приведенных примерах можно было обойтись без директивы continue,
// используя неполную форму оператора if (без части else), например:
let sumM = 0;                    // начальное значение суммы
for (let x = 0; x <= 10; x++) { // цикл перебирает все числа от 0 до 10 с шагом 1
    if (x % 2 !== 0) {             // если число нечетное
        sumM += x;                   // прибавление числа к сумме
    }
}
console.log(sumM);               // вывод суммы в консоль
console.log('--------------------------------------')

for (let x = 1; x <= 100; x++) { // цикл перебирает все числа от 1 до 100 с шагом 1
    if (x === 50) {                // если число равно 50
        continue;                    // пропустить итерацию цикла
    }
    console.log(x);                  // вывод числа в консоль
}
console.log('--------------------------------------')

//Пример 4. Вывести в консоль все числа от 1 до 100, кроме числа 50.
for (let x = 1; x <= 100; x++) { // цикл перебирает все числа от 1 до 100 с шагом 1
    if (x === 50) {                // если число равно 50
        continue;                    // пропустить итерацию цикла
    }
    console.log(x);                  // вывод числа в консоль
}
console.log('--------------------------------------')

//Определите, есть ли в массиве отрицательный элемент.
// question
// Напишите функцию с именем isNegativeInArray, которая принимает массив arr в качестве аргумента и возвращает true, если в массиве есть хотя бы один отрицательный элемент, и false в противном случае. В решении необходимо использовать оператор break.
//
// Указание. Присвойте некоторой переменной значение false. Пройдите по массиву в цикле,
// и если встретится отрицательный элемент, присвойте этой переменной значение true и выполните прерывание цикла.
//
// Примеры:
//
// функция isNegativeInArray([1, 2, 3, 9, 0]) должна возвратить false;
// функция isNegativeInArray([2, 1, -3, 4, 3]) должна возвратить true;
// функция isNegativeInArray([2, 1, -3, -4, 3]) должна возвратить true.
function isNegativeInArray(arr){
    for(let i=0; i< arr.length; i++)
{
    if(arr[i]<0){
        return true
        break;
    }
}
return false;
}
console.log(isNegativeInArray([1, 2, 3, 9, 0]));
console.log(isNegativeInArray([1, 2, -3, 9, 0]));
console.log('--------------------------------------')

//Найдите в массиве первый четный элемент и его индекс.
// Напишите функцию с именем firstEvenElement, которая принимает массив arr в качестве аргумента и
// возвращает первый четный элемент и его индекс в виде массива [element, index]. Если в массиве нет ни
// одного четного элемента,
// вернуть пустой массив []. В решении необходимо использовать оператор break.
//     функция firstEvenElement([1, 2, 3, 4, 9, 0]) должна возвратить [2, 1];
// функция firstEvenElement([2, 1, -3, 4, 3]) должна возвратить [2, 0];
// функция firstEvenElement([9, 1, -3, -4, 12, 6]) должна возвратить [-4, 3];
// функция firstEvenElement([9, 1, -3, 3, 11]) должна возвратить [].
function firstEvenElement(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 ===0){
            return [arr[i],i];
            break;
        }
    }
    return []
}
console.log(firstEvenElement([1, 2, 3, 4, 9, 0]));
console.log(firstEvenElement([2, 1, -3, 4, 3]));
console.log(firstEvenElement([9, 1, -3, 3, 11]));
console.log(firstEvenElement([9, 1, -3, -4, 12, 6]));
console.log('--------------------------------------')

//
//Определите, содержит ли массив заданное значение.
// Напишите функцию с именем isElementIncluded, которая принимает числовой массив arr и
// число x в качестве аргументов и возвращает true, если в массиве есть элемент x, и false в противном случае.
//     В решении необходимо использовать оператор break.
//     функция isElementIncluded([10, 0, 4, 5, 9, 30], 0) должна возвратить true;
// функция isElementIncluded([2, 1, -3, 1, 4, 3], 1) должна возвратить true;
// функция isElementIncluded([2, 1, -3, -4, 3], 0) должна возвратить false.
function isElementIncluded(arr, x){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===x){
           return true;
           break;
        }
    }
    return false;
}
console.log(isElementIncluded([10, 0, 4, 5, 9, 30], 0));
console.log(isElementIncluded([2, 1, -3, 1, 4, 3], 0));
console.log('--------------------------------------')

//Содержит ли строка данный символ?
// Напишите функцию с именем iSymbInString, которая принимает строку str и символ symb в качестве аргументов
// и возвращает true, если в строке встречается хотя бы один символ symb, и false в противном случае.
//
// В решении необходимо использовать оператор break. Запрещено использование методов строк.
//
// Указание. Пройдите циклом по строке, и если встретится искомый символ, присвойте некоторой переменной
// значение true и выполните прерывание цикла.

// функция iSymbInString("abcd", "b") должна возвратить true;
// функция iSymbInString("abcd", "f") должна возвратить false.
function iSymbInString(str, symb){
    for(let i=0; i<str.length; i++){
        if(str[i]===symb){
            return true;
            break;
        }
    }
    return false;
}
console.log(iSymbInString("abcd", "b"));
console.log(iSymbInString("abcd", "f"));
console.log('--------------------------------------')


// Получить массив из целых чисел от 1 до n, за исключением данного числа x.
//     Напишите функцию с именем fillArray, которая принимает числа n (n >= 1) и x (1 <= x <= n) в качестве аргументов
// и возвращает
// массив из целых чисел от 1 до n включительно, за исключением числа x.
//     В решении необходимо использовать оператор continue.
//     функция fillArray(5, 2) должна возвратить [1, 3, 4, 5]; // числа от 1 до 5, за исключением числа 2.
// функция fillArray(10, 5) должна возвратить [1, 2, 3, 4, 6, 7, 8, 9, 10]; // числа от 1 до 10, за исключением числа 5.
// функция fillArray(3, 1) должна возвратить [2, 3]; // числа от 1 до 3, за исключением числа 1.
// функция fillArray(5, 5) должна возвратить [1, 2, 3, 4]; // числа от 1 до 5, за исключением числа 5.
// функция fillArray(1, 1) должна возвратить []; // числа от 1 до 1, за исключением числа 1, т.е. пустой массив
function fillArray(n, x){
    let arr=[];
    for(let i=1; i<=n; i++ ){
        if(i===x){
            continue;
        }
       arr.push(i);
    }
    return arr;
}
console.log(fillArray(5, 5));
console.log(fillArray(3, 1))
console.log(fillArray(1, 1))