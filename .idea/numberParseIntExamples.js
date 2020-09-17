/*

"Какое сегодня число?"
question
На вопрос: "Какое сегодня число?" мы иногда кратко отвечаем: "5th of September", "16th of May", и так далее. Ваша задача - получить дату (только число).

Напишите функцию getDay, которая принимает строку answer (строка, содержащая дату) в качестве аргумента и возвращает число - день месяца.

    Примеры:

функция getDay("5th of September") должна возвратить 5.
функция getDay("16th of May") должна возвратить 16.
функция getDay("The 5th of April") должна возвратить NaN.*/
function getDay(answer){
    return Number.parseInt(answer);
}
console.log(getDay("5th of September"));

console.log('---------------')
/*
Содержит ли строка целое число?
    Напишите функцию isStringContainsNumber, которая принимает строку str в качестве аргумента и возвращает true, если строка содержит целое число, и false, в противном случае.

    Указание: строка содержит целое число, если результат нестрогого сравнения исходной строки и преобразования строки к целому числу равен true.

    Например,

'45' == Number.parseInt('45'); (результат сравнения '45' == 45 равен true)

'1z2' == Number.parseInt('1z2'); (результат сравнения '1z2' == 1 равен false)

Примеры:

    функция isStringContainsNumber("123") должна возвратить true.
    функция isStringContainsNumber("-34") должна возвратить true.
    функция isStringContainsNumber("s12") должна возвратить false.*/
function isStringContainsNumber(str){
    return str==Number.parseInt(str);
}
console.log(isStringContainsNumber("123"));
console.log(isStringContainsNumber("-34"));
console.log(isStringContainsNumber("s12"));


console.log('---------------')

/*Сколько жидкости выпила Клавдия за день?
Клавдия пьет в течение дня разные напитки. Информацию о том, что она выпивает, Клавдия записывает в массив, например,

    ["3 glasses of water", "1 glass of milk", "2 glasses of juice", "1 glass of wine"]

Какой объем жидкости выпила Клавдия за день?

    Напишите функцию hydrate, которая принимает массив arr, содержащий строки с названием и количеством стаканов выпитого напитка, и возвращает общее количество выпитой жидкости в мл.

1 стакан = 200 мл

Примеры:

    функция hydrate(["3 glasses of water", "1 glass of milk", "2 glasses of juice", "1 glass of wine"]) должна возвратить "1400 ml".
    функция hydrate(["1 glass of water"]) должна возвратить "200 ml".*/
function hydrate(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + Number.parseInt(arr[i]);
    }
    return `${sum * 200} ml`;
}
console.log(hydrate(["1 glass of water"]));
console.log(hydrate(["1 glass of water","2 glasses of juice" ]));





console.log('---------------')
