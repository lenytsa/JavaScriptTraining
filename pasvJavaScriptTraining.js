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
