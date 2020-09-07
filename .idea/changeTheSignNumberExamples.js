// //Изменение знака числа
// Дано число. Получить число, обратное данному.
//     Напишите функцию с именем oppositeNumber, которая принимает число num
// в качестве аргумента и возвращает противоположное по знаку число.
// функция oppositeNumber(9) должна возвратить -9;
// функция oppositeNumber(-7) должна возвратить 7;
// функция oppositeNumber(0) должна возвратить 0.
function oppositeNumber(num){
return num<0? (-num): -num;
}
console.log(oppositeNumber(7));
console.log('------------------------------------')
//Изменение знака числа большего из двух чисел
// Напишите функцию с именем changeMax, которая принимает два числа a и b в качестве аргументов,
//     меняет знак большего из чисел на противоположный и возвращает это число.
//     Если числа равны, вернуть сообщение "The numbers are equal".
// функция changeMax(9, 4) должна возвратить -9;
// функция changeMax(1, 6) должна возвратить -6;
// функция changeMax(0, 4) должна возвратить -4;
// функция changeMax(-1, -3) должна возвратить 1;
// функция changeMax(4, 4) должна возвратить "The numbers are equal".
function changeMax(a, b){
    if(a===b) return 'The numbers are equal';
    if(a > b) return -a;
    if(a < b) return -b;
}
console.log( changeMax(1, 6));
console.log( changeMax(1, 1));
