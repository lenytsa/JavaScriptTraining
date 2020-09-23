/*
Поменяйте местами максимальный и минимальный элементы массива
Напишите функцию changeMaxAndMin, которая принимает массив arr в качестве аргумента и возвращает массив, в котором максимальный и минимальный элементы поменялись местами. Если в массиве несколько максимальных или несколько минимальных элементов, поменять местами первые из них. Во всех тестах массив содержит минимум два элемента.

    Используйте в решении циклы. Не разрешается использование методов Math.min() и Math.max().

    Пример:

функция changeMaxAndMin([3, 4, 8, 1]) должна возвратить [3, 4, 1, 8];
функция changeMaxAndMin([3, 4, 8, 4, 1, 2, 1]) должна возвратить [3, 4, 1, 4, 8, 2, 1];
функция changeMaxAndMin([8, 8, 2, 1, 1]) должна возвратить [1, 8, 2, 8, 1];
функция changeMaxAndMin([7, 8]) должна возвратить [8, 7];
функция changeMaxAndMin([2, 2]) должна возвратить [2, 2].*/
function changeMaxAndMin(arr) {
    let min = arr[0];
    let max = arr[0];
    let minIndex=0;
    let maxIndex=0;
    let temp;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    arr[minIndex] = max;
    arr[maxIndex] = min;
    return arr;

}
console.log(changeMaxAndMin([3, 4, 8, 1]));


/*Минимальный элемент массива
Напишите функцию minInArray, которая принимает массив arr в качестве аргумента и возвращает минимальный элемент массива.

    Используйте в решении цикл. Не разрешается использование метода Math.min().

    Пример:

функция minInArray([3, 4, 8, 1]) должна возвратить 1;
функция minInArray([11, 12) должна возвратить 11;
функция minInArray([1, 1]) должна возвратить 1;
функция minInArray([]) должна возвратить undefined.*/
function minInArray(arr){
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min;
}
console.log(minInArray([3, 4, 8, 1]));
console.log(minInArray([]));
console.log('----------')

/*
Максимальный элемент массива
Напишите функцию maxInArray, которая принимает массив arr в качестве аргумента и возвращает максимальный элемент массива.

    Используйте в решении цикл. Не разрешается использование метода Math.max().

    Пример:

функция maxInArray([3, 4, 8, 1]) должна возвратить 8;
функция maxInArray([11, 12) должна возвратить 12;
функция maxInArray([1, 1]) должна возвратить 1;
функция maxInArray([]) должна возвратить undefined.*/
function maxInArray(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxInArray([3, 4, 8, 1]));