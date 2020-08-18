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
