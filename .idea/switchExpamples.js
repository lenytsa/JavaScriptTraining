//Рабочие и выходные дни
// Напишите функцию с именем workdayOrWeekend, которая принимает
// число day в качестве аргумента (число от 1 до 7 - номер дня недели) и возвращает строку
// "Work day", если день недели 1, 2, 3, 4, 5 или "Weekend", если день недели 6, 7. Если аргументом
// является число, меньшее 1 или большее 7, функция должна вернуть строку "Wrong input".
//
//     В решении необходимо использовать оператор switch.
//      функция workdayOrWeekend(3) должна возвратить "Work day";
//     функция workdayOrWeekend(7) должна возвратить "Weekend";
//     функция workdayOrWeekend(8) должна возвратить "Wrong input"

function workdayOrWeekend1(day){
    let res = "";
    switch (day) {
        case 1: res =  'Work day';
        case 2: res =  'Work day';
        case 3: res =  'Work day';
        case 4: res =  'Work day';
        case 5: res =  'Work day';
            break;
        case 6: res =  'Weekend';
        case 7: res =  'Weekend';
            break;
        default:
            console.log('Wrong input');
    }
    return res;
}
console.log(workdayOrWeekend1(10));
console.log('---------------------------------------')
function workdayOrWeekend(day){

    switch (day) {
        case 1: return 'Work day';
        case 2: return 'Work day';
        case 3: return 'Work day';
        case 4: return 'Work day';
        case 5: return 'Work day';
        case 6: return 'Weekend';
        case 7: return 'Weekend';
        default: return 'Wrong input';
    }
}

console.log(workdayOrWeekend(6));
console.log('---------------------------------------')
//Правильные многоугольники
// /Напишите функцию с именем polygonName, которая принимает целое число n
// в качестве аргумента (число от 3 до 10 - количество вершин многоугольника) и возвращает название многоугольника.
// Если аргументом является число, меньшее 3 или большее 10, функция должна вернуть значение undefined. В решении
// необходимо использовать оператор switch.
//     Названия многоугольников в зависимости от числа вершин: 3: 'triangle'; 4: 'square'; 5: 'pentagon'; 6:
//     'hexagon'; 7:
//     'heptagon'; 8: 'octahedron'; 9: 'nonagon'; 10: 'decagon'.
//     функция polygonName(3) должна возвратить "triangle";
//     функция polygonName(2) должна возвратить undefined.
function polygonName(n){
switch (n) {
    case 3: return 'triangle';
    case 4: return  'square';
    case 5: return 'pentagon';
    case 6: return 'hexagon';
    case 7: return 'heptagon';
    case 8: return 'octahedron';
    case 9: return 'nonagon';
    case 10: return 'decagon';
    default: return  undefined;
    }
}
console.log(polygonName(8));
console.log('---------------------------------------')

//Изображение мебели на плане комнаты
// Напишите функцию с именем digitToName, которая в качестве аргумента принимает целое число от
// 1 до 7, обозначающее предмет мебели или оборудования, и возвращает строку, содержащую название этого предмета.
// Если аргументом является число, меньшее 1 или большее 7, функция должна вернуть undefined.
// В решении необходимо использовать оператор switch.
//
//     1 - 'wardrobe'; 2 - 'table'; 3 - 'chair'; 4 - 'bed'; 5 - 'bookshelf'; 6 - 'exercise bike';
//     7 - 'air-conditioner'.
//
//         Примеры:
//
//     функция digitToName(2) должна возвратить "table";
//     функция digitToName(0) должна возвратить undefined.
function digitToName(n){
switch (n) {
    case 1: return 'wardrobe';
    case 2: return 'table';
    case 3: return  'chair';
    case 4: return  'bed';
    case 5: return 'bookshelf';
    case 6: return 'exercise bike';
    case 7: return 'air-conditioner';
    default: return undefined;
    }
}
console.log(digitToName(4));
console.log('---------------------------------------')

//Числительные в английском языке
// Напишите функцию с именем digitToWords, которая в качестве аргумента принимает целое число
// от 0 до 12, и возвращает массив из двух слов, содержащий названия количественного и порядкового числительного.
//     Если аргументом является число, меньшее 0 или большее 12, функция должна
//     вернуть undefined. В решении необходимо использовать оператор switch.
//     Количественные числительные: zero, one, two, three, four, five, six, seven,
//     eight, nine, ten, eleven, twelve.
//         Порядковые числительные: zeroth, first, second, third, fourth, fifth, sixth,
//         seventh, eighth, ninth, tenth, eleventh, twelfth.
//     функция digitToWords(2) должна возвратить [two, second];
//     функция digitToWords(20) должна возвратить undefined.
function digitToWords(n){
switch (n) {
    case 0: return ['zero', 'zeroth'];
    case 1: return ['one', 'first'];
    case 2: return ['two', 'second'];
    case 3: return ['three', 'third'];
    case 4: return ['four', 'fourth'];
    case 5: return ['five', 'fifth'];
    case 6: return ['six', 'sixth'];
    case 7: return ['seven', 'seventh'];
    case 8: return ['eight', 'eighth'];
    case 9: return ['nine', 'ninth'];
    case 10: return ['ten', 'tenth'];
    case 11: return ['eleven', 'eleventh'];
    case 12: return ['twelve', 'twelfth'];
    default: return undefined;
    }
}
console.log(digitToWords(3));
console.log(digitToWords(2));
console.log('---------------------------------------')

//Приветствие на разных языках
// Напишите функцию с именем greetings, которая в качестве аргументов принимает
// имя человека name и язык language и возвращает приветствие типа "Hello name!"
// на указанном языке. Если аргументом является язык, не входящий в словарь, функция должна
// вернуть приветствие на английском языке.
// 'English' : 'Hello';
//
// 'German' : 'Hallo';
//
// 'French': 'Bonjour';
//
// 'Spanish': 'Hola';
//
// 'Italian': 'Saluto';
//
// 'Russian': 'Привет';
//
// 'Czech': 'Nazdar'.
//
//     В решении необходимо использовать оператор switch.
// функция greetings('Peter', 'Russian') должна возвратить "Привет Peter!";
// функция greetings('Ann', 'Chinese') должна возвратить "Hello Ann!".
//
function greetings(name, language){
switch (language) {
    case 'Russian': return `Привет ${name}!`;
    case 'German': return `Hallo ${name}!`;
    case 'French': return `Bonjour ${name}!`;
    case 'Spanish': return `Hola ${name}!`;
    case 'Italian': return `Saluto ${name}!`;
    case 'Czech': return `Nazdar ${name}!`;
    default:  return `Hello ${name}!`;
    }
}
console.log(greetings('Peter', 'Russian'));
console.log(greetings('Ann', 'Chinese'));
console.log('---------------------------------------')

// Название дня недели
// Напишите функцию с именем dayOfWeek, которая принимает число day в качестве аргумента (число от
// 1 до 7 - номер дня недели) и возвращает название дня недели:
//     1 - 'Monday', 2 - 'Tuesday', 3 - 'Wednesday', 4 - 'Thursday', 5 - 'Friday', 6 - 'Saturday', 7 - 'Sunday'.
//         Если аргументом является число, меньшее 1 или большее 7, функция должна вернуть строку "Wrong day".
//         функция dayOfWeek(3) должна возвратить "Wednesday";
//     функция dayOfWeek(8) должна возвратить "Wrong day".
function dayOfWeek(day){
switch (day) {
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thursday';
    case 5: return 'Friday';
    case 6: return 'Saturday';
    case 7: return 'Sunday';
    default: return 'Wrong day';
    }
}
console.log(dayOfWeek(9));
console.log('---------------------------------------')

//Экзаменационная отметка
// Создайте функцию с именем examinationMark, которая принимает значение mark (число от 1 до 5)
// в качестве аргумента (экзаменационная отметка) и возвращает соответствующее название отметки:
//     1 - 'bad', 2 - 'unsatisfactory', 3 - 'mediocre', 4 - 'good', 5 - 'excellent'.
//         Если аргументом является число, меньшее 1 или большее 5, функция должна вернуть строку "wrong data".
//     В решении необходимо использовать оператор switch.
//         функция examinationMark(4) должна возвратить "good";
//     функция examinationMark(13) должна возвратить "wrong data".
//         Write your solution here
function examinationMark(mark){
    switch (mark) {
        case 1: return 'bad';
        case 2: return 'unsatisfactory';
        case 3: return 'mediocre';
        case 4: return 'good';
        case 5: return 'excellent';
        default: return 'wrong data';
    }
}
console.log(examinationMark(5));
console.log('---------------------------------------')

//Время года - найдите баги
// Требуется создать функцию с именем season, которая принимает число от 1 до 12 month в качестве
// аргумента (номер месяца) и возвращает соответствующее название времени года: 'Winter', 'Spring',
// 'Summer', 'Autumn'. Если аргументом является число, меньшее 1
// или большее 12, функция должна вернуть строку "Wrong month".
//     Исправьте ошибки, чтобы функция возвращала верный результат.
// функция season(4) должна возвратить "Spring";
// функция season(13) должна возвратить "Wrong month"
function season(month){
    let res;
    switch (month) {
        case 12: case 1: case 2: res = 'Winter'; break;
        case 3: case 4: case 5: res = 'Spring'; break;
        case 6: case 7: case 8: res = 'Summer'; break;
        case 9: case 10: case 11: res = 'Autumn'; break;
        default: res = 'Wrong month';
    }
    return res;
}
console.log(season(4));
console.log('---------------------------------------')

//Количество дней в месяце
// Напишите функцию с именем daysInMonth, которая принимает число от 1 до 12 month в качестве аргумента
// (номер месяца) и возвращает
// количество дней в этом месяце для невисокосного года.
//     Если аргументом является число, меньшее 1 или большее 12, функция должна вернуть строку "Wrong month".
// функция daysInMonth(4) должна возвратить 30;
// функция daysInMonth(13) должна возвратить "Wrong month".
function daysInMonth(month){
    switch (month) {
        case 1: return 31;
        case 2: return 28;
        case 3: return 31;
        case 4: return 30;
        case 5: return 31;
        case 6: return 30;
        case 7: return 31;
        case 8: return 31;
        case 9: return 30;
        case 10: return 31;
        case 11: return 30;
        case 12: return 31;
        default: return 'Wrong month';
    }
}
console.log(daysInMonth(4));
console.log(daysInMonth(13));