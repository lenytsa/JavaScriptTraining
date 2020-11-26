/*
ндивидуальная магическая цифра
question
Нумерологи утверждают, что у каждого человека есть счастливое число-талисман.

    Чтобы вычислить его, надо цифры, обозначающие год, месяц и день рождения сложить и свести к простому числу (от 1 до 9).

Например, если человек родился 27 июня 1975 года, то его счастливое число рассчитывается так:

    2 + 7 + 6 + 1 + 9 + 7 + 5 = 37 = 10 = 1.

Дана строка, содержащая число, месяц, год рождения в виде "MM/DD/YYYY". Найдите счастливое число для этой даты.

    Напишите функцию с именем magicNumber, которая принимает строку date в качестве аргумента и возвращает счастливое число для этой даты.

    Примеры:

функция magicNumber("6/27/1975") должна возвратить 1.*/

function magicNumber(date) {
    date = date.replace(/\//g, '');
    date = date.split('');
    date = [...date].reduce((acc, c) => { return Number(c) + acc }, 0)
    while (date.toString().length > 1) {
        date = magicNumber(date.toString());
    }
    return date
}
console.log(magicNumber("6/27/1975"));
/*

Минимальное натуральное четырехзначное число, состоящее из тех же цифр, что и заданное число
Дано натуральное четырехзначное число. Найдите минимальное натуральное четырехзначное число, состоящее из тех же цифр, что и заданное. Заметим, что четырехзначные числа не могут начинаться с нуля.

    Напишите функцию с именем changeDigitsOrder, которая принимает четырехзначное число num в качестве аргумента и возвращает минимальное четырехзначное число, состоящее из тех же цифр, что и заданное число.

    Пример:

функция changeDigitsOrder(1513) должна возвратить 1135.
функция changeDigitsOrder(1500) должна возвратить 1005.*/

//reused part of the codes from https://github.com/jalal246/move-position/blob/009e55a21dc44711bde0ccbae5c06c908866d6c3/index.js#L9
function changeDigitsOrder(num){
    let arr = num.toString().split('').map(x=>+x).sort((a,b)=>a-b);
    var minValue = Math.min.apply(null, arr.filter(Boolean));
    let minIndex= arr.indexOf(minValue);
    let result = move(arr, minIndex, 0);//from position to the to position
    return +result.join(''); //return numbers not string
}
function move(arr = [], from, to, isMutate = true) {
    if(isNotInRange(arr, { from, to })) return arr;
    const modified = isMutate ? arr : arr.slice();
    modified.splice(to, 0, modified.splice(from, 1)[0]);
    return modified;
}
function isNotInRange(arr, { from, to } = {}) {
    const { length } = arr;
    return (
        !Array.isArray(arr) ||
        typeof from !== "number" ||
        typeof to !== "number" ||
        from < 0 ||
        to < 0 ||
        to > length ||
        from > length
    );
}
console.log(changeDigitsOrder(1500));//1005
console.log(changeDigitsOrder(1513)); //1135

console.log('-----------------------------');
/*
Выведите строку по одному слову в столбик, выравнивание по правому краю.
    question
Функция получает строку из нескольких слов. Выведите слова в столбик, выравнивание по правому краю.

    Например, text = 'I will get everything I want'. Функция должна возвратить этот текст в виде строки, содержащей слова:

    Напишите функцию с именем wordsInColumn, которая принимает строку text в качестве аргумента и возвращает строку, разделенную на слова, которые выводятся по одному в строке с выравниванием по правому краю.

    Пример:

функция wordsInColumn("Enjoy every moment") должна возвратить:
    Write your solution here
unit
*/
function wordsInColumn(text) {
    text = text.split(' ');
    let longestlength = Math.max(...(text.map(el => el.length)));
    let res = '';
    for (let i = 0; i < text.length; i++) {
        res = res + ' '.repeat(longestlength - text[i].length) + text[i] + '\n';
    }
    return  res.trimEnd();
}
console.log(wordsInColumn("Enjoy every moment"));
console.log('-----------------------------');
/*

Читается ли строка одинаково слева направо и справа налево?
    Палиндром – это слово или предложение, одинаково читающееся в обоих направлениях. Предположительно, палиндром изобрел древнегреческий поэт Сотад (3 в. до н.э.).

Примеры палиндромов на английском языке: 'Deed', 'Nun', 'Madam Im Adam', 'Pull up if I pull up'.

    Напишите функцию с именем isPalindrome, которая принимает строку str в качестве аргумента и возвращает true, если строка является палиндромом после удаления из нее всех пробелов и приведения всех символов к нижнему регистру, и false - в противном случае.

    Пример:

функция isPalindrome("Enjoy every moment") должна возвратить false;
функция isPalindrome("Was it a car or a cat I saw") должна возвратить true.
*/
function isPalindrome(str){
    //Remove all Whitespace From a String .replace(/\s+/g, '')
    str=[...str].join('').replace(/\s+/g, '');
    let str1 = [...str].reverse().join('').replace(/\s+/g, '');
    return str.toLowerCase() == str1.toLowerCase()
}
console.log(isPalindrome("Enjoy every moment"));//
console.log(isPalindrome("Was it a car or a cat I saw"));// true
console.log('-------------------------------');
