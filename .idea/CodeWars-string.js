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