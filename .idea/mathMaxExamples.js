
/*
Максимальное из двух чисел
question
Найти большее из двух данных чисел.

    Напишите функцию max, которая принимает два числа a, b в качестве аргументов и возвращает большее число.

    Пример:

функция max(1, 5) должна возвратить 5;
функция max(7, 7) должна возвратить 7;
функция max(20, 6) должна возвратить 20.*/
function maxTwoN(a, b){
    return Math.max(a,b)
}
console.log(maxTwoN(20, 6));

/*
//Максимальное значение в массиве
Напишите функцию max, которая принимает массив arr в качестве аргумента и возвращает максимальный элемент этого массива. Если массив пустой, функция должна вернуть [].

    Примеры:

функция max([7, 88, 34, 9, 4, 45]) должна возвратить 88.
функция max([]) должна возвратить [].*/
function maxMin(arr){
    if(arr.length===0) return [];
    return Math.max(...arr);
}
console.log(maxMin([7, 88, 34, 9, 4, 45]));


/*//Максимальное и минимальное значение в массиве
Напишите функцию maxMin, которая принимает массив arr в качестве аргументов и возвращает массив, содержащий максимальное и минимальное значение: [max, min]. Если массив пустой, вернуть [].

    Пример:

функция maxMin([3, 4, 8, 1]) должна возвратить [8, 1];
функция maxMin([7, 7]) должна возвратить [7, 7];
функция maxMin([2]) должна возвратить [2, 2];
функция maxMin([]) должна возвратить [];*/
function maxAndMin(arr){
    if(arr.length===0) return [];
    return [Math.max(...arr),Math.min(...arr)] ;
}
console.log(maxAndMin([3, 4, 8, 1]));
console.log(maxAndMin([7, 7]))
console.log(maxAndMin([]))

console.log('---------------------')
/*
/Разность между максимальным и минимальным значением в массиве
question
Напишите функцию differenceMaxMin, которая принимает массив arr в качестве аргумента и
возвращает разность между максимальным и минимальным значением. Если массив пустой, вернуть null.

    Пример:

функция differenceMaxMin([3, 4, 8, 1]) должна возвратить 7;
функция differenceMaxMin([7, 7]) должна возвратить 0;
функция differenceMaxMin([2]) должна возвратить 0;
функция differenceMaxMin([]) должна возвратить null;
*/
function differenceMaxMin(arr){
    if(arr.length===0) return null;
    if(Math.min(...arr)===Math.max(...arr)) return 0;
    return Math.max(...arr)-Math.min(...arr) ;
}
console.log(differenceMaxMin([3, 4, 8, 1]));

console.log('---------------------')

/*
Максимальный отрицательный элемент в массиве
question
Напишите функцию maxNegative, которая принимает массив arr в
качестве аргумента и возвращает максимальный отрицательный элемент в массиве.
Если массив arr не содержит отрицательных элементов, вернуть null.

Пример:

функция maxNegative([3, -54, 8, -21, 0]) должна возвратить -21;
функция maxNegative([7, 5]) должна возвратить null;
функция maxNegative([]) должна возвратить null.
*/
function maxNegative(arr) {
    let neg = [];
    for (let elm of arr) {
        if (elm < 0) {
            neg.push(elm)
        }
    }
    return neg.length > 0 ? Math.max(...neg) : null;
}
console.log(maxNegative([3, -54, 8, -21, 0]));
console.log(maxNegative([7, 5]));
//console.log('---------------------');
//SAME TASK USING FILTERS
function maxNegative1(arr) {
    let neg = arr.filter(elm => elm < 0);
    return neg.length > 0 ? Math.max(...neg) : null;
}
console.log(maxNegative1([3, -54, 8, -21, 0]));
console.log(maxNegative1([7, 5]));
