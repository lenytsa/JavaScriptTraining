
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
console.log('----------------------------------')
//Царевна-лягушка
// Царевна-лягушка съедает ежедневно на 3 комара больше, чем в предыдущий день. Определите,
//     в какой день количество съеденных комаров превысит 1000, если в первый день было съедено n комаров.
//
//     Напишите функцию с именем frogPrincess, которая принимает число n (количество комаров в первый день)
// и возвращает количество дней, в течение которых лягушка съест 1000 комаров.
//
//     В решении используйте цикл do while.

function frogPrincess(n){
let dayCount= 0;
let sum = 0;
do{
    dayCount++
    sum = sum + n;
    n = n + 3;

}while(sum<=1000)
    return dayCount;
}
console.log(frogPrincess(99));
console.log('----------------------------------')

//Спортивный бег.
// Начав тренировки, спортсмен в первый день занятий пробежал n км. Каждый последующий день
//он увеличивал норму на 10% от нормы предыдущего дня. Определите, сколько километров пробежит
// спортсмен в 10-й день занятий.
//
//     Результат округлите до целого с помощью Math.round().
//
//     Напишите функцию с именем running, которая принимает число n
//     (количество километров в 1 день) и возвращает количество километров в 10-й день занятий.
//     В решении используйте цикл do while.
// функция running(1) должна возвратить 2;
// функция running(5) должна возвратить 12;
// функция running(10) должна возвратить 24.

function running(n){
    let totalKm = n;
    let i = 1;
do{
    totalKm = totalKm * 1.1;
    i++
}while(i<10 )
    return Math.round(totalKm);
}
console.log(running(10));
console.log('----------------------------------')

// Вклад в банк (простой процент)
// question
// Вкладчик положил 1000 долларов в банк. Ежегодно эта сумма увеличивается на p (p > 0) процентов от
// начальной суммы вклада. Через сколько лет на счету будет 1500 долларов?
//
//     Напишите функцию с именем bankPercent, которая принимает число p (банковский процент) и
// вычисляет, через сколько лет на счету будет 1500 долларов.
//
//     В решении используйте цикл do while.
// функция bankPercent(10) должна возвратить 5;
// функция bankPercent(5) должна возвратить 10;
// функция bankPercent(13) должна возвратить 4.

function bankPercent(p){
    let years = 0;
    let sum = 1000;
    do {
        sum = sum + 1000/100 * p;
        years++;
    } while (sum < 1500);
    return years;
}
console.log(bankPercent(13))