// //https://app.pasv.us/course/5d1cbf67086fc30038bf1859/lesson/5ddc43e2a9ccbf003caa26d3
// Описание числа
// Дано целое число т 1 до 999. Получите описание числа в виде строки: "one-digit number",
// "two-digit number", "three-digit number".
//
//     Напишите функцию с именем numberDescription, которая принимает число num в качестве аргумента и возвращает
//
// "one-digit number", если число однозначное,
//     "two-digit number", если число двухзначное,
//     "three-digit number", если число трехзначное.
//     Примеры:
//
// функция numberDescription(1) должна возвратить "one-digit number";
// функция numberDescription(12) должна возвратить "two-digit number";
// функция numberDescription(134) должна возвратить "three-digit number".

function numberDescription(num){
    return num.toString().length;
}
console.log(numberDescription(311));
function numberDescription1(num){
   if(num.toString().length === 1){
       return 'one-digit number';
     }
   else if(num.toString().length === 2){
       return 'two-digit number';
   }else if(num.toString().length === 3){
       return 'three-digit number';
   }
}
console.log(numberDescription1(11));
console.log('-------------------------------------')
//Начинается ли хотя бы одно имя с буквы "A"?
// Даны три переменных, содержащие имена людей. Есть ли хоть одно имя, которое начинается на букву "A"?
//
//     Напишите функцию с именем nameStartsWithA, которая принимает три строки str1, str2, str3 в качестве аргументов и возвращает:
//
//     "Yes", если хотя бы одно имя начинается с буквы "A",
//     "No", в противном случае.
//     Примеры:
//
// функция nameStartsWithA('Alice', "Bob", "Fill") должна возвратить "Yes";
// функция nameStartsWithA('Nick', 'Bill', 'Ronald') должна возвратить "No".
function nameStartsWithA(str1, str2, str3){
let arr = [str1, str2, str3];
for (let i=0; i<arr.length; i++){
    if(arr[i].startsWith('A')){
        return 'Yes';
    }
}
return 'No';
}
console.log(nameStartsWithA('Alice', "Bob", "Fill"));
console.log('-------------------------------------')
function nameStartsWithA1(str1, str2, str3){
    let arr = [str1, str2, str3];
    for (letters of arr){
        if(letters.startsWith('A') ){
            return 'Yes';
        }
    }
    return 'No';
}
console.log(nameStartsWithA1('Boris', "Bob", "Fill"));
console.log('-------------------------------------')
//Вставать на работу или можно еще немного поспать?
// Напишите функцию с именем dayOfWeek, которая принимает номер дня недели day (число от 1 до 7) в качестве аргумента и возвращает:
//
//     "You can get some sleep", если номер дня недели 6 или 7;
// "Time to get up for work", в остальных случаях.
//     Примеры:
//
// функция dayOfWeek(3) должна возвратить "Time to get up for work";
// функция dayOfWeek(7) должна возвратить "You can get some sleep".
function dayOfWeek(day){
    if(day === 6 || day === 7){
        return 'You can get some sleep';
    }
        return 'Time to get up for work';
}
console.log(dayOfWeek(7));
console.log('-------------------------------------')

// //Месяц покупки конфет
// Больше всего конфет люди покупают в декабре к Рождеству и Новому году,
//     и в феврале - ко дню Святого Валентина, и в октябре - к Хеллоуину.
//
//     Напишите функцию с именем sweetSeason, которая принимает номер месяца month
// (число от 1 до 12) в качестве аргумента и возвращает:
//
//     "Time to buy sweets", если номер месяца 2, 10, 12;
// "Not the time to buy sweets", в остальных случаях.
//     Примеры:
//
// функция sweetSeason(12) должна возвратить "Time to buy sweets";
// функция sweetSeason(7) должна возвратить "Not the time to buy sweets"
function sweetSeason(month){
if(month === 2 || month === 10 || month === 12){
    return 'Time to buy sweets';
    }
    return 'Not the time to buy sweets';
}
console.log(sweetSeason(4));
console.log('-------------------------------------')
//Цвета на флаге
// Американский флаг представляет собой прямоугольное полотнище с горизонтальными
// семью красными и шестью белыми полосами. В крыже тёмно-синего цвета — 50 пятиконечных белых звёзд.
//
//     Напишите функцию с именем flagColors, которая принимает строку color,
//     содержащую название цвета и возвращает:
//
//     "This color is on the flag", если color равен 'red', 'navy' или 'white';
// "This color is not on the flag", в остальных случаях.
//     Примеры:
//
// функция flagColors('red') должна возвратить "This color is on the flag";
// функция flagColors('green') должна возвратить "This color is not on the flag".
function flagColors(color){
if(color === 'red' || color === 'navy' || color === 'white'){
    return 'This color is on the flag';
    }
    return 'This color is not on the flag';
}
console.log(flagColors('blue'));
console.log(flagColors('red'));

