//Округлите результат деления
//Даны два числа a, b. Найдите частное этих чисел, и округлите результат до ближайшего целого числа.
//
// Напишите функцию с именем quotient, которая принимает два числа a, b в качестве аргументов и возвращает частное этих чисел. Результат округлите до ближайшего целого числа.
//
// Примеры:
//
// функция quotient(59, 27) должна возвратить 2;
// функция quotient(50, 12) должна возвратить 4.
function quotient(a, b){
    return Math.round(a/b);
}
console.log(quotient(59, 27));