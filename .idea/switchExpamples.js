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
console.log(digitToWords(20));