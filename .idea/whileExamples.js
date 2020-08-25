let i = 1;                // задаем начальное значение переменной i
while (i <= 10) {         // задаем условие, при выполнении которого должен выполняться цикл
    console.log( i );      // выполняется действие цикла – вывод в консоль значения переменной i
    i++;                   // увеличиваем значение переменной i на 1 для перехода к следующей итерации цикла
}
console.log('-----------------------')
//Найти частное и остаток от деления без использования операций деления и нахождения остатка
// question
// Даны два положительных целых числа n и k. Используя только операции сложения и вычитания, найдите результат деления числа n на число k (частное), а также остаток от деления.
//
// Напишите функцию с именем quotientAndRemainder, которая принимает два числа n, k и возвращает частное и остаток от деления в виде массива [quotient, remainder].
//
// Примеры:
//
// функция quotientAndRemainder(5, 5) должна возвратить [1, 0];
// функция quotientAndRemainder(5, 2) должна возвратить [2, 1];
// функция quotientAndRemainder(12, 5) должна возвратить [2, 2];
// функция quotientAndRemainder(5, 7) должна возвратить [0, 5].
function quotientAndRemainder(n, k){
let q =0 //quotent
    while(n>=k){
    n = n-k; // 13-5+8, 8-5 = 3, process was done 2 times, thus quotent =2 and remainder (n) =3
    q++;
    }
    return [q,n];
}
console.log(quotientAndRemainder(13, 5));
console.log('**-----------------------**')

//find first negative element in array and his index. Note break is used in this case
let array = [2, 9, -3, 8, -8, 0, 5, -6];
let negative;
let index;
for(let i =0; i<array.length; i++)
{
    if(array[i]<0){
        negative= array[i];
        index = i;
        break;
    }
}
console.log(negative,index);
console.log('-----------------------')

//find LAST negative element in array and his index
//Note, no break needed in this case
let array1 = [2,9, -3, 8, -8, 0, 5, -6];
let negative1;
let index1;
for(let i =0; i<array1.length; i++)
{
    if(array1[i]<0){
        negative1= array1[i];
        index1 = i;
    }
}
console.log(negative1,index1);
//
console.log('**-----------------------')
//find first negative element in array and his index using function
function findFirstNegativeElement(arr) {
    let array = [0,2, -9, -3, 8, -8, 0, 5, -6];
    let negative;
    let index;
    for(let i =0; i<array.length; i++)
    {
        if(array[i]<0){
            negative= array[i];
            index = i;
            return [negative,index];
        }
    }
}
console.log(findFirstNegativeElement());
console.log('-----------------------')
//Reverse a string; Solution 1
let str = 'summer';
let resultString = '';
for(let i= str.length -1; i >=0; i-- )
    {
    resultString = resultString + str[i];
    }
console.log(resultString);
console.log('-----------------------')

//Reverse a string; Solution 2
let str2 = 'Summer';
let resultString2 = '';
for(let i=0; i<str2.length; i++ )
{
    resultString2 = str2[i]+ resultString2;
}
console.log(resultString2);
console.log('-----------------------')

//Reverse a string; Solution 3.
let sOr = 'SummeR';
let s = '';
for(let letter of sOr )
{
    s = letter + s;
}
console.log(s);

console.log('-----------------------')

//in given array, reverse each string in array
let words = ['Noon', 'sun', 'day', 'dad', 'happy'];
for(let i =0; i<words.length; i++){
    let s = '';
    for(let letter of words[i]){
        s = letter + s;
    }
    words[i] = s;
}
console.log(words);
console.log('-----------------------')

//Given 2 dimentional array. Find sum of elements inside each array and display sum in new array
let myArray = [[1,2,3], [2,2,2], [0,1,1]];
let sum = [];
for(let i=0; i < myArray.length; i++){
    let s = 0;
    for(let j=0; j < myArray[i].length; j++){
        s += myArray[i][j];
    }
    sum.push(s);
}
console.log(myArray);
console.log(sum);
console.log('-----------------------')

//Given 2 dimentional array. Find sum of elements inside each array and display sum in original array
let myArrayK = [[1,2,3], [2,2,2], [0,1,1]];
for(let i=0; i < myArrayK.length; i++){
    let s = 0;
    for(let j=0; j < myArrayK[i].length; j++){
        s += myArrayK[i][j];
    }
    myArrayK[i]=s;
}
console.log(myArrayK);
console.log('-----------------------')

//Дано целое положительное число n. Является ли это число степенью числа 3?
//
// Напишите функцию с именем powerOf3, которая принимает число n в качестве аргумента и возвращает true, если число является степенью числа 3, и false - в противном случае.
//
// При решении используйте цикл while и операции деления или умножения. Запрещается использовать методы объекта Math.
//
// Примеры:
//
// функция powerOf3(1) должна возвратить true; // так как 1 = 3 ** 0
// функция powerOf3(3) должна возвратить true; // так как 3 = 3 ** 1
// функция powerOf3(9) должна возвратить true; // так как 9 = 3 ** 2
// функция powerOf3(27) должна возвратить true. // так как 27 = 3 ** 3
// функция powerOf3(12) должна возвратить false. // так как 12 не является степенью числа 3
function powerOf3(n) {
    while (n > 1) {
        n = n/3;
    }
    return (n === 1)? true: false;
}
console.log(powerOf3(1));
console.log(powerOf3(3));
console.log(powerOf3(12));
console.log('-----------------------')

//Найдите степень числа 2
// Дано целое положительное число n, которое равно 2, возведенной в некоторую степень k:
// powerof2
// Найдите эту степень (число k).
// Напишите функцию с именем powerOf2, которая принимает число n в качестве аргумента и
// возвращает число k, такое, что 2 в степени k равно n. При решении используйте
// цикл while и операции деления или умножения. Запрещается использовать методы объекта Math.
// функция powerOf2(1) должна возвратить 0; // так как 1 = 2 ** 0
// функция powerOf2(2) должна возвратить 1; // так как 2 = 2 ** 1
// функция powerOf2(4) должна возвратить 2; // так как 4 = 2 ** 2
// функция powerOf2(32) должна возвратить 5; // так как 32 = 2 ** 5

    function powerOf2(n){
        let k =0;
        while(n>1){
        n = n /2;
        k++
    }
 return k;
}
console.log(powerOf2(32));
console.log(powerOf2(2));
console.log(powerOf2(4));
console.log(powerOf2(1));
console.log('-----------------------')

//Сумма чисел от 1 до n.
// Дано целое положительное число n. Найдите сумму чисел 1 + 2 + 3 + ... + n
//
// Напишите функцию с именем sum, которая принимает число n в качестве аргумента
// и возвращает сумму чисел от 1 до n. При решении используйте цикл while.
//     функция sum(1) должна возвратить 1;
// функция sum(2) должна возвратить 2;
// функция sum(3) должна возвратить 6;
// функция sum(10) должна возвратить 55.
function sumOfIntegers(n){
    let sum = 0;
    let i = 1;
    while (i <= n){
        sum = sum + i;
        i++;
    }
    return sum;
}
console.log(sumOfIntegers(3));
console.log('-----------------------')
//Sum all numbers till the given one using function .
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}
console.log( sumTo(3) );
console.log('-----------------------')

//Sum all numbers till the given one using function, solution 2
function findSumWithFormula(n) {
    return (n * (n + 1)) / 2
}
let n = 3;
console.log(`Sum of numbers from 1 to ${n} is ${findSumWithFormula(n)}`);
console.log('-----------------------')

//Факториал числа
// Дано целое положительное число n. Найдите факториал числа n (n! = 1 * 2 * 3 *... * n)
//
// Напишите функцию с именем factorial, которая принимает число n в качестве аргумента и возвращает
// факториал числа n,
//     т.е. произведение чисел от 1 до n. При решении используйте цикл while.
//     функция factorial(2) должна возвратить 2;
// функция factorial(3) должна возвратить 6;
// функция factorial(8) должна возвратить 40320.

function factorial(n){
    let i = 1;
    let fact = 1;
    while(i<=n){
        fact = fact * i;
        i++
    }
    return fact;
}
console.log(factorial(8));
console.log(`Factorials of numbers from 1 to ${n} is ${factorial(8)}`);
console.log('-----------------------')

//Сумма нечетных чисел от 1 до n.
// Найдите сумму нечетных чисел от 1 до n, т.е. 1 + 3 + 5 + ...
// Напишите функцию с именем sumOfOdd, которая принимает число n в качестве аргумента и возвращает
// cумму нечетных чисел от 1 до n. При решении используйте цикл while.
//     функция sumOfOdd(1) должна возвратить 1;
// функция sumOfOdd(3) должна возвратить 4;
// функция sumOfOdd(20) должна возвратить 100.
function sumOfOdd(n){
let sum =0;
let i = 1
    while(i<=n){
    if(i%2===1){
        sum = sum + i;
        }
    i++
    }
    return sum;
}
console.log(sumOfOdd(3));
console.log(sumOfOdd(20));
console.log(`Sum of odd numbers from 1 to ${n} is ${sumOfOdd(3)}`);

console.log('-----------------------')

//Произведение четных чисел от 1 до n.
// Найдите произведение четных чисел от 2 до n, т.е. 2 * 4 * 6 * ...
//
// Напишите функцию с именем multOfEven, которая принимает число n в качестве аргумента и возвращает
// произведение четных чисел от 2 до n. При решении используйте цикл while.
//
//     функция multOfEven(2) должна возвратить 2;
// функция multOfEven(6) должна возвратить 48;
// функция multOfEven(10) должна возвратить 3840.
function multOfEven(n){
let mult= 1;
let i= 1;
    while(i<=n){
        if(i%2 === 0){
            mult = mult * i;
        }
        i++
    }
return mult;
}
console.log(multOfEven(6));
console.log(`multiplication of even numbers from 1 to ${n} is ${multOfEven(6)}`);





