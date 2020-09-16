/*
Средняя скорость путешественника
question
Путешественник прошел расстояние s1 км от пункта A до пункта B за t1 часов, затем расстояние s2 км от пункта B до
 пункта C за t2 часов. Найдите среднюю скорость путешественника и результат округлите до 2 знаков после запятой.

    Напишите функцию averageSpeed, которая принимает 4 числа s1, t1, s2, t2 в качестве аргументов и
     возвращает среднюю скорость путешественника. Результат округлите до 2 знаков после запятой и
      возвратите в виде числа.

    Примеры:

функция averageSpeed(14, 3, 6, 2) должна возвратить 4.
функция averageSpeed(5, 2, 10, 3) должна возвратить 3.
функция averageSpeed(17, 5, 20, 4) должна возвратить 4.11.*/
function averageSpeed(s1, t1, s2, t2){
    let speed = ((s1 + s2)/(t1 + t2));
    return +speed.toFixed(2);
}
console.log(averageSpeed(17, 5, 20, 4));
console.log(averageSpeed(14, 3, 6, 2));