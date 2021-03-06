const array = ['a', 'b', 'c', 'd', 'e'];
const oddIndex = array.filter((el, i) => i % 2); // где el - сокращенное от element, i - от index
console.log(oddIndex); // ["b", "d"]
const evenIndex = array.filter((el, i) => i % 2===0); // где el - сокращенное от element, i - от index
console.log(evenIndex); //[ 'a', 'c', 'e' ]

//Array find method examples
const trees = [
    "birch",
    "maple",
    "oak",
    "poplar"
];
const result1 = trees.find(tree => tree.startsWith("m"));// "maple"
console.log(result1);
console.log('-------------------------');

const trees1 = [
    { name: "birch", count: 4 },
    { name: "maple", count: 5 },
    { name: "oak", count: 2 }
];

const result2 = trees1.find(tree1 => tree1.name === "oak");
console.log(result2);// { name: "oak", count, 2 }

const deciduous = [
    { name: "birch", count: 4 },
    { name: "maple", count: 5 },
    { name: "oak", count: 2 }
];

const evergreens = [
    { name: "cedar", count: 2 },
    { name: "fir", count: 6 },
    { name: "pine", count: 3 }
];

// our testing function
const hasFiveOrMore = el => el.count >= 5;

const decResult = deciduous.find(hasFiveOrMore);
// { name: "maple", count: 5 }

const evgResult = evergreens.find(hasFiveOrMore);
// { name: "fir", count: 6 }
const evergreens2 = [
    { name: "cedar", count: 2 },
    { name: "fir", count: 6 },
    { name: "pine", count: 3 }
];

// suppose we need to skip the first element
const result = evergreens2.find((tree, i) => {
    if (tree.count > 1 && i !== 0) return true;
});

// { name: "fir", count: 6 }
console.log('-------------------------');

//Get item in array
const items = ['nail', 'hammer', 'bolt'];

// find array item with index of 1
const atIndex = items.find(function(element, index){
    return index === 1
})

// display array item found
console.log(atIndex);
console.log('-------------------------');


const arr4 = [-1, 7, 7, 7, -1, 0, 8, 3, 4];
const allElements = arr4.filter((el, i) => i === arr4.indexOf(el));
const duplicates = arr4.filter(el => arr4.indexOf(el) !== arr4.lastIndexOf(el));
const uniqueNotIncludeDuplicates = arr4.filter(el => arr4.indexOf(el) === arr4.lastIndexOf(el));
const duplicatesOnlyOnce = arr4.filter((el, i) => i !== arr4.indexOf(el) && i === arr4.lastIndexOf(el));

console.log('All elements shown with duplicates but not repeting',allElements); // [ -1, 7, 0, 8, 3, 4 ]
console.log('All duplicates',duplicates); // [ -1, 7, 7, 7, -1 ]
console.log('Unique no include duplicates', uniqueNotIncludeDuplicates)
console.log('Duplicates without repeating',duplicatesOnlyOnce);//[ 7, -1 ]
console.log('-------------------------');

//Задание 2. Дан массив строк arr. Вернуть новый массив строк и их длину, причем длину указать в виде массива рядом
// со строкой, к которой он относится.

const arr = ['One', 'Two', 'Three', '!'];
const newArr = [];
arr.forEach(function(el) {
    newArr.push(el, [el.length]);
});
console.log(newArr); // ["One", [3], "Two", [3], "Three", [5], "!", [1]]

console.log('---------------')
let words = ['one', 'two', 'three', 'four']
words.forEach((word) => {
    console.log(word)
    if (word === 'two') {
        words.shift()
    }
})
// one
// two
// four
function reverseStr(word){
    let results='';
    for(let i=0; i <word.length; i++){
        results= word[i] + results
        //results =results + word[i]
    }
    return results;
}
//let word= 'strange';

console.log(reverseStr('123456'));
console.log('------------------------------------')

//Array.prototype.map()
/*
question
Имеется последовательность размеров прямоугольников, заданных парами своих сторон [a, b]:

[[a0, b0], [a1, b1], ..., [an, bn]]. Найдите прямоугольник с максимальной площадью.

    Напишите функцию maxRectangleSquare, которая принимает массив arr, содержащий размеры прямоугольников, в
    качестве аргумента и возвращает максимальную площадь прямоугольника.

    Пример:

функция maxRectangleSquare([[3, 4], [8, 1], [2, 3]]) должна возвратить 12;
функция maxRectangleSquare([[7, 7], [7, 8]]) должна возвратить 56;
функция maxRectangleSquare([[2, 4]]) должна возвратить 8;
функция maxRectangleSquare([]) должна возвратить null;*/
function maxRectangleSquare(arr){
    let sq = arr.map(el=>el.reduce((acc,cur)=>acc*cur,1));
    console.log(sq)
    return arr.length === 0? null : Math.max(...sq)
}
console.log(maxRectangleSquare([[3, 4], [8, 1], [2, 3]]));
console.log(maxRectangleSquare([]));

console.log('------------------------------------')
/*
Максимальный периметр прямоугольника
question
Имеется последовательность прямоугольников. Каждый прямоугольник определяется парой своих сторон [a, b]:

[[a0, b0], [a1, b1], ..., [an, bn]]. Найдите прямоугольник с максимальным периметром.

    Напишите функцию maxRectanglePerimeter, которая в качестве аргумента принимает массив arr, содержащий
размеры прямоугольников, и возвращает максимальный периметр прямоугольника. Если массив пустой, вернуть null.

    Пример:

функция maxRectanglePerimeter([[2, 3], [5, 6], [2, 7]]) должна возвратить 22;
функция maxRectanglePerimeter([[2, 4]]) должна возвратить 12;
функция maxRectanglePerimeter([]) должна возвратить null.*/
function maxRectanglePerimeter(arr){
    let p= arr.map(el=>el.reduce((acc, cur)=>(acc + cur)*2));
     return arr.length===0? null: Math.max(...p)   ;
}
//Map() Examples
const arr11 = ['-2', '0', '3', '18'];
//const nums = arr11.map(el => Number(el)); //[ -2, 0, 3, 18 ]
//const nums =arr11.map(el => +el); //[ -2, 0, 3, 18 ]
//const nums= arr11.map(el => el * 1);[ -2, 0, 3, 18 ]
const nums =arr11.map(el => el * (-1));[ 2, -0, -3, -18 ]
//const nums =arr11.map(el => el.toString()); //[ '-2', '0', '3', '18' ]
console.log(nums); // [-2, 0, 3, 18]

//Map examples
const arr33 = ['a', 'ab', 'abc', 'abcd', 'abcde'];
const newAr33r = arr33.map(el => [el, el.length]);
console.log(newAr33r); // [["a", 1], ["ab", 2], ["abc", 3], ["abcd", 4], ["abcde", 5]]

//Map examples: Задание: увеличить каждое число в массиве на 5 и вернуть новый массив с элементами в виде строк.
const arr44 = [2, 5, -10, 0, 50, -6];
//const newArr44= arr44.map(el => toString(el + 5));
const newArr44= arr44.map(el => (el + 5).toString());
console.log(arr44);

//Splice() examples
//Задание 1. Удалить 2 элемента по индексу 2.
const arr0 = ['year', 'day', 'week', 'minute', 'second'];
let removed0 = arr0.splice(2, 2);
console.log(removed0); // ["week", "minute"] массив удаленных элементов
console.log(arr0); // ["year", "day", "second"] измененный исходный массив

//Задание 2. Добавить элемент 'life' по индексу 3.
const arr5 = ['year', 'day', 'week', 'minute', 'second'];
let removed5 = arr5.splice(3, 0, 'life');
console.log(removed5); // [], т.к. мы ничего не удаляли, возвращен пустой массив
console.log(arr5); // ["year", "day", "week", "life", "minute", "second"], по индексу 3 теперь находится добавленный элемент

//Задание 3. Удалить 2 элемента по индексу 1 и заменить их на '365' и '7'.
const arr = ['year', 'day', 'week', 'minute', 'second'];
let removed = arr.splice(1, 2, '365', '7');
console.log(removed); // ["day", "week"] возвращен массив элементов, удаленных методом splice()
console.log(arr); // ["year", "365", "7", "minute", "second"], 2 элемента, начиная с индекса 1, заменены

//Задание 5. Удалить 2 элемента с конца массива.
const arr = ['year', 'day', 'week', 'minute', 'second'];
let removed = arr.splice(-2); // индекс start задан отрицательным числом, которое значит смещение с конца массива
console.log(removed); // ["minute", "second"], возвращен массив элементов, удаленных методом splice()
console.log(arr); // ["year", "day", "week"], измененный исходный массив