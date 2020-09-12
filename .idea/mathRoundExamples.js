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

console.log('-------------------------------')
//Расстояние от Земли до Луны
// В настоящее время астрономы с помощью современных приборов с лазерным лучом могут определять расстояние между Землей и Луной с точностью до нескольких сантиметров. В один из дней наблюдения Луна приблизилась к Земле на расстояние distance см. Вычислите это расстояние в метрах и километрах, округлив результаты до ближайших целых чисел.
//
//     Напишите функцию с именем distanceToMoon, которая принимает значение distance (расстояние в сантиметрах) в качестве аргумента и возвращает массив [distanceInKm, distanceInMeters].
//
//     Пример:
//
// функция distanceToMoon(38020012375) должна возвратить [380200, 380200124].
function distanceToMoon(distance){
    return [Math.round(distance/100000), Math.round(distance/100)]
}
console.log(distanceToMoon(38020012375));
console.log('-------------------------------')


//Сила гравитации
// Силу гравитации, с которой Земля притягивает тело, находящееся на её поверхности или вблизи неё, называют силой тяжести.
//
//     Силу, с которой Земля притягивает тела, можно рассчитать по формуле F=m⋅g, где m — масса тела, а g — ускорение свободного падения. Вблизи поверхности Земли значение g равно примерно 9.81 м/с**2.
//
// Напишите функцию с именем forceOfGravity, которая принимает значение m (масса тела в килограммах) в качестве аргумента и возвращает значение силы тяжести, округленное до ближайшего целого числа.
//
//     Пример:
//
// функция forceOfGravity(10) должна возвратить 98.
function forceOfGravity(m){
    return Math.round(m*9.81);
}
console.log(forceOfGravity(10))
console.log('-------------------------------')


//Округление значений элементов массива.
// Напишите функцию roundElementsOfArray, которая принимает массив arr в качестве аргумента и
// возвращает массив, в котором все элементы округлены до ближайшего целого числа.
//
//     Примеры:
//
// функция roundElementsOfArray([10.23, 34.89, 0.1, 4.45, 8.5]) должна возвратить [10, 35, 0, 4, 9].
function roundElementsOfArray(arr){
    let resArr = [];
    for(let elm of arr){
        resArr.push(Math.round(elm))
    }
    return resArr;
}
console.log(roundElementsOfArray([10.23, 34.89, 0.1, 4.45, 8.5]))

console.log('-------------------------------')

