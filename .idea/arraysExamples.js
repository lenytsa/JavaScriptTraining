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