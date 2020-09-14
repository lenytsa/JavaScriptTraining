
/*
Максимальное из двух чисел
question
Найти большее из двух данных чисел.

    Напишите функцию max, которая принимает два числа a, b в качестве аргументов и возвращает большее число.

    Пример:

функция max(1, 5) должна возвратить 5;
функция max(7, 7) должна возвратить 7;
функция max(20, 6) должна возвратить 20.*/
function max(a, b){
    return Math.max(a,b)
}
console.log(max(20, 6));

/*
//Максимальное значение в массиве
Напишите функцию max, которая принимает массив arr в качестве аргумента и возвращает максимальный элемент этого массива. Если массив пустой, функция должна вернуть [].

    Примеры:

функция max([7, 88, 34, 9, 4, 45]) должна возвратить 88.
функция max([]) должна возвратить [].*/
function max(arr){
    if(arr.length===0) return [];
    return Math.max(...arr);
}