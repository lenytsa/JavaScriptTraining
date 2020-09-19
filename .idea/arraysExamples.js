/*

Массив из чисел от 1 до n
question
Напишите функцию createArray, которая принимает число n в качестве аргумента и возвращает массив, содержащий натуральные числа от 1 до данного числа n: [1, 2, 3, ...., n].

Если n = 0, вернуть пустой массив [].

    Пример:

функция createArray(3) должна возвратить [1, 2, 3];
функция createArray(7) должна возвратить [1, 2, 3, 4, 5, 6, 7];
функция createArray(1) должна возвратить [1];
функция createArray(0) должна возвратить [].
*/
function createArray(n){
    let arrRes=[];
    if(n===0)return [];
    for(let i=1; i<=n; i++){
        arrRes.push(i);
    }
    return arrRes;
}
console.log(createArray(3));
console.log(createArray(7));

console.log('----------------')
/*
Создайте массив чисел в обратном порядке - от n до 0.
Напишите функцию createReverseArray, которая принимает целое неотрицательное число n в качестве аргумента и возвращает массив, содержащий целые числа от n до 0: [n, n-1, ..., 3, 2, 1, 0].

Пример:

    функция createReverseArray(5) должна возвратить [5, 4, 3, 2, 1, 0];
функция createReverseArray(2) должна возвратить [2, 1, 0];
функция createReverseArray(1) должна возвратить [1, 0];
функция createReverseArray(0) должна возвратить [0].*/
function createReverseArray(n){
    let res=[];
    for(let i=n; i>=0; i--){
        res.push(i);
    }
    return res;
}
console.log(createReverseArray(5));

console.log('----------------')

/*
Создайте массив из чисел, кратных 10
Напишите функцию createArray, которая принимает целое неотрицательное число n в качестве аргумента и возвращает массив, содержащий n чисел, кратных 10.

Пример:

    функция createArray(5) должна возвратить [10, 20, 30, 40, 50];
функция createArray(2) должна возвратить [10, 20];
функция createArray(1) должна возвратить [10];
функция createArray(0) должна возвратить [].*/
function createArray(n){
    let arr=[];
    for(let i=1; i<=n; i++){
            arr.push(i*10);
    }
    return arr;
}
console.log(createArray(2));

console.log('------------------------------')

/*
Создайте массив из n четных чисел
Напишите функцию createEvenArray, которая принимает целое неотрицательное число n в качестве аргумента
 и возвращает массив, содержащий n четных чисел.

    Пример:

функция createEvenArray(5) должна возвратить [0, 2, 4, 6, 8];
функция createEvenArray(2) должна возвратить [0, 2];
функция createEvenArray(1) должна возвратить [0];
функция createEvenArray(0) должна возвратить [].*/

function createEvenArray(n){
    let newArr = [];
    let i=0;
    while(newArr.length!==n){
        if(i%2===0)
            newArr.push(i);
        i++
    }
    return newArr
}
console.log(createEvenArray(5));
console.log(createEvenArray(8));
console.log(createEvenArray(2));
console.log('------------------------------')

/*
Создайте массив из n нечетных чисел
Напишите функцию createOddArray, которая принимает целое неотрицательное число n в качестве аргумента и возвращает массив, содержащий n нечетных чисел.

    Пример:

функция createOddArray(5) должна возвратить [1, 3, 5, 7, 9];
функция createOddArray(2) должна возвратить [1, 3];
функция createOddArray(1) должна возвратить [1];
функция createOddArray(0) должна возвратить [].*/
function createOddArray(n){
    let newArr = [];
    let i=0;
    while(newArr.length!==n){
        if(i%2!==0)
            newArr.push(i);
        i++
    }
    return newArr
}
console.log(createOddArray(5))
console.log(createOddArray(0))
console.log('++------------------------------')

/*
Добавьте элемент в конец массива
Напишите функцию pushElement, которая принимает массив arr и величину value в качестве аргументов,
добавляет величину value в конец массива и возвращает полученный массив.

    Пример:

функция pushElement([1, 2, 3], "a") должна возвратить [1, 2, 3, "a"];
функция pushElement([0, 0, 0], 5) должна возвратить [0, 0, 0, 5];
функция pushElement([], 1) должна возвратить [1].*/
function pushElement(arr, value){
    arr.push(value);
    return arr;
}
console.log(pushElement([1, 2, 3], "a"))
console.log('------------------------------')

/*Создайте массив из отрицательных чисел
Напишите функцию createNegativeArray, которая принимает целое неотрицательное
число n в качестве аргумента и возвращает массив, содержащий n отрицательных чисел от -1 до -n.

    Пример:

функция createNegativeArray(5) должна возвратить [-1, -2, -3, -4, -5];
функция createNegativeArray(2) должна возвратить [-1, -2];
функция createNegativeArray(1) должна возвратить [-1];
функция createNegativeArray(0) должна возвратить [].*/
function createNegativeArray(n){
    let newArr = [];
    let i=1;
    while(newArr.length!==n){
            newArr.push(-i);
        i++
    }
    return newArr;
}
console.log(createNegativeArray(5))
console.log('------------------------------')

/*
Создайте массив из чисел с чередованием знаков
Напишите функцию alternationAtrray, которая принимает целое неотрицательное число n в качестве аргумента и возвращает массив, содержащий числа от 0 до n, в котором четные числа положительны, а нечетные отрицательны.

    Пример:

функция alternationAtrray(5) должна возвратить [0, -1, 2, -3, 4, -5];
функция alternationAtrray(2) должна возвратить [0, -1, 2];
функция alternationAtrray(1) должна возвратить [0, -1];
функция alternationAtrray(0) должна возвратить [0].*/
function alternationAtrray(n){
    let res=[];
    let i = 0;
    while(res.length <= n){
        if(i%2===0){
            res.push(i)
        }else if(i%2!==0){
            res.push(-i)
        }
        i++
    }
    return res;
}
console.log(alternationAtrray(5));

console.log('------------------------------')

/*
Создайте массив из целых чисел от n до m
Напишите функцию createArrayFromNToM, которая принимает целые неотрицательные числа n,
m (n < m) в качестве аргументов и возвращает массив, содержащий числа от n до m. Во всех
тестах гарантируется, что n < m, вам не надо проверять это условие в функции.

    Пример:

функция createArrayFromNToM(5, 10) должна возвратить [5, 6, 7, 8, 9, 10].*/
function createArrayFromNToM(n, m){
    let res= [];
    for(let i=n; i<=m; i++){
        res.push(i);
    }
    return res;
}
console.log(createArrayFromNToM(5, 10));
console.log('-==-----------------------------')

/*Создайте массив из n одинаковых элементов m
Напишите функцию createArray, которая принимает число n и величину m в
качестве аргументов и возвращает массив, содержащий n элементов, равных m.

    Пример:

функция createArray(5, 1) должна возвратить [1, 1, 1, 1, 1].
    функция createArray(3, 10) должна возвратить [10, 10, 10].
    функция createArray(4, 'a') должна возвратить ['a', 'a', 'a', 'a']*/
function createArray(n, m){
    let res = [];
    let i = m;
    while(res.length !==n){
        res.push(m);
    }
    return res;
}
console.log(createArray(5, 1));
console.log(createArray(3, 10));
console.log(createArray(4, 'a'));

//возводит в квадрат каждый элемент массива
let arr = [2,3,5]
function array (arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(array(arr)); //[ 4, 9, 25 ]