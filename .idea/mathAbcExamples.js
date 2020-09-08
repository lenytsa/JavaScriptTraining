//Какая из двух точек ближе к точке a?
//
// Три точки a, b, c с различными координатами лежат на числовой оси. Определите, какая из двух точек:
//     b или c ближе к точке a.
//     threePoints
// Напишите функцию с именем nearestPoint, которая принимает три числа a, b, c
// (координаты трех точек на числовой оси) в качестве аргументов и возвращает:
//     строку "b", если точка b ближе к точке a,
//     строку "c", если точка c ближе к точке a,
//     строку "distances are equal", если расстояния от точек b и c до точки a равны.
//     Примеры:
// функция nearestPoint(9, 6, 14) должна возвратить "b";
// функция nearestPoint(3, 0, 4) должна возвратить "c";
// функция nearestPoint(0, 2, -4) должна возвратить "b"
function nearestPoint(a, b, c){
    if((Math.abs(a -c))< (Math.abs(a-b))) return 'c';
    else if((Math.abs(a -c))> (Math.abs(a-b))) return 'b';
    else if(((Math.abs(a -c))== (Math.abs(a-b))))
        return 'distances are equal';
}
console.log( nearestPoint(9, 6, 14)); //b
console.log( nearestPoint(3, 0, 4));
console.log( nearestPoint(0, 2, -4));

//Найдите модуль числа без использования метода Math.abs(x).
// Найдите модуль числа x без использования метода Math.abs(x).
//     Напишите функцию с именем absValue, которая принимает число x в качестве аргумента и возвращает модуль
// этого числа. Решите эту задачу без использования метода Math.abs(x).
//     Примеры:
// функция absValue(-1) должна возвратить 1;
// функция absValue(5) должна возвратить 5;
// функция absValue(0) должна возвратить 0.
function absValue(x){
    if(x<0) return -x;
    if(x>0) return x;
    if(x===0)return 0;
}
console.log()