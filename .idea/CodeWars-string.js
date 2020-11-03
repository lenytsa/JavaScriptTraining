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