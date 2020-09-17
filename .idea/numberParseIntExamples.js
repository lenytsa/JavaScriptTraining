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