/*
Функция, которая всегда возвращает число 3
question
Напишите функцию three, которая всегда возвращает число 3. Совсем просто? Да, если не учитывать условия, что в
функции вы не должны использовать:

    цифры 0, 1, 2, 3, 4, 5, 6, 7, 8, 9;
знаки операций +, -, *, /, %
свойство length
Пример:

    функция three() должна возвратить 3.*/
function three(){
    return 3;
}
console.log(three());
console.log('-------------------------');

/*
Индекс минимального элемента массива
Напишите функцию indexOfMin, которая принимает непустой массив arr в качестве аргумента, и
возвращает индекс минимального элемента массива. Если массив содержит несколько минимальных элементов,
    возвратить индекс первого такого элемента.

    Пример:

функция indexOfMin([10, 3, 4, 3, 5]) должна возвратить 1;
функция indexOfMin([0, 1, 2, 3]) должна возвратить 0;
функция indexOfMin([5, 4, 6, 3]) должна возвратить 3;
функция indexOfMin([2, 2, 2, 2]) должна возвратить 0.*/
function indexOfMin(arr){
    return arr.indexOf(Math.min(...arr));
}
console.log(indexOfMin([10, 3, 4, 3,0, 5]));
console.log('-------------------------');


/*
Какой элемент встретится раньше: максимальный или минимальный?
    Напишите функцию indexMaxMin, которая принимает непустой массив arr в качестве аргумента, и возвращает строку
    "max", если индекс первого максимального элемента массива меньше индекса первого минимального элемента массива,
    и строку "min" - в противном случае. Если в массиве все элементы равны, то возвратить undefined.

    Пример:

функция indexMaxMin([1, 10, 2, -3, 8]) должна возвратить "max", так как максимальный элемент массива (10) находится
левее минимального элемента (-3) ;
функция indexMaxMin([-10, 1, 20]) должна возвратить "min", так как минимальный элемент массива (-10) находится левее
 максимального элемента (20);
функция indexMaxMin([2, 20, 20, 2]) должна возвратить "min";
функция indexMaxMin([20, 1, 1, 20]) должна возвратить "max";
функция indexMaxMin([1, 1]) должна возвратить undefined;
функция indexMaxMin([1]) должна возвратить undefined.*/
function indexMaxMin(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    if(arr.indexOf(max)=== arr.indexOf(min) || arr.length===1) return undefined;
    if(arr.indexOf(max)<arr.indexOf(min)) return 'max';
    else return 'min'
}
console.log(indexMaxMin([2, 20, 20, 2])); //min
console.log(indexMaxMin([20, 1, 1, 20])); //max
console.log(indexMaxMin([20])); //undefined
console.log('-------------------------');

/*Найдите индекс элемента в массиве
Напишите функцию indexOfValue, которая принимает непустой массив arr и величину value в качестве аргументов,
    и возвращает индекс элемента массива со значением value, или undefined - если такой элемент отсутствует.

    Пример:

функция indexOfValue([1, 3, 6, 2, 6], 6) должна возвратить 2;
функция indexOfValue([0, 1, 2], 5) должна возвратить undefined;
функция indexOfValue([4, 1, 1, 2], 1) должна возвратить 1.*/
function indexOfValue(arr, value){
    if(!arr.includes(value)) return undefined;
    return arr.indexOf(value);
}

//В следующем примере indexOf() используется для поиска всех индексов элемента в указанном массиве,
// которые с помощью push() добавляются в другой массив.
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log(indices);// [0, 2, 4];
console.log('-----------------------')

const arr = ['cat', 'CAT', '1 ', 1, 'cat'];
console.log(arr.indexOf(1, -3)); // 3
console.log(arr.indexOf('cat', 1)); // 4
console.log(arr.indexOf('1 ', 5)); // -1
console.log('-----------------------')

const arr2 = [100, 1, 100, 3, 100, 100, 6];
let elem = 100;
const indices2 = [];
let i = arr2.indexOf(elem);
while (i !== -1){
    indices2.push(i);
    i = arr2.indexOf(elem, i + 1);
}
console.log(indices2); // [0, 2, 4, 5]

const arrL = ['1', 5, 'b', NaN, 'a', 'b', 0];
console.log(arrL.lastIndexOf('b', 4));
console.log('-----------------------')
/*Последний индекс элемента массива
question
Напишите функцию lastIndexOfValue, которая принимает непустой массив arr и величину value в
 качестве аргументов, и возвращает последний индекс элемента массива со значением value, или
 "Not found" - если такой элемент отсутствует.

    Примеры:

функция lastIndexOfValue([10, 3, 4, 3, 5], 3) должна возвратить 3;
функция lastIndexOfValue([0, 1, 2, 3], 1) должна возвратить 1;
функция lastIndexOfValue([5, 4, 4, 4, 5, 3], 4) должна возвратить 3;
функция lastIndexOfValue([2, 2, 2, 2], 2) должна возвратить 3.
функция lastIndexOfValue([2, 3, -2, -4], 0) должна возвратить "Not found".*/
function lastIndexOfValue(arr, value) {
    if (!arr.includes(value)) return 'Not found';
    return arr.lastIndexOf(value);
}
console.log(lastIndexOfValue([2, 3, -2, -4], 0)); // Not found
console.log(lastIndexOfValue([2, 2, 2, 2], 2)) //3

console.log('---------------------------');
// Является ли элемент массива уникальным?
//     Напишите функцию uniqueElement, которая принимает непустой массив arr и величину value в
// качестве аргументов, и возвращает true, если элемент со значением value является уникальным (т.е.
//     встречается в массиве только один раз), и false - в противном случае.
//
//     Пример:
//
// функция uniqueElement([10, 3, 4, 3, 5], 3) должна возвратить false;
// функция uniqueElement([10, 11, 12, 13], 11) должна возвратить true;
// функция uniqueElement([10, 12, 12, 12], 10) должна возвратить true;
// функция uniqueElement([5, 4, 4, 4, 3], 4) должна возвратить false.
    function uniqueElement(arr, value){
    return arr.indexOf(value)===arr.lastIndexOf(value)? true: false;
}
console.log(uniqueElement([10, 3, 4, 3, 5], 3));//false
console.log('------------')
const arr5 = ['b', 'a', 'b', 'a', 'b', 'c'];
console.log(arr5.lastIndexOf('b', 6)); // 4
console.log(arr5.lastIndexOf('b', -3));
console.log(arr5.lastIndexOf('a'));
console.log(arr5.lastIndexOf('c', 2));
console.log(arr5.lastIndexOf('B'))
console.log('-----------------');
var positions = [];
var array3 = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
let idx1= array3.lastIndexOf(element);
while(idx1!=-1){
    positions.push(idx1);
    if(idx1>0){
        idx1 = array.lastIndexOf(element,idx1-1 );
    }
    else{
        idx1=-1;
    }
}
console.log(positions);
