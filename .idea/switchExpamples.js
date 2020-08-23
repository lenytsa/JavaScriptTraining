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
