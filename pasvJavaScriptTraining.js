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
console.log('-------------------------------------')

// //Время года
// Дан номер месяца (число от 1 до 12). Получить время года (зима, весна, лето, осень).
//
//     Напишите функцию с именем season, которая принимает номер месяца month, и возвращает время года:
//
//     "Winter", если месяц = 1, 2 или 12;
// "Spring", если месяц = 3, 4 или 5;
// "Summer", если месяц = 6, 7 или 8;
// "Fall", если месяц = 9, 10 или 11.
// Примеры:
//
//     функция season(12) должна возвратить "Winter".
function season(month){
    let result;
switch (month) {
    case 1:
    case 2:
    case 12:
        result = 'Winter';
    break;
    case 3:
    case 4:
    case 5:
        result = 'Spring';
        break;
    case 6:
    case 7:
    case 8:
        result = 'Summer';
        break;
    case 9:
    case 10:
    case 11:
        result = 'Fall';
       break;
       default:
        result = 'Not a valid number'

    }
    return  result;
}
console.log(season(1));
console.log('-------------------------------------')
//Семь цветов радуги
// Семицветный спектр радуги впервые определил Исаак Ньютон. Вот эти цвета: red (красный), orange (оранжевый), yellow (желтый), green (зеленый), blue (голубой), indigo (индиго), violet (фиолетовый).
//
//     Напишите функцию с именем rainbowСolor, которая принимает строку color, содержащую цвет, и возвращает true, если радуга содержит этот цвет, и false в противном случае.
//
//     Примеры:
//
// функция rainbowСolor('red') должна возвратить true.
function rainbowColor(color){
    return color === 'red' || color === 'orange' || color === 'yellow' || color === 'green' || color === 'blue' || color === 'indigo' || color === 'violet';
}
console.log(rainbowColor('orange'));
console.log('-------------------------------------')
// //Есть ли хотя бы одно четное число в наборе?
// Напишите функцию с именем atLeastOneEven, которая принимает три числа a, b, c в качестве аргументов, и возвращает true, если хотя бы одно из чисел четное, и false в противном случае.
//
//     Примеры:
//
// функция atLeastOneEven(3, 4, 5) должна возвратить true;
// функция atLeastOneEven(3, 7, 9) должна возвратить false.
function atLeastOneEven(a, b, c){
    return a % 2===0 || b %2 === 0 || c %2 === 0;
}
console.log(atLeastOneEven(3, 4, 5));
console.log(atLeastOneEven(3, 7, 9));
console.log('-------------------------------------')
// //Есть ли хотя бы одно отрицательное число среди данных четырех чисел?
// Напишите функцию с именем atLeastOneNegative, которая принимает четыре числа a, b, c, d в качестве аргументов,
// и возвращает true, если хотя бы одно из чисел отрицательное, и false в противном случае.
// функция atLeastOneNegative(3, -4, 5, 0) должна возвратить true;
// функция atLeastOneNegative(3, 7, 9, 12) должна возвратить false.
function atLeastOneNegative(a, b, c, d){
    return a < 0 || b < 0 || c < 0 || d < 0;
}
console.log(atLeastOneNegative(3, -4, 5, 0));
console.log(atLeastOneNegative(3, 7, 9, 12));
console.log('-------------------------------------')

//Счастливые числа в Японии
// Счастливые числа в Японии: «8», «3», «5», «7».
// Напишите функцию с именем luckyNumber, которая принимает два числа a, b в качестве аргументов, и возвращает true,
// если хотя бы одно из данных чисел считается в Японии счастливым, и false в противном случае.
// функция luckyNumber(3, 6) должна возвратить true;
// функция luckyNumber(7, 8) должна возвратить true;
// функция luckyNumber(1, 2) должна возвратить false.
function luckyNumber(a, b){
    return a === 8 || a === 3 || a === 5 || a === 7 || b === 8 || b === 3 || b === 5 || b === 7;
}
console.log(luckyNumber(3, 6));
console.log(luckyNumber(7, 8));
console.log(luckyNumber(1, 2));
console.log('-------------------------------------')

//Пифагорова тройка
// Дано три числа. Определить, являются ли эти числа “Пифагоровой тройкой”.
// Числа a, b, c являются “Пифагоровой тройкой”, если квадрат одного из чисел равен
// сумме квадратов двух других чисел, например, a**2 + b**2 = c**2.
// Напишите функцию с именем pythagoreanThree, которая принимает три числа a, b, c в
// качестве аргументов и возвращает
// true, если числа являются “Пифагоровой тройкой”, и false, в противном случае.
// функция pythagoreanThree(3, 4, 5) должна возвратить true;
// функция pythagoreanThree(5, 7, 9) должна возвратить false.
function pythagoreanThree(a, b, c){
    return a**2 + b**2 === c**2;
}
console.log(pythagoreanThree(3, 4, 5));
console.log(pythagoreanThree(5, 7, 9));



