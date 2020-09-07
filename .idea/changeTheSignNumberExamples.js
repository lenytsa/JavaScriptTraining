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
