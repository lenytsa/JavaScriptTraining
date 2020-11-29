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


/*Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.
Example:
    reverseWords("The greatest victory is that which requires no battle")*/
// should return "battle no requires which that is victory greatest The"
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}
console.log(reverseWords("hello world!")); //"world! hello"
console.log('---------------------------');
/*Palindrome chain length
Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

    Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

    If the input number is already a palindrome, the number of steps is 0.

Input will always be a positive integer.

    For example, start with 87:

87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4*/
//Solutions from julzbond
var palindromeChainLength = function(n) {
    var counter = 0;
    var nReverse = parseInt(("" + n).split('').reverse().join(''));
    checkPalindrome(n);

    function checkPalindrome(n){
        if (n !== nReverse) {
            counter++;
            n += nReverse;
            nReverse = parseInt(("" + n).split('').reverse().join(''));
            return checkPalindrome(n);
        }
    }
    return counter;
};
console.log(palindromeChainLength(82));
//Others codewars solutions
var palindromeChainLength  = function(n) {
    var x = parseInt( (""+n).split('').reverse().join('') );
    if(n != x){
        return 1 + palindromeChainLength (n + x);
    }
    return 0;
};
//Others codewars solution
function palindromeChainLength(n) {
    var count = 0, rev = 0;
    while(n != (rev = parseInt(n.toString().split('').reverse().join('')))) {
        n += rev;
        count++;
    }
    return count;
};

console.log('------------------------');
/*
Anagram Detection
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

    Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"*/

// write the function isAnagram
let isAnagram = function (str1, str2){
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')

}
console.log(isAnagram("foefet", "toffee")); //true
console.log(isAnagram("dumble", "bumble")); //false
console.log('------------------------');

/*

Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its
    digits in descending order. Essentially, rearrange the digits to create the highest possible number.

    Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/
function descendingOrder(n){
  return +n.toString().split('').sort((a, b) => b-a).join('');
}
console.log(descendingOrder(42145)); //54421
console.log('------------------------');

/*
Highest and Lowest
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

    Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
*/
function highAndLow(numbers){
    let n= numbers.split(' ').sort((a, b) => b-a)
    return `${n[0]} ${n.slice(-1)[0]}`;
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")); //542 -214
//other solutions from codewars
function highAndLow1(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
console.log('------------------------');

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}