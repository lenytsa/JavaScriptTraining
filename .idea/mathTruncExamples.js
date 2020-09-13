//Удаление дробной части элементов массива.
// question
// Напишите функцию integerPartsOfElements, которая принимает массив arr в качестве
// аргумента и возвращает массив, в котором элементы равны целой части своего значения.
//
//     Примеры:
//
// функция integerPartsOfElements([7.23, 34.89, 0.9, 4.45, 8.5]) должна возвратить [7, 34, 0, 4, 8].
function integerPartsOfElements(arr){
    let arrRes =[];
    for(let elm of arr){
        arrRes.push(Math.trunc(elm))
    }
    return arrRes;
}
console.log(integerPartsOfElements([7.23, 34.89, 0.9, 4.45, 8.5]));


// //Форматирование числа - n знаков в дробной части
// Напишите функцию nDecimalDigits, которая принимает числа num (исходное число) и n (количество десятичных знаков) в качестве аргументов и возвращает число num только с n знаками в дробной части. Число не требуется округлять, просто оставьте только n десятичных знаков.
//
//     Примеры:
//
// функция nDecimalDigits(6.642867, 3) должна возвратить 6.642, результат округления до трех десятичных знаков 6.643 - будет неверный.
//
//     функция nDecimalDigits(4.1567, 2) должна возвратить 4.15, результат округления до двух десятичных знаков 4.16 - будет неверный.
//
function nDecimalDigits(num, n){
    let numPowerConverter = Math.pow(10,n);
    return Math.trunc(num * numPowerConverter)/ numPowerConverter;
}
console.log(nDecimalDigits(4.1567, 3));
