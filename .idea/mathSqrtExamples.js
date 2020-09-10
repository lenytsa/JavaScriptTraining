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