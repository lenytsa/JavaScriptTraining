//Минимальное из двух чисел
/*Найти меньшее из двух данных чисел.

    Напишите функцию min, которая принимает два числа a, b в качестве аргументов и возвращает наименьшее число.

    Пример:

функция min(13, 45) должна возвратить 13;
функция min(12, 12) должна возвратить 12;
функция min(21, 12) должна возвратить 12.*/
function min(a, b){
    return Math.min(a,b);
}
console.log('---------------------')
/*
Найдите меньшее из суммы и разности двух чисел.Что меньше - сумма чисел или иx разность? Для данных двух чисел найти меньшее значение из их суммы и разности.

    Напишите функцию minValue, которая принимает два числа a, b в качестве аргументов и возвращает меньшее значение из суммы (a + b) и разности (a - b).

    Пример:

функция minValue(1, 2) должна возвратить -1 (меньшее из суммы 1 + 2 = 3 и разности 1 - 2 = -1)
функция minValue(1, -2) должна возвратить -1(меньшее из суммы 1 + (-2) = -1 и разности 1 - (-2) = 3)*/
function minValue(a, b){
 return Math.min(a - b, a + b)
}
console.log('---------------------')

/*
Минимальное значение в массиве
Напишите функцию min, которая принимает массив arr в качестве аргумента и возвращает минимальный элемент этого массива. Если массив пустой, функция должна вернуть [].

    Примеры:

функция min([7, 23, 34, 9, 4, 45]) должна возвратить 4.
функция min([]) должна возвратить [].*/
function min(arr){
    if(arr.length===0) return [];
    return Math.min(...arr);
}
console.log(min([7, 23, 34, 9, 4, 45]));
console.log('---------------------')

/*Кто получит приз?
    В заплыве участвовало 3 спортсмена. Результаты соревнований хранятся в виде массива:

    [[name1, time1], [name2, time2], [name3, time3]].

        Определите время победителя.

    Напишите функцию с именем victoryInSwim, которая принимает массив arr, хранящий результаты соревнований, в качестве аргумента и возвращает наименьшее время. Во всех тестах количество спорсменов всегда равно 3.

Пример:

    функция victoryInSwim([['Nick',8], ['Bob', 10], ['Kim', 6]]) должна возвратить 6.*/


function victoryInSwim(arr){
    let min = Math.min(arr[0][1],arr[1][1],arr[2][1]);
   return min;
}
console.log(victoryInSwim([['Nick',8], ['Bob', 10], ['Kim', 6]]));
console.log(victoryInSwim([['Nick',12], ['Aidan', 23], ['Kim', 23]]));

console.log('---------------------')

/*
//Минимальный из квадратов
Даны четыре числа - площади четырех квадратов. Найти сторону наименьшего квадрата.

    Напишите функцию minSquareSide, которая принимает четыре числа a, b, c, d (площади четырех квадратов) в качестве аргументов и возвращает сторону наименьшего квадрата.

    Пример:

функция minSquareSide(9, 4, 16, 81) должна возвратить 2 (минимальная площадь квадрата = 4, его сторона = 2).
*/
function minSquareSide(a, b, c, d){
    let min = Math.min(a,b,c,d);
    return Math.sqrt(min)
}
console.log('---------------------')

/*
Минимальный положительный элемент в массиве
Напишите функцию minPositive, которая принимает массив arr в качестве аргумента и возвращает минимальный
положительный элемент в массиве. Если массив arr не содержит положительных элементов, вернуть null.

    Пример:

функция minPositive([3, 6, 8, -4, -3, 2, 16]) должна возвратить 2;
функция minPositive([7, 5]) должна возвратить 5;
функция minPositive([-7, -5]) должна возвратить null;
функция minPositive([]) должна возвратить null.*/
function minPositive(arr){
    let positive =[];
    for(let elm of arr){
        if(elm > 0){
            positive.push(elm)
        }
    }
    return positive.length>0?  Math.min(...positive) : null;
}
console.log(minPositive([3, 6, 8, -4, -3, 2, 16]));
console.log(minPositive([7,5]));
console.log(minPositive([-7,-3]));

console.log('======')


console.log('222---------------------')
console.log(Math.min(undefined));
console.log(Math.min('2', 1.99, 4));
let a = 25;
let b = -25;
let res = Math.min(a, b); // ?
console.log(res)