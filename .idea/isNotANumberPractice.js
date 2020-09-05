
// Напишите функцию isValid, которое проверяет, содержит ли аргумент value значение NaN.
//     Если аргумент является NaN, возвратить строку "Value is not a number".
//     В противном случае возвратить строку "Value is valid".
//     Используйте в решении метод Number.isNaN(value)
//     функция isValid(NaN) должна возвратить "Value is not a number";
// функция isValid('abc' * 3) должна возвратить "Value is not a number";
// функция isValid(NaN + 1) должна возвратить "Value is not a number";
// функция isValid(0/0) должна возвратить "Value is not a number";
// функция isValid('abc' + 3) должна возвратить "Value is valid";
// функция isValid(25) должна возвратить "Value is valid";
// функция isValid(1/0) должна возвратить "Value is valid";
// функция isValid('abc') должна возвратить "Value is valid".
console.log('-----------------------')
function isValid(value){
    return Number.isNaN(value) ? 'Value is not a number': 'Value is valid';
}
console.log(isValid(1/0));
console.log(isValid('abc' * 3));
console.log('-----------------------')

//Является ли величина NaN?
// Напишите функцию isArgNaN, которое проверяет, содержит ли аргумент value значение NaN.
//
//     Если аргумент является NaN, возвратить значение NaN.
//
//     В противном случае возвратить значение величины value.
//
//     Используйте в решении функцию isNaN(value)
    // функция isArgNaN(NaN) должна возвратить NaN;
    // функция isArgNaN('hello' * 2) должна возвратить NaN;
    // функция isArgNaN(NaN + 1) должна возвратить NaN;
    // функция isArgNaN(0/0) должна возвратить NaN;
    // функция isArgNaN('abc') должна возвратить NaN;
    // функция isArgNaN('a') должна возвратить NaN";
    // функция isArgNaN('2,5') должна возвратить NaN";
    // функция isArgNaN(25) должна возвратить 25;
    // функция isArgNaN(1/0) должна возвратить Infinity;
    // функция isArgNaN('23' * 3) должна возвратить 69;
    // функция isArgNaN('2.343') должна возвратить "2.343";
    // функция isArgNaN(true) должна возвратить true;
function isArgNaN(value){
    return isNaN(value) ? NaN:  value;
}
console.log(isArgNaN(NaN));
console.log(isArgNaN('hello' * 2));
console.log(isArgNaN(25));
console.log(isArgNaN(true));