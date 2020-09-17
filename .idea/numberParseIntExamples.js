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