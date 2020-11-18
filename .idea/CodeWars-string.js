//String examples
let str = 'Ослик Иа-Иа посмотрел на виадук';
let target = 'Иа'; // цель поиска
let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    console.log( `Найдено тут: ${foundPos}` );
    pos = foundPos + 1; // продолжаем со следующей позиции
}
console.log('------------------------');
/*Jenny's secret message
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny,' +
' and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?*/
    function greet(name){
        if(name === "Johnny"){
            return "Hello, my love!";
        }
        else {
            return "Hello, " + name + "!";
        }
    }
    console.log(greet("Jim"));
    //OR
function greet1(name){
    return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}
console.log("---------------------------");
/*
Template Strings
Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
    Input
Two Strings, no validation is needed.
    Output
You must output a string containing the two strings with the word ```' are '```
Reference: https://developer.mozilla.org/en/docs/Web/Java*/
var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`;
}
console.log("---------------------------");

/*
Returning Strings
Make a function that will return a greeting statement that uses an input; your program should return, "Hello," +
" <name> how are you doing today?".

    SQL: return results in a column named greeting

    [Make sure you type the exact thing I wrote or the program may not execute properly]
*/
function greet(name){
    return `Hello, ${name} how are you doing today?`;
}
console.log("---------------------------");
/*Grasshopper - Combine strings
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name).
The function should return the full name.

    Example:

combineNames('James', 'Stevens')
returns:

    'James Stevens'*/
function combineNames(first,last) {
    return `${first} ${last}`;
}
console.log("---------------------------");

/*Grasshopper - Variable Assignment Debug
Variable assignment
Fix the variables assigments so that this code stores the string 'devLab' in the variable name.*/
var a = "dev";
var b = "Lab";
var name = a + b;
console.log("---------------------------");

/*
Grasshopper - Debug sayHello
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard.
    It is your job to fix the code and get the program working again!

    Example output:

    Hello, Mr. Spock*/
function sayHello(name) {
    return `Hello, ${name}`;
}
console.log("---------------------------");

/*
Training JS #3: Basic data types--String
In javascript, String is one of basic data types. Use "" or '' to declare a string variable. It can be
letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..

    String can use operators +, Connect two or more strings together.

    Task
misson 1: I've create three function, and defined some global variables, please select some variables that can make ' +
'up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

When you have finished the work, click "Run Tests" to see if your code is working properly.

    misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer
in function answer1, answer2,answer3

If everything is right, click "Submit" again to submit your code pass this kata.
*/

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
    //select some variable to combine "Dad"
    return d1+a2+d2;
}
function Bee(){
    //select some variable to combine "Bee"
    return b1+e2+e2;
}
function banana(){
    //select some variable to combine "banana"
    return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
    //the answer should be "yes" or "no"
    return "no";
}
function answer2(){
    //the answer should be "yes" or "no"
    return "no";
}
function answer3(){
    //the answer should be "yes" or "no"
    return "yes";
}
console.log("---------------------------");

/*
UEFA EURO 2016
Finish the uefaEuro2016() function so it return string just like in the examples below:
    uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/
function uefaEuro2016(teams, scores){
    if(scores[0]>scores[1]) return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
    if(scores[0]<scores[1]) return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
    if(scores[0]===scores[1]) return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
}
console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));
console.log("---------------------------");

/*ES6 string addition
It is easy to join two strings together like this string1 + string2.

    Another way to get the desired result would be with string1.concat(string2)

    ES6 has introduced another way of joining strings. Your task is to find out what this is and write a
function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can
be used to cheat!

    If one of the arguments is a number your code must coerce it into being a string.*/

function joinStrings(string1, string2){
   return `${string1} ${string2}`;
}
console.log(joinStrings('string1', 'string2'));
console.log("---------------------------");

/*
Take the Derivative
This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

    Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

    derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7",
    the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7"
derive(5, 9) --> this should output "45x^8"
Notes:

    The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0
*/
function derive(coefficient,exponent) {
    return `${coefficient * exponent}x^${exponent-1}`;
}
console.log(derive(7, 8));
console.log("---------------------------");

/*
If you can't sleep, just count sheep!!
If you can't sleep, just count sheep!!

Task:
    Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
    Input will always be valid, i.e. no negative integers.*/
var countSheep = function (num){
    let res='';
    for(let i=1;i<=num; i++){
        res = res +`${i} sheep...`;
    }
    return res;
}
console.log(countSheep(3));
console.log("---------------------------");

/*
Сколько цифр содержит число?
    question
    Дано целое число. Определите, сколько цифр в этом числе?

    Напишите функцию с именем digitsOfNumber, которая принимает число num в качестве аргумента и возвращает
количество цифр в этом числе.

    Указание. Преобразуйте число в строку и найдите длину этой строки.

    Примеры:

функция digitsOfNumber(328) должна возвратить 3.
функция digitsOfNumber(1234567890) должна возвратить 10.
функция digitsOfNumber(3) должна возвратить 1.*/
function digitsOfNumber(num){
    return num.toString().length;
}
console.log(digitsOfNumber(328));
console.log("+---------------------------");

/*
Получите n-й символ строки
Дана строка. Получить ее n-ый символ.

    Напишите функцию с именем getCharacter, которая принимает строку str и число n в качестве аргументов
и возвращает n-й символ строки. Если в строке нет символа с таким индексом, вернуть "Error"

Примеры:

    функция getCharacter("abcde", 2) должна возвратить c.
    функция getCharacter("abc", 5) должна возвратить "Error".*/
function getCharacter(str, n){
    return n>str.length || n<0 ? "Error": str.charAt(n);
}
console.log(getCharacter("abc", 5));
console.log(getCharacter("abcde", 2));
console.log("---------------------------");

/*
Получите строку, вставив пробелы между буквами исходной строки
Дана строка. Получите новую строку, вставив пробелы между буквами исходной строки.

    Напишите функцию с именем insertSpaces, которая принимает строку str в качестве аргумента и возвращает
строку, в которой между буквами вставлены пробелы.

    Пример:
функция insertSpaces("abcde") должна возвратить "a b c d e".*/
function insertSpaces(str){
    let res = '';
    for(let i=0;i<str.length; i++){
        if(i<str.length-1){
            res = res + str[i] + " ";
        }
        else{
            res= res + str[i];
        }
    }
    return res;
}
console.log(insertSpaces("abcde"));

//or
function insertSpaces1(str){
    return str.split('').join(' ');
}
console.log(insertSpaces1("abcde"));

console.log("---------------------------");

/*
get character from ASCII Value
Write a function which takes a number and returns the corresponding ASCII char for that value.

    Example:

get_char(65) # => 'A'*/
function getChar(c){
    return String.fromCodePoint(c);
}
console.log(getChar(65)); //A
console.log("---------------------------");

/*Is this my tail?
    Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not
    have the right tails. To help her, you must correct the broken function to make sure that the second argument
(tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

    The arguments will always be strings, and normal letters.

    For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail
has type rune.*/

function correctTail(body, tail) {
    sub = body.substr(body.length-tail.length);
    if( sub === tail) {;
        return true;
    }
    else {
        return false;
    }
}

console.log(correctTail("Rhino", "o"));
//console.log(correctTail("Meerkat", "t"));
//console.log(correctTail("Sgvotagjsgtnqngdqerdfowmenfyfpbul", "s"))
//Or
function correctTail1(bod, tail) {
    return bod[bod.length-1] === tail
}
console.log(correctTail1("Rhino", "o"));
console.log(correctTail1("Meerkat", "t"));
console.log(correctTail1("Sgvotagjsgtnqngdqerdfowmenfyfpbul", "s"));
console.log('--------------');

/*
Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

    The output should be two capital letters with a dot separating them.

    It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F*/
function abbrevName(name){
    let sp = name.split(' ');
    return `${sp[0].charAt(0).toUpperCase()}.${sp[1].charAt(0).toUpperCase()}`;
}
console.log(abbrevName("Patrick Feenan"));
//OR
function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
console.log('--------------');

/*
Numbers to Letters
Given an array of numbers (in string format), you must return a string. The numbers correspond to the
letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are
represented by '27', '28' and '29' respectively.

    All inputs will be valid.*/
//Automedon solution
function switcher(x){
    const obj={
        1:'z',2:'y',3:'x',4:'w',5:'v',6:'u',7:'t',8:'s',9:'r',10:'q',
        11:'p',12:'o',13:'n',14:'m',15:'l',16:'k',17:'j',18:'i',19:'h',20:'g',
        21:'f',22:'e',23:'d',24:'c',25:'b',26:'a',27:'!',28:'?',29:' '
    }
    return x.map(v=>obj[v]).join('');
}
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));
//another solution from other
const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher1 = x => x.map(item => alpha[item]).join('')
console.log(switcher1(['24', '12', '23', '22', '4', '26', '9', '8']));
console.log('--------------');

/*Number of Decimal Digits
Determine the total number of digits in the integer (n>=0) given as input to the function. For example,
    9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

    All inputs will be valid.*/
    function digits(n) {
    n = n + '';
    n.split('');
    return n.length;
}
//OR
function digits2(n) {
    return n.toString().length;
}
//OR
let digits1 = n => (n + "").length;
console.log(digits1(9876543210));
console.log('--------------');
/*
5 without numbers !!
    Write a function that always returns 5
Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/*/
function unusualFive() {
    let str = 'tests';
    return str.length;
}
console.log('--------------');
/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside
and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

For example:

    solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"*/
function solution(a, b){
   if(a.length<b.length){
       return a+b+a;
   }
    if(a.length>b.length){
        return b+a+b;
    }
}
//OR short solution
function solution1(a, b) {
    return a.length < b.length ? a + b + a : b + a + b;
}
console.log(solution('45', '1'));

console.log('--------------');
/*
Валидные скобки

question
Напишите функцию, которая принимает строку, состоящую из круглых открывающих и закрывающих скобок
и определяет, является ли порядок скобок допустимым. Функция должна возвращать true, если строка допустима,
и false, если она недопустима.

    Примеры:

функция validParentheses( "()" ) должна возвратить true;
функция validParentheses( ")()(" ) должна возвратить false;
функция validParentheses( "(((())))" ) должна возвратить true;
функция validParentheses( "())" ) должна возвратить false.*/

function validParentheses(str) {
   str = str +''.split();
   console.log(str);
   let res =[];
   for(let i=0; i<str.length; i++){
       let char = res[res.length-1];
    if(str[i]==='('){
        res.push(str[i]);
    }else if(char==='(' && str[i]===')'){
        res.pop();
    }else
        return false;
   }
   return res.length===1 ? false: true;
}
console.log(validParentheses("(()()"));
console.log(validParentheses("()"));
console.log(validParentheses(")("));
console.log(validParentheses('(())'));

console.log('--------------');

var uniqueInOrder=function(iterable){
   if(typeof iterable=== 'string')return iterable.split('').filter((el,i)=>el !== iterable[i+1]) ;
    return iterable.filter((el,i)=> i=== iterable.indexOf(el));
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'));//[ 'A', 'B', 'C', 'D', 'A', 'B' ]
console.log(uniqueInOrder([1,2,2,3,3]));//[ 1, 2, 3 ]
console.log(uniqueInOrder('ABBCcAD') ); //[ 'A', 'B', 'C', 'c', 'A', 'D' ]

console.log('------------------');
/*
Regex count lowercase letters
Your task is simply to count the total number of lowercase letters in a string.
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26*/
function lowercaseCount(str){
    str = str.replace(/[1-9]/g, '');
    str = str.replace(/[A-Z]/g, '');
    str=str.replace(/[^a-z]/g,'');
    return str.length;
}
//or
function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}
console.log(lowercaseCount("abcABC123"));
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"));
console.log('------------------');

/*
Double Char
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "*/
function doubleChar(str) {
   let s= '';
   for(let i=0; i<str.length; i++){
       s= s + str[i] + str[i];
   }
   return s;
}

console.log(doubleChar("abcd"));
console.log(doubleChar("Adidas"));
//OR
const doubleChar1 = (str) => str.split("").map(c => c + c).join("");
console.log(doubleChar1("abcd"));
console.log(doubleChar1("Adidas"));
console.log('------------------');

/*Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.' +
' You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/
function removeChar(str) {
    let s = '';
    for (let i = 1; i < str.length - 1; i++) {
        s = s + str[i];
    }
    return s;
}
console.log(removeChar('eloquent'));
//OR better aproach
const removeChar1 = str => str.slice(1,-1);
console.log(removeChar1('eloquent'));
console.log('------------------');

/*Triple Trouble
Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
    Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter,
    see example below!

    E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.*/
function tripleTrouble(one, two, three) {
    let s = ''
    for (let i = 0; i < one.length; i++) {
        s = s + one[i] + two[i] + three[i]
    }
    return s;
}
console.log(tripleTrouble("this","test","lock")); //ttlheoiscstk
console.log('------------------');

/*Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string.*/
function noSpace(x) {
    return x.replace(/[ ]/g, '');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));


/*Spacify
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"*/
function spacify(str) {
    let s = '';
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1) {
            s = s + str[i] + ' ';
        } else s = s + str[i];
    }
    return s;
}
console.log(spacify('hello world'))
//OR short way
const spacify1 = str => str.split('').join(' ');
console.log(spacify1('hello world'));
console.log('------------------');
/*
question
Дано слово. Получите слово, прочитав его справа налево, т.е. "переверните" это слово.

    Напишите функцию с именем reverseWord, которая принимает слово word в качестве аргумента и возвращает строку,
    содержащую перевернутое слово. Использовать метод reverse() в этом задании не разрешено.

    Примеры:

функция reverseWord("abc") должна возвратить "cba";
функция reverseWord("No") должна возвратить "oN"`.*/
function reverseWord(word) {
    let s = '';
    for (let i = word.length - 1; i >= 0; i--) {
        s = s + word[i]
    }
    return s;
}
console.log(reverseWord("abc"));
console.log('------------------');
/*
Является ли слово палиндромом?
    question
    Палиндром - слово, которое читается одинаково справа налево и слева направо.

    Дано слово. Определите, является ли это слово палиндромом.

    Напишите функцию с именем isPalindrome, которая принимает слово word в качестве аргумента и возвращает true,
    если слово является палиндромом, и false - в противном случае. Использовать метод reverse() в этом задании не разрешено.

    Примеры:

функция isPalindrome("abc") должна возвратить false;
функция isPalindrome("abba") должна возвратить true.*/

function isPalindrome(word){
    let s='';
    for(let i=word.length-1; i>=0; i--){
        s= s + word[i];
    }
    if(s==word) return true;
    else return false;
}
console.log(isPalindrome("abba"));
console.log(isPalindrome("abc"));
console.log('------------------');

/*
Сколько восклицательных знаков стоит в конце предложения?
    Напишите функцию с именем exclamationMarks, которая принимает строку str в качестве аргумента и возвращает
количество восклицательных знаков в конце предложения.

    Примеры:

функция exclamationMarks("Hello!!!") должна возвратить 3;
функция exclamationMarks("Hi! What a nice day!!") должна возвратить 2.*/
function exclamationMarks(str){
    let count=0;
    for(let i = 0; i < str.length; i++){
        if(str[str.length-i-1]==='!'){
            count++
        }
        if(str[str.length-i-2]!=='!'){
            break;
        }
    }
    return count;
}
console.log(exclamationMarks("Hi! What a nice day!!")); //2

/*Является ли строка из нескольких слов палиндромом?
    question
    Палиндром – это слово или предложение, одинаково читающееся в обоих направлениях. Примеры строк - палиндромов на
английском языке: 'madam im adam', 'pull up if i pull up', 'live not on evil'.

    Напишите функцию с именем isPalindrome, которая принимает строку str в качестве аргумента и возвращает true, если
строка является палиндромом после удаления из нее всех пробелов и false - в противном случае.

    Во всех тестах строки содержат лишь строчные (lowerCase) буквы, поэтому не волнуйтесь из-за регистра.

    В решении используйте циклы. Использование методов split, reverse, replace запрещено.

    Примеры:

функция isPalindrome("every moment is life") должна возвратить false;
функция isPalindrome("pull up if i pull up') должна возвратить true.*/
function isPalindrome(str){
    let rev='';
    let org='';
    for(let i=str.length-1; i>=0; i--){
        if(str[i]!==' '){
            rev= rev+ str[i];
        }
    }
    for(let i=0; i<str.length; i++){
        if(str[i]!==' '){
            org= org+ str[i];
        }
    }
    return rev===org;
}
console.log(isPalindrome("every moment is life"));//false
console.log(isPalindrome("pull up if i pull up")); //true
console.log('------------------');

/*Найдите количество палиндромов в массиве слов
Палиндром - слово, которое читается одинаково справа налево и слева направо. Дан массив, содержащий некоторое
количество слов. Найдите количество элементов массива, которые являются палиндромами.

    Напишите функцию с именем countPalindrome, которая принимает массив слов arr в качестве аргумента и возвращает
количество слов, являющихся палиндромами. Использовать метод reverse() в этом задании не разрешено.

    Примеры:

функция countPalindrome(["abc", "dad", "noon"]) должна возвратить 2;
функция countPalindrome(["mum"]) должна возвратить 1.
функция countPalindrome(["mother"]) должна возвратить 0.
функция countPalindrome([]) должна возвратить 0.*/

function countPalindrome(arr){
    let count = 0;
    for(let words of arr){
        let rev = '';
        for(let letter of words){
            rev = letter + rev;
        }
        if(rev === words) count ++;
    }
    return count;
}
console.log(countPalindrome(["abc", "dad", "noon"])); //2
console.log('------------------');

/*
Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'*/
//Solution 1
function solution(str) {
    let rev = '';
    for (let letter of str) {
        rev = letter + rev;
    }
    return rev;
}
console.log(solution('world'));
//Solution 2
function solution1(str){
    return str.split('').reverse().join('');
}
console.log(solution1('world'));
//Solution3
function solution3(str) {
    let s = '';
    for (let i = str.length - 1; i >= 0; i--) {
        s = s + str[i];
    }
    return s;
}
console.log(solution3('world'));

console.log('------------------');

/*
Is it a palindrome?
    Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

    In Racket, the function is called palindrome?

    (palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t*/
function isPalindrome(x) {
  let rev=x.toLowerCase().split('').reverse().join('');
  return x.toLowerCase()===rev? true:false;
}
console.log(isPalindrome('nope'));
console.log(isPalindrome('Yay'));
console.log('------------------');

//Using while loop
function f(oo){
    let i = oo.length - 1;
    while(i >= 0){
        console.log(oo[i]);
        i--
    }
}
console.log(f('Bobik'));
console.log('------------------');

/*
Number-Star ladder
Task
Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help
 of examples):

Note: There is no newline in the end (after the pattern ends)

Examples
pattern(3) should return "1\n1*2\n1**3", e.g. the following:

    1
1*2
1**3*/
function pattern(n){
    let str ='';
   for(let i=1; i<=n; i++){
      if(i>1 && i<n) {str =  str + 1 + '*'.repeat(i-1) + i +'\n'};
      if(i==n)       {str =  str + 1 + '*'.repeat(i-1) + i};
   }
    return 1+'\n' + str;
}
console.log(pattern(3))//
// 1
// 1*2
// 1**3
//Other student solution
function pattern1(n){
    if (n < 1) return "";
    var output = "1";
    for (let i = 2; i <= n; ++i) {
        output += "\n1" + Array(i).join("*") + i;
        //console.log(Array(i).join('*'));
    }
    return output;
}
console.log(pattern1(6));
console.log('------------------');

/*
Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be
case insensitive. The string can contain any char.

    Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/
function XO(str) {
    let count_o = 0;
    let count_x = 0;
    str= str.toLowerCase();
    for(let elm of str){
        if(elm==='o') count_o ++;
        if(elm === 'x') count_x ++
    }
    return count_o===count_x? true: false;
}
console.log(XO("xxOo"));
//Other student solution
function XO1(str) {
    let x = str.match(/x/gi);
    console.log(x);
    let o = str.match(/o/gi);
    console.log(o)
    return (x && x.length) === (o && o.length);
}
console.log(XO1("xxOo"));
//One more solution
const XO2 = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
console.log(XO2("xxOo"));

console.log('-----------------------------------');
/*
L1: Bartender, drinks!
    Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and
produces outputs according to the following table:

    Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	 "Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
*anything else*	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table,
    then the return value should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. For example,
    getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".*/
function getDrinkByProfession(param){
    param = param.toLowerCase();
switch (param) {
    case 'jabroni': return 'Patron Tequila';
    case 'school counselor': return 'Anything with Alcohol';
    case 'programmer': return  'Hipster Craft Beer';
    case  'bike gang member': return 'Moonshine';
    case 'politician': return  'Your tax dollars';
    case 'rapper': return  'Cristal';
    default: return 'Beer'
    }
}
console.log(getDrinkByProfession("School Counselor"));//Anything with Alcohol
console.log('-----------------------------------');

/*
Hello, Name or World!
    Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given
(or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

    Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ''       => "Hello, World!" # name is an empty String*/
function hello(name) {
    if(name == null || name.length==0) return 'Hello, World!';
    name = name.toLowerCase();
    return 'Hello, '+ name.charAt(0).toUpperCase() + name.slice(1)+ '!';
}

console.log(hello('johN'));
console.log(hello(''));
console.log(hello());
//OR best  solution
const hello1 = s =>
    `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;
console.log(hello1('johN'));
console.log(hello1(''));
console.log(hello1());

/*
The Wide-Mouthed frog!
    The wide mouth frog is particularly interested in the eating habits of other creatures.

    He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator' +
' who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

    Your goal in this kata is to create complete the mouth_size method this method take one argument animal
which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return
small otherwise return wide.*/
function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}
console.log(mouthSize("toucan"));
console.log('-----------------------------------');


/*
Beginner friendly: Lowercase letters
Convert a string to lowercase letters.

    Example: convert "Hello world!" to "hello world!"*/
function convertLowerCase(str) {
    return str.toLowerCase()
}
console.log('-----------------------------------');

/*
Fix string case
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is
to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.*/
function solve(s){
    let countL=0;
    let countU=0
    for(let i=0; i<s.length; i++){
        if(s[i]==s[i].toLowerCase()){
            countL++
        }
        if(s[i]==s[i].toUpperCase()){
            countU++
        }
    }
    if(countU==countL) {return s.toLowerCase()}
    if(countU>countL) {return s.toUpperCase()}
    if(countU<countL) {return s.toLowerCase()}

}
console.log(solve("CODe"));
console.log(solve("COde"));
//Other solution on this cata
function solve1(s){
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase()
}
console.log('-----------------------------------');

/*
Строчная или прописная? Lowercase or Uppercase?
    question
    Напишите функцию с именем lowerOrUpperCase, которая принимает строку, содержащую букву английского алфавита letter в качестве аргумента и возвращает строку "The letter is in Lowercase" или "The letter is in Uppercase".

    Примеры:

функция lowerOrUpperCase('a') должна возвратить "The letter is in Lowercase";
функция lowerOrUpperCase('A') должна возвратить "The letter is in Uppercase".)*/
function lowerOrUpperCase(letter){
    return letter===letter.toLowerCase()? 'The letter is in Lowercase':'The letter is in Uppercase';
}
console.log('-----------------------------------');

/*
Является ли первая буква имени прописной?
    Дана строка, содержащая имя пользователя. Если первая буква имени прописная (UpperCase), возвратить сообщение
"Welcome, sir", в противном случае возвратить "Howdy".

    Напишите функцию с именем isNameStartsWithUpper, которая принимает строку name, содержащую имя пользователя
в качестве аргумента, и возвращает строку "Welcome, sir", если первая буква имени заглавная (прописная) или "Howdy",
    если первая буква имени строчная.

    Примеры:

функция isNameStartsWithUpper('Alex') должна возвратить "Welcome, sir";
функция isNameStartsWithUpper('alice') должна возвратить "Howdy".
*/

function isNameStartsWithUpper(name) {
    let first = name.charAt(0);
    if (first === first.toUpperCase()) {
        return 'Welcome, sir'
    }
    return 'Howdy';
}
console.log(isNameStartsWithUpper('Alex'));
console.log(isNameStartsWithUpper('alice'));
console.log('-----------------------------------');

/*
Find the capitals
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list
containing the indexes of all capital letters in the string.
    Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );*/

//Find the capitals
var capitals = function (word) {
    let letterIndex=[];
    let upper= word[0];
    let index=0;
   for(let i=0; i<word.length; i++){
       if(word[i]===word[i].toUpperCase()){
            upper = word[i]
            index=i;
            letterIndex.push(index)
       }
   }
   return letterIndex;
};
console.log(capitals('CodEWaRs'));
//Other interesting solution
const capitals1 = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }
console.log(capitals1('CodEWaRs'));
//Or one more solution
var capitals2 = function (word) {
    return word.split('').reduce(function(n, l, i){
        return /[A-Z]/.test(l) && n.push(i), n;
    }, []);
};
console.log(capitals2('CodEWaRs'));
console.log('-----------------------------------');

/*
Mumbling
This time no story, no theory. The examples below show you how to write function accum:

    Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accum(s) {
   let str='';
   for(let i=0; i<s.length; i++){
       if(i===0){ str = str  + s[i].charAt(0).toUpperCase()  + '-'};
       if(i>0 && i<s.length) {str = str  + s[i].charAt(0).toUpperCase()  + s[i].toLowerCase().repeat(i) + '-'};
   }
   return str.slice(0,-1);
}
//console.log(accum("abcd"));
console.log(accum('ZpglnU'))
//OR other solution
function accum(s) {
   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
 }
console.log('-----------------------------------');

/*Thinking & Testing : Something capitalized*/
function testit(s){
    console.log(s.split(' ').map(el => el.slice(0, -1)));
    return s.length === 0 ? '' : s.split(' ').map(el => el.slice(0, -1) + el[el.length - 1].toUpperCase()).join(' ');
}
console.log(testit("a a b"))
//console.log(testit(''));
//OR
const testit1 = s => s.replace(/.\b/g, c => c.toUpperCase());
console.log('-----------------------------------');

/*

MakeUpperCase
Write a function which converts the input string to uppercase.

*/

    function makeUpperCase(str) {
    return str.toUpperCase();
}
console.log('-----------------------------------');

/*
Beginner friendly: Uppercase a string
Convert a string to all uppercase letters.

    Example: "Hello world!" to "HELLO WORLD!"*/

function capitalizeEachWord(str) {
    return str.toUpperCase();
}
console.log('-----------------------------------');

/*
Capitalization and Mutability
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word)
before they went on vacation.

    Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so ' +
'that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths ' +
'will be from 1 character up to 10 characters, but will never be empty.*/
function capitalizeWord(word) {
    return  word[0].toUpperCase() + word.slice(1);
}
console.log(capitalizeWord('glasswear'));

console.log('-------------------------');
/*
Training JS #21: Methods of String object--trim() and the string template
This is the last lesson about the string object, we will learn the two knowledge used to format the string.

    The first is a simple method: trim(). Usage is very simple:

    stringObject.trim()
Its role is very simple too: remove the whitespace at the edge of the string. example:

var str="             abc                ";
console.log(str.trim());
str="\n\n\n\nabc\t\t\t"
console.log(str.trim());
//output:
abc
abc
Various non visible characters such as space tab are called whitespace. more detailed information please refer to:whitespace

trim() only remove whitespace at edge of string, whitespace in the middle of the string will not be removed.

    var str="  a b c  ";
console.log(str.trim());

//output:
a b c
Next we will learn a new member of the ES6: string template, We look at the following code:

    var s1="My name is John.";
var s2='My name is John.';
var s3=`My name is John.`;
Are their values equal? Yes, they are equal. Do you see the difference in s2 and s3? Bingo! single quotes ' and backtick ` are different. Of course, this is not the biggest difference between them. Using double quotes " or single quotes ', we get a fixed string value. Use the backtick `, we are defining a string template.

We can use ${variable} insert a variable into string template. like this:

var a=1,b=2;
console.log(`${a} + ${b} = ${a+b}`);

//output:
1 + 2 = 3
Or we can write this:

function plus(a,b){
  console.log(`${a} + ${b} = ${a+b}`);
}
plus(1,2);
plus(3,4);

//output:
1 + 2 = 3
3 + 4 = 7
Isn't it interesting? There are more interesting things to happen. When the string template appears in the back of a function, It will be used as a parameter. Look at the following example:

function repeatIt(s){
  console.log(`${s} ${s} ${s}`);
}
repeatIt `a`;
repeatIt `ab`;

//output:
a a a
ab ab ab
Ok, lesson is over. let's us do some task.

Task
Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.

Example:

fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it
fiveLine("  xy ")
should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
xy
xyxy
xyxyxy
xyxyxyxy
xyxyxyxyxy  <---The effect when you console.log it*/
function fiveLine(s){
    let str='';
    let strNoSpace=s.trim();
    for(let i=1; i<=5; i++){
        if(i===5){
            str += `${strNoSpace.repeat(i)}`;
            break
        }
        str += `${strNoSpace.repeat(i)}\n`;
    }
   return str
}
console.log(fiveLine("  xy "));
console.log('-------------------------');

//Intersting solution
function fiveLine1(s) {
    return [1,2,3,4,5].map(n => s.trim().repeat(n)).join('\n');
}
console.log(fiveLine1("  xy "));
console.log('-------------------------');
/*
Повторите слово столько раз, сколько букв содержит это слово.
    Дано слово. Повторите слово столько раз, сколько букв содержит это слово.

    Напишите функцию с именем repeatWord, которая принимает слово word в качестве аргумента и возвращает строку,
    содержащую слово, повторенное столько раз, сколько букв содержит это слово. Слова раделяйте пробелами. После
последнего слова пробела нет.

    Примеры:

функция repeatWord("a") должна возвратить "a";
функция repeatWord("No") должна возвратить "No No";
функция repeatWord("One") должна возвратить "One One One";
функция repeatWord("Five") должна возвратить "Five Five Five Five".*/
function repeatWord(word){
    return  (word +' ').repeat(word.length-1) + word;
}
console.log(repeatWord("One")); //One One One
console.log(repeatWord('Five')); //Five Five Five Five
/*

Валидный пароль
Функция получает строку, содержащую пароль. Валидным считается пароль длиной не менее 7 символов. Если пароль содержит менее 7 символов, функция дополняет его справа символами "$" до 7 символов.

    Напишите функцию с именем validPassword, которая принимает строку password в качестве аргумента и возвращает строку, дополненную символами "$" справа, если пароль имеет длину менее 7 символов, или исходную строку, если пароль имеет длину 7 и более символов.

    Примеры:

функция validPassword("abc") должна возвратить "abc$$$$";
функция validPassword("Null") должна возвратить "Null$$$";
функция validPassword("Qwertyu") должна возвратить "Qwertyu";
функция validPassword("VeryStrongPassword123456") должна возвратить "VeryStrongPassword123456".
    Write your solution here
unit
*/
function validPassword(password){
    if(password.length<7) return password.padEnd(7, '$');
    if(password.length>=7) return password;
}
console.log(validPassword("Qwertyu")); //Qwertyu
console.log(validPassword("Null")); //Null$$$
console.log('-------------------------');

/*
repeatIt
Create a function that takes a string and an integer (n).

    The function should return a string that repeats the input string n number of times.

    If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"*/
var repeatIt = function(str, n) {
    if(typeof str !== 'string') return 'Not a string';
    return str.repeat(n);
}
console.log(repeatIt("*",3));
console.log('-------------------------');

/*
Stringy Strings
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

    the string should start with a 1.

a string with size 6 should return :'101010'.

    with size 4 should return : '1010'.

    with size 12 should return : '101010101010'.

    The size will always be positive and will only use whole numbers.*/
function stringy(size) {
   return size%2===0? '10'.repeat(size/2): '10'.repeat(size/2)+'1'
}
console.log(stringy(4));
console.log(stringy(6));
console.log(stringy(7));
// other interesting solutions #2
const stringy1 = size => "10".repeat(size).slice(0,size);
// other interesting solutions #3
const stringy2 = x => ''.padStart(x,'10');
console.log('-------------------------');

/*
Coding 3min : Jumping Dutch act
Coding 3min : Jumping Dutch act

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:
    Mr. despair wants to jump off Dutch act, So he came to the top of a building.

    Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: floor, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)

Example:
    sc(2) should return "Aa~ Pa! Aa!"

It means:

    Mr. despair jumped from the 2 floor, the voice is "Aa~"
He fell on the ground, the voice is "Pa!"
He did not die immediately, and the final voice was "Aa!"
sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

if floor<=1, Mr. despair is safe, return ""

*/
function sc(floor){
    console.log(floor)
    if(floor<=1) return "";
    if(floor<=6) return 'Aa~ '.repeat(floor-1) +'Pa! Aa!';
    if(floor>6) return 'Aa~ '.repeat(floor-1) +'Pa!';
    if(floor<3) return 'Aa~ Pa! Aa!';
}
console.log(sc(7) );
console.log(sc(2) );
//marked as best practice
function sc1(floor){
    if(floor <= 1) return "";

    return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}
console.log('-------------------------');

/*
Name on billboard
You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

    If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).*/

function billboard(name, price = 30){
    let total = 0;
    for (let i = 1; i <= name.length; i++) {
        total += price
    }
    return total;
}
console.log(billboard("Jeong-Ho Aristotelis"));
console.log(billboard("Hadufuns John"));
//Or other solution #2
function billboard1(name, price = 30) {
    return name.split('').reduce((sum, letter) => sum + price, 0);
}
//Or other solution  #3
const billboard2 = (name, price = 30) =>
    [...name].reduce(pre => pre + price, 0);
console.log('-------------------------');

/*String repeat
Write a function called repeat_str which repeats the given string src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"*/
function repeatStr (n, s) {
    return s.repeat(n);
}

//Repeat example
let strA = 'One';
let result = '';
for(let i = 0; i < 3; i++){
    result += strA.repeat(i);
}
console.log(result);

console.log('------------------------');
/*
Счастливое число для китайцев.
    Восьмёрка — наиболее счастливое число для всех китайцев. Звучит, как «богатство» и «процветание».

Китайцы очень часто готовы платить огромные деньги за номер телефона, номер машины или номер квартиры, в которых присутствует цифра 8. Кроме того, форма восьмёрки напоминает знак бесконечности, и поэтому у китайцев восьмёрка ассоциируется с никогда не заканчивающимся потоком денег.

    Дан массив, содержащий числа. Получите массив из чисел, содержащих цифру 8.

Напишите функцию с именем luckyChineseNumber, которая принимает массив numbers в качестве аргумента и возвращает массив счастливых для китайцев чисел, т.е. чисел, содержащих цифру 8.

Примеры:

    функция luckyChineseNumber([124, 18, 13, 8, 81, 182, 11]) должна возвратить [18, 8, 81, 182].
*/
function luckyChineseNumber(numbers){
    let result=[];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i].toString().includes(8)===true){
            result.push(numbers[i]);
        }
    }
    return result
}
console.log(luckyChineseNumber([124, 18, 13, 8, 81, 182, 11]));
console.log('------------------------');

/*
noobCode 03: CHECK THESE LETTERS... see if letters in "String 1" are present in "String 2"
Write a function that checks if all the letters in the second string are present in the first one at least once,
    regardless of how many times they appear:

    ["ab", "aaa"]    =>  true
    ["trances", "nectar"]    =>  true
    ["compadres", "DRAPES"]  =>  true
    ["parses", "parsecs"]    =>  false
Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single
argument in the form of an array.*/
function letterCheck(arr) {
    return [...arr[1].toLowerCase()].every(el => arr[0].toLowerCase().includes(el));

}
console.log(letterCheck(["trances", "nectar"]));
console.log(letterCheck(["THE EYES", "they see"]));
console.log('------------------------');

/*
Fruit string calculator
Given a string of words and numbers. Extract the expression including:

    the operator: either addition or subtraction
the two numbers that we are operating on
Return the result of the calculation.

    Example:

"Panda has 48 apples and loses 4" returns 44

"Jerry has 34 apples and gains 6" returns 40

"loses" and "gains" are the only two words describing operators.

    Should be a nice little kata for you :)

Note: No fruit debts nor bitten apples = The numbers are integers and no negatives

*/

function calculate(string) {
    let n = string.split(' ');
    let s=0;
  if(n.includes('gains')){
      s = Number(n[2]) + Number(n[n.length-1]);
  }
    if(n.includes('loses')){
        s=Number(n[2]) - Number(n[n.length-1]);
    }
return s;
}
console.log(calculate("Panda has 48 apples and loses 4"));
console.log(calculate("Jerry has 34 apples and gains 6"));
//Or other solutions
function calculate1(string) {
    return eval(string.match(/\d+|lose|gain/g).join("").replace("lose", "-").replace("gain", "+"))
}
console.log('------------------------');

/*
Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

    Examples:
*/

/*
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

    I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.
*/

function dontGiveMeFive(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i.toString().includes(5) === false) {
            count++
        }
    }
    return count
}
console.log(dontGiveMeFive(1,9));
//Other solutions #2
function dontGiveMeFive1(start, end)
{
    var count = 0;
    for(; start <= end; start++) {
        if(start.toString().indexOf("5") == -1) {
            count++;
        }
    }
    return count;
}
//Other solutions #3
const dontGiveMeFive2=(s,e)=>[...Array(e-s+1)].reduce((r,_,n)=>r+!/5/.test(n+s),0)
console.log('------------------------');


/*
Mispelled word
Create a function mispelled(word1, word2):

    mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
It checks if the word2 differs from word1 by only one character.

    This can include an extra char at the end or the beginning of either of words.

    In the tests that expect true, the mispelled word will always differ only by one character.*/

var mispelled = function(word1, word2)
{
    if (Math.abs(word1.length - word2.length) === 1){
        if (word1.includes(word2) || word2.includes(word1)){
            return true
        } else {
            return false
        }
    }
    let count = 0
    for (let i = 0; i < word1.length; i++){
        if (word1[i] !== word2[i]){
            count++
        }
    }
    return count === 1
}
console.log(mispelled('versed', 'v5rsed'));
console.log(mispelled('1versed', 'versed'));

//ONe more good solution by other user
var mispelled1 = function (word1, word2) {
    if (word1.length - word2.length > 1) return false;
    let count = 0;
    for (let i in word2) {
        if (!word1.includes(word2[i])) count++;
        if (count === 2) return false;
    }
    return true;
}
console.log(mispelled1('versed', 'v5rsed'));
console.log(mispelled1('1versed', 'versed'));
console.log('------------------------');

/*
Do you speak "English"?
    Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string
contains the whole word "English".

    The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

    Upper or lower case letter does not matter -- "eNglisH" is also correct.

    Return value as boolean values, true for the string to contains "English", false for it does not.*/
function spEng(sentence){
    sentence= sentence.toLowerCase()
    for(let i in sentence){
        if(sentence.includes('english')) return true;
    }
    return false;
}
console.log(spEng("English"));
//Other solutions #2
function spEng2(s){
    return /english/i.test(s)
}
//Other solutions #3
function spEng(sentence){
    let sentenceLower3 = sentence.toLowerCase();
    return sentenceLower.includes('english');
}