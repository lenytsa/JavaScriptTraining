// Корень квадратный из числа
// Напишите функцию с именем squareRoot, которая принимает число x в качестве аргумента и возвращает
//
// корень квадратный из x, если x >= 0,
//     сообщение "Root of a negative number is NaN", если x < 0.
// Результат округлите до двух десятичных знаков.
// функция squareRoot(9) должна возвратить 3;
// функция squareRoot(0) должна возвратить 0;
// функция squareRoot(-4) должна возвратить "Root of a negative number is NaN".
function squareRoot(x){
    return x>=0? +Math.sqrt(x).toFixed(2):'Root of a negative number is NaN'
}
console.log(squareRoot(9));
console.log(squareRoot(-4));

console.log('----------------')
//Является ли данное число квадратом некоторого числа?
// Напишите функцию с именем isSquare, которая принимает число x в качестве аргумента и возвращает строку вида
//
// x is square of y, если число x является квадратом некоторого числа y,
//     сообщение x is not a square, если число x не является квадратом целого числа.
//     Указание. Вам надо проверить, является ли корень квадратный из числа целым числом.
//     Например, корень из 9 равен 3 (целое число), корень из 7 не является целым числом. Проверить,
//     что число x является целым, можно с помощью проверки выполнения условия x % 1 === 0
//     (это условие истинно для целых чисел и ложно для нецелых чисел).
//
// Примеры:
//
//     функция isSquare(9) должна возвратить "9 is square of 3";
// функция isSquare(0) должна возвратить "0 is square of 0";
// функция isSquare(7) должна возвратить "7 is not a square".

function isSquare(x){
    return Math.sqrt(x)%1===0 ?`${x} is square of ${Math.sqrt(x)}`: `${x} is not a square`;
}
console.log(isSquare(9));
console.log(isSquare(7));

console.log('---------------')
// Вычислите значение выражения.
//     Даны значения переменных a, b, c. Вычислите значение выражения:
//
//     expression
//
// Напишите функцию с именем expression, которая принимает значения переменных a, b, c в качестве
// аргументов и возвращает значение выражения, округленное до двух десятичных знаков.
//
// функция expression(1, 1, 1) должна возвратить 1;
// функция expression(6, 1, 7) должна возвратить 2.45.

function expression(a, b, c){
    return +(Math.sqrt(a) + (Math.sqrt(Math.abs(b-c))/(Math.pow(a,3) + Math.pow(b,2) + Math.pow(c,4)))).toFixed(2);
}
console.log(expression(1, 1, 1)); //1
console.log(expression(6, 1, 7))
console.log('--------------------------------------')

//Решение квадратного уравнения
//Solving a quadratic equation
// Даны значения коэффициентов квадратного уравнения a, b, c. Найдите корни уравнения, или верните сообщение "There are no roots".
//     sqEquation
// Напомним, что для нахождения корней квадратного уравнения надо найти дискриминант по формуле:
//     d.
//
//         Если D < 0, уравнение корней не имеет. В противном случае корни уравнения можно найти по формулам:
//
//     roots
//
// Напишите функцию с именем quadraticEquation, которая принимает значения переменных a,
//     b, c в качестве аргументов и возвращает корни уравнения в виде массива [x1, x2], или сообщение "There are no roots".
//
// функция quadraticEquation(1, 2, 1) должна возвратить [-1, -1];
// функция quadraticEquation(5, 6, 1) должна возвратить [-0.2, -1];
// функция quadraticEquation(1, 1, 1) должна возвратить "There are no roots".
function quadraticEquation(a, b, c){
    let d = b * b - 4 * a * c;
    let x1= (-b + Math.sqrt(d))/(2*a);
    let x2 =(-b - Math.sqrt(d))/(2*a);
        if(d>0){
            return [x1, x2]
        }
         else if(d==0){
            x1=x2= -b / (2 * a);
            return [x1,x2]
        }
        else if(d<0){ return 'There are no roots';
    }
 }
console.log(quadraticEquation(1, 2, 1)); //[-1, -1];
console.log(quadraticEquation(1, 1, 1));
console.log(quadraticEquation(5, 6, 1)); //[ -0.2, -1 ]