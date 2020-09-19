////Пример 4. Вывести в консоль true, если в массиве arr есть нулевой элемент, и false – в обратном случае.
let arrayNullElm = [2, 5, 7, -3, 0, -4, 9, 11];
let indexN = -1;                       // присваиваем переменной index значение -1
for (let i = 0; i < arrayNullElm.length; i++){ // в цикле проходим по массиву
    if (arrayNullElm[i] === 0){                  // если найден элемент массива, равный нулю,
        indexN = i;
        console.log(indexN);
        // изменяем значение переменной index (присваиваем значение индекса нулевого элемента)
        break;                            // прерываем цикл, т.к. нулевой элемент уже найден
    }
}

if (indexN === -1) {                   // если index = -1, значит в массиве нет нулевого элемента, и значение index не изменилось
    console.log(false);
} else {
    console.log(true);                  // если index не равен -1, значит в массиве есть нулевой элемент
}

console.log('------------------')
/*Количество положительных элементов массива
question
Напишите функцию countPositive, которая принимает массив arr в качестве аргумента, и возвращает количество положительных элементов массива.

    Пример:

функция countPositive([10, 2, -3, 8]) должна возвратить 3;
функция countPositive([0, -1, -2]) должна возвратить 0;
функция countPositive([]) должна возвратить 0.*/
function countPositive(arr){
    let count=0;
    for(let i=0;i<arr.length; i++){
        if(arr[i] > 0){
            count++
        }
    }
    return count
}
console.log(countPositive([10, 2, -3, 8]));
console.log(countPositive([0, -1, -2]));