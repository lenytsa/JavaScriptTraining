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