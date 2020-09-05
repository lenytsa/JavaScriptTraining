
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

function isValid(value){
    return Number.isNaN(value) ? 'Value is not a number': 'Value is valid';
}
console.log(isValid(1/0));
console.log(isValid('abc' * 3));