
// Найдите сумму всех положительных целых двухзначных чисел.
//
//     Напишите функцию с именем sumOfTwoDigitsNumbers,
//     которая возвращает сумму чисел от 10 до 99 включительно. В решении используйте цикл do while.
 function sumOfTwoDigitsNumbers(){
    let sum =0;
    let i = 10;
do {
    sum = sum + i;
    i++
} while(i<=99)
     return sum;
}
console.log(sumOfTwoDigitsNumbers());

