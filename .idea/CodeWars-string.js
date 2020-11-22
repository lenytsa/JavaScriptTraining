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
    return sentenceLower3.includes('english');
}
//example of includes() and some() methods
let arr = [
    {
        name: 'Jack',
        id: 1
    },
    {
        name: 'Gabriel',
        id: 2
    },
    {
        name: 'John',
        id: 3
    }
]
var r = arr.some(i => i.name.includes('Jack'));
console.log("true or false:",r);
console.log('------------------------');
//example of includes() and some() methods

const array = [{ name: 'js' }, { name: 'css' }];
console.log(array.some(code => code.name === 'js')); // true
console.log(array.some(code => code.name === '🤖')); // false

console.log('------------------------');
//example of includes() and some() methods

const array1 = [{ name: 'js' }, { name: 'css' }];
array1.some(code => JSON.stringify(code) === JSON.stringify({ name: 'css' }));// true
console.log('------------------------');

const array2 = ['SAMANTHA'];
array2.includes('samantha'); // false
array2.indexOf('samantha') !== -1; // false

console.log('------------------------');

//To make it case insensitive, you could consider changing the case of the array like so:
const array3 = ['SAMANTHA'];
const sameCaseArray = array3.map(value => value.toLowerCase());// ['samantha']

sameCaseArray.includes('samantha'); // true
sameCaseArray.indexOf('samantha') !== -1; // true

//But if you were using some, you can do it in one line:
const array4 = ['SAMANTHA'];
array4.some(value => value.toLowerCase() === 'samantha'); // true

console.log('+++------------------------');
const object = {kiwi: '🥝', pear: '🍐', cheese: '🧀'};
'kiwi' in object; // true
// Use it as a conditional
if ('kiwi' in object) {
    console.log("Do something")
}
console.log('------------------------');
//Метод find() предназначен для поиска первого элемента в массиве
const animals = [{ name: '🐱' }, { name: '🐒' }, { whale: '🐋' }];
const found = animals.find(elem => elem.name === '🐒');
console.log(found); // { name: '🐒' }
console.log('------------------------');

//Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, указанному в передаваемой функции.
//Метод some() вызывает переданную функцию func один раз для каждого элемента до тех пор, пока не найдет такой, для которого func вернёт true
const fruits = ['🍎', '🍋', '🍊', '🍇', '🍍', '🍐'];
fruits.some(elem => elem === '🍐');     // true
fruits.some(elem => elem === '🍓');     // false
//The some() method can also be used with an array an objects:
console.log('------------------------');

const animals22 = [{ name: '🐱' }, { name: '🐒' }, { whale: '🐋' }];
animals22.some(elem => elem.name === '🐒');   // true
animals22.some(elem => elem.name === '🍊');   // false
console.log('------------------------');

//Examples of map() and includes()
const names = ['Ali', 'Atta', 'Alex', 'John'];
names.map(elem => elem.toLowerCase()).indexOf('atta');   // 1
names.map(elem => elem.toLowerCase()).includes('atta');  // true
names.some(elem => elem.toLowerCase() === 'atta');   // true


console.log('--------------IndexOf---------------------------');

//IndexOf examples
let s = 'Buy milk, cherry, butter, cherry, flour, cherry, sugar.';
let count = 0; // (1)
let index = s.indexOf('cherry'); // (2)
while(index !== -1){ // (3)
    count++; // (4)
    index = s.indexOf('cherry', index + 1); // (5)
}
console.log(count); // 3

console.log('--------------IndexOf---------------------------');

/*
L2: Triple X
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false
Note :

    capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false*/

function tripleX(str) {
    let index = str.indexOf('x');
    if (index !== -1 && str.charAt(index + 1) == 'x' && str.charAt(index + 2) == 'x') return true
    return false
}
console.log(tripleX("softX kitty, warm kitty, xxxxx")); //true
console.log(tripleX("softx kitty, warm kitty, xxxxx"));// false
console.log('--------------IndexOf---------------------------');

function tripleX1(str){
    console.log('one:',str.indexOf('x'));
    console.log('two:',str.indexOf('xxx'));
    return str.match('x') ? str.indexOf('x') === str.indexOf('xxx') : false;
}
console.log(tripleX1("softX kitty, warm kitty, xxxxx")); //true
console.log(tripleX1("softx kitty, warm kitty, xxxxx"));// false
//one more solution from other user
const tripleX2 = str => {
    let x = str.indexOf('x')
    return x > -1 && x === str.indexOf('xxx')
}
console.log('--------------IndexOf---------------------------');

/*
Find the position!
    When provided with a letter, return its position in the alphabet.
Input :: "a"
Ouput :: "Position of alphabet: 1"
This kata is meant for beginners. Rank and upvote to bring it out of beta*/
function position(letter){
    let alphabet ='abcdefghijklmnopqrstuvwxyz';
return `Position of alphabet: ${alphabet.indexOf(letter)+1}`;
}
console.log(position("z"));
console.log('--------------IndexOf---------------------------');

/*
Love vs friendship
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/
function wordsToMarks(string) {
    let alphabet = ' abcdefghijklmnopqrstuvwxyz';
    let total = 0;
    for (let i = 0; i < string.length; i++) {
        total = total + alphabet.indexOf(string[i])
    }
    return total;
}
console.log(wordsToMarks("attitude")); //100
console.log('-------------LastIndexOf----------------------------');

/*
Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
This time we learn three methods to retrieve the string:indexOf() lastIndexOf() and search(). Their usage:

    StringObject.indexOf(searchvalue,fromindex)
StringObject.lastIndexOf(searchvalue,fromindex)
StringObject.search(searchvalue/regexp)
indexOf() retrieves a string from the location of the fromindex to the right (If fromindex is omitted, began retrieval from index0).

lastIndexOf() retrieves a string from the location of the fromindex to the left (If fromindex is omitted, began retrieval from last chars).

Usage of search() is similar to indexOf(). It is characterized by the support of regular expressions, but it always returns the position of the first match from the left side(This means that it does not support the option "g" of regular expressions).

Here we use some examples to illustrate their usage and difference:

    var str="Hello World!";
console.log(str.indexOf("e"))
console.log(str.lastIndexOf("e"))
console.log(str.search("e"))
//output:
1
1
1
We can see, str.indexOf("e") equals str.lastIndexOf("e"), because there is only one "e" in str. Look at the following example:

    var str="Hello World!";
console.log(str.indexOf("o"))
console.log(str.lastIndexOf("o"))
console.log(str.search("o"))
//output:
4
7
4
We can see, indexOf() returned 4 and lastIndexOf() returned 7. search() always returned the first "o". Look at the following example:

    var str="Hello World!";
console.log(str.indexOf("o",5))
console.log(str.lastIndexOf("o",5))
console.log(str.search("o"))
//output:
7
4
4
We can see, indexOf() returned 7, because it start retrieves from index 5 to the right; lastIndexOf() returned 4 because it start retrieves from index 5 to the left;. search() always returned the first "o". Look at the following example:

    var str="Hello World!";
console.log(str.indexOf("world"))
console.log(str.lastIndexOf("world"))
console.log(str.search(/world/i))
console.log(str.search(/word/i))
//output:
-1
-1
6
-1
From this example we can see that indexOf() and lastIndexOf() can not find "world" in str, because "World" and "world"
are diffrent; search() uses a regular expression, the option i allows it to ignore the case(Regular expressions are
powerful and complex, and we will learn it later). when the search string is not found, they always return -1;

Ok, lesson is over. let's us do some task.

Task
Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

    Please return the gap between the first position of c and the last position of c.

    If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return
0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

for example:

    firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1*/
function firstToLast(str,c){
    if(str.lastIndexOf(c)===-1) return -1
   return str.lastIndexOf(c)-str.indexOf(c);
}
console.log(firstToLast("ababc","a"));
console.log(firstToLast("ababc","d"));
//OR other shorter solution
function firstToLast1(str,c){
    return (str.indexOf(c) < 0) ? -1 : str.lastIndexOf(c) - str.indexOf(c);
}
console.log('-------------startsWith()----------------------------');

/*validate code with simple regex
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the
    code begins with 1, 2, or 3 and return true if so. Return false otherwise.

    You can assume the input will always be a number.*/
function validateCode (code) {
    code= code.toString()
    return code.startsWith([1])|| code.startsWith([2])|| code.startsWith([3])
}
console.log(validateCode(123));
console.log(validateCode(248));
//short solution
function validateCode1(code)
{
    return /^[123]/.test(code);
}
console.log('-----------endsWith()---------------------')
/*
String ends with?
    Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

    solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/
function solution(str, ending){
    return str.endsWith(ending);
}
console.log('-----------endsWith()---------------------')

/*
Automorphic Number (Special Numbers Series #6)
Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
    Task
Given a number determine if it Automorphic or not .
*/
function automorphic(n){
    let sq_num= n**2;
   return  sq_num.toString().endsWith(n)? 'Automorphic': 'Not!!'
}
console.log(automorphic(1));
console.log(automorphic(3));
console.log(automorphic(6));

console.log('-----------slice() ---------------------')
/*

Create Phone Number
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers
in the form of a phone number.
    Example:createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
    Don't forget the space after the closing parentheses!
*/
function createPhoneNumber(numbers){
    let area= numbers.slice(0,3).join('');
    let midd = numbers.slice(3,6).join('');
    let last = numbers.slice(-4).join('');
    return `(${area}) ${midd}-${last}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//Another nice solution
function createPhoneNumber1(numbers){
    var format = "(xxx) xxx-xxxx";
    for(var i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }
    return format;
}
console.log(createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log('-----------slice() ---------------------')

/*Greet Me
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

    Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"*/
var greet = function(name) {
    name= name.toLowerCase();
return `Hello ${name.charAt(0).toUpperCase()}${name.slice(1)}!`
};
console.log(greet('riley'));
console.log(greet('ctlTQbwMsC'));

console.log('-----------slice() ---------------------')

/*
Credit Card Mask
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most ' +
'secret question is still correct. However, since someone could look over your shoulder, you don't want that shown
on your screen. Instead, we mask it.

    Your task is to write a function maskify, which changes all but the last four characters into '#'.
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/
function maskify(cc) {
    let lastFour = cc.slice(-4);
    return lastFour.padStart(cc.length, '#');
}
console.log(maskify('4556364607935616'));
console.log(maskify('1'));

//Other solutions
function maskify1(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
console.log(maskify1('4556364607935616'));
console.log(maskify1('1'));
//Other solutions
// return masked string
function maskify2(cc) {
    var maskedString = "";
    for(var i = 0; i < cc.length; i++) {
        if(i < cc.length - 4) {
            maskedString = maskedString + "#";
        } else {
            maskedString = maskedString + cc.charAt(i);
            console.log("char",cc.charAt(i))
        };
    }
    return maskedString;
}
console.log(maskify2('15616'));
console.log('-----------slice() ---------------------')

/*
Trimming a string
Return a function that will trim a string (the first argument given) if it is longer than the maximum string length
(the second argument given). The result should also end with "..."

    These dots at the end also add to the string length.

    So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or
dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"


*/

function trim(arr, size) {
    if (arr.length<=size) return arr;
    if (arr.length<=3) return arr.slice(0,size)+'...';
    return arr.slice(0,size-3)+'...';
}
console.log(trim("Creating kata is fun", 14));
console.log(trim("He", 1));
console.log(trim("Code Wars is pretty rad", 50));
//Other solutions
function trim1(arr, size) {
    return arr.length <= size ? arr : arr.slice(0, arr.length > 3 ? size - 3 : size) + '...';
}
console.log('-----------slice() ---------------------');

/*
Remove the time
You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

    Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day' +
' that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the
shortened format.

    Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output
will be the shortened string, e.g., "Friday May 2".*/
// function shortenToDate(longDate) {
//         if(longDate.length<=17) return longDate.slice(0,-5)
//         if(longDate.length>=24) return longDate.slice(0,-6);
// }
function shortenToDate(longDate) {
        let comma = longDate.indexOf(',');
        return longDate.slice(0,comma);
}
console.log(shortenToDate("Friday May 2, 9am"));
console.log(shortenToDate("Tuesday January 29, 10pm"));
//Or another solution
function shortenToDate1(longDate) {
    console.log(longDate.split(',')); //[ 'Friday May 2', ' 9am' ]
    return longDate.split(',')[0];
}
console.log(shortenToDate1("Friday May 2, 9am")); //Friday May 2
//Or
const shortenToDate2 = longDate =>
    longDate.replace(/,.*/, ``);
console.log(shortenToDate2("Friday May 2, 9am")); //Friday May 2

console.log('-----------slice() ---------------------');

/*
All Star Code Challenge #15
This Kata is intended as a small challenge for my students

Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d
// -multicolour-text-board-250x250.jpg) to help get some more business.

The scroller works by replacing the current text string with a similar text string, but with the first letter shifted
to the end; this simulates movement.

    You're father is far too busy with the business to worry about such details, so, naturally, he's making you come
up with the text strings.

    Create a function named rotate() that accepts a string argument and returns an array of strings with each letter
from the input string being rotated to the end.
rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
Note: The original string should be included in the output array The order matters. Each element of the output
array should be the rotated version of the previous element. The output array SHOULD be the same length as the input
string The function should return an emptry array with a 0 length string, '', as input*/

function rotate(str){
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        arr.push(str.slice(i+1) + str.slice(0,i+1));
    }
    return arr;
}
console.log(rotate("Hello"));
console.log('+++-----------slice() ---------------------');

/*
Tail Swap
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at ' +
'beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after
each colon swapped.

    Examples
    ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
    ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]*/

function tailSwap(arr) {
    let v= arr[0].split(':');
    let v1= arr[1].split(':');
    return [`${v[0]}:${v1[1]}`, `${v1[0]}:${v[1]}`]
}
console.log(tailSwap(['abc:123', 'cde:456']));

console.log('-----------replace() ---------------------');
//Массив объектов. Символ 'x' означает состояние 'on', символ '-' (дефис) означает состояние 'off',
// а символ '_' (нижнее подчёркивание) означает продолжительность состояния 'on'.

var strK = 'x-x_';
var retArr = [];
str.replace(/(x_*)|(-)/g, function(match, p1, p2) {
    if (p1) { retArr.push({ on: true, length: p1.length }); }
    if (p2) { retArr.push({ on: false, length: 1 }); }
}); //[ { on: false, length: 1 } ]
console.log(retArr);
console.log('-----------replace() ---------------------');
/*
Vowel remover
Create a function called shortcut to remove all the lowercase vowels in a given string.

    Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby*/
function shortcut(string){
    let re = /[aeiou]/g;
    return string.replace(re,'');
}
console.log(shortcut("codewars"));

function shortcut1(string){
    return string.replace(/[aeiou]/g,'')
}
console.log(shortcut1("codewars"));
console.log('-----------replace() ---------------------');

/*
Complementary DNA
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for
    the development and functioning of living organisms.

    If you want to know more http://en.wikipedia.org/wiki/DNA

    In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side
of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or
there is no DNA at all (again, except for Haskell).

    More similar exercise are found here http://rosalind.info/problems/list-view/ (source)
    DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" */
function DNAStrand(dna) {
    dna.split('');
    let s=''
    for(let i=0; i<dna.length; i++){
        if(dna[i]==='A') s= s+ 'T';
        if(dna[i]==='T') s= s+ 'A';
        if(dna[i]==='G') s= s+ 'C';
        if(dna[i]==='C') s= s+ 'G';
    }
    return s;
}
console.log(DNAStrand ("GTAT")); //CATA
console.log('-----------replace() ---------------------');

//Others solutions
function DNAStrand1(dna){
    return dna
        .replace(/A/g, 't')
        .replace(/T/g, 'a')
        .replace(/C/g, 'g')
        .replace(/G/g, 'c').toUpperCase();
}
console.log(DNAStrand1("GTAT")); //CATA
console.log('-----------replace() ---------------------');

//other user solution
let pairs = { A: "T", T: "A", C: "G", G: "C" };
const DNAStrand4 = dna => dna.replace(/./g, c => pairs[c]);

console.log('-----------replace() ---------------------');

/*
//DNA to RNA Conversion
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four
nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

    Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical
structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

    Create a function which translates a given DNA string into RNA.

    For example:
    The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid,
    i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

    "GCAT"  =>  "GCAU"*/
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'u').toUpperCase();
}
console.log(DNAtoRNA("TTTT")); //UUUU
console.log('-----------replace() ---------------------');

//Ohters codewars solution
function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}
console.log('-----------replace() ---------------------');

//Or another codewars solution
DNAtoRNA = dna => dna.split('').map( i =>  i == 'T' ? i = 'U' : i).join('');

console.log('-----------replace() ---------------------');

/*
Help the Fruit Guy
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants
to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"]
the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array
of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

    Notes
If the array is null/nil/None or empty you should return empty array ([]).
    The rotten fruit name will be in this camelcase (rottenFruit).
    The returned array should be in lowercase.
*/
function removeRotten(bagOfFruits){
    if (!Array.isArray(bagOfFruits) || !bagOfFruits.length) {return []}
    for(let i=0; i<bagOfFruits.length; i++){
        if(bagOfFruits[i].includes('rotten')){
            bagOfFruits[i]=bagOfFruits[i].replace('rotten','').toLowerCase();
        }
    }
    return bagOfFruits
}
console.log(removeRotten(["apple","rottenBanana","kiwi","melone","orange"]));
//Other solutions from codewars:
function removeRotten(arr){
    return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;
}
//Other solutions from codewars:

removeRotten = a => a == null ? [] : a.map(e => e.replace('rotten', '').toLowerCase());

console.log('-----------replace() ---------------------');
/*
//Correct the mistakes of the character recognition software
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched
and stored on a computer.

    When documents (especially pretty old ones written with a typewriter), are digitised character recognition
softwares often make mistakes.

    Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.*/
function correct(string)
{
    return string
        .replace(/5/g, 'S')
        .replace(/0/g, 'O')
        .replace(/1/g, 'I');

}
console.log(correct('J. K. R0WL1NG - HARRY P0TTER AND THE PR150NER 0F Azkaban'));
console.log('-----------replace() ---------------------');

/*
Get number from string
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function: ####javascript

getNumberFromString(s)*/
function getNumberFromString(s) {
    return +s.replace(/[^0-9.]/g,''); //remove all the alphabetic characters
}
//Other solutions from codewars
function getNumberFromString(s) {
    return +s.replace(/\D/g, "");
}
//OR
function getNumberFromString(s) {
    return parseInt(s.replace(/[^\d]+/g, ""), 10)
}
console.log(getNumberFromString("1"));
console.log(getNumberFromString("this is number: 7"));