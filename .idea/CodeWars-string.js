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
