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
    }
    return output;
}