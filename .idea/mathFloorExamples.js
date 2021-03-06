//Расстояние в метрах
// question
// Дано расстояние length в сантиметрах. Найдите количество полных метров в этом расстоянии. (1 м = 100 см).
// Напишите функцию с именем distanceInMeters, которая принимает число length (расстояние в сантиметрах) в
// качестве аргумента и
// возвращает количество полных метров в этом расстоянии. Используйте метод Math.floor().
// функция distanceInMeters(4814) должна возвратить 48;
// функция distanceInMeters(525) должна возвратить 5;
// функция distanceInMeters(599) должна возвратить 5.
function distanceInMeters(length){
    return Math.floor(length/100);
}
console.log(distanceInMeters(4814));

console.log('-----------------------')
// Вес в тоннах
// Дан вес m в килограммах. Найдите количество полных тонн в этом весе. (1 т = 1000 кг).
//
// Напишите функцию с именем weightInTons, которая принимает число m
// (вес в килограммах) в качестве аргумента и возвращает количество полных тонн в этом весе. Используйте
// метод Math.floor().
// функция weightInTons(4163) должна возвратить 4;
// функция weightInTons(23789) должна возвратить 23;
// функция weightInTons(899) должна возвратить 0.
function weightInTons(m){
    return Math.floor(m/1000);
}
console.log(weightInTons(4163));

console.log('-----------------------')

//Размер файла в килобайтах
//Дан размер файла n в байтах. Найдите количество полных килобайтов в этом размере файла. (1 K = 1024 bytes).
//
// Напишите функцию с именем fileSizeInK, которая принимает число n (размер файла в байтах) в качестве
// аргумента и возвращает количество полных
// килобайтов в этом размере. Используйте метод Math.floor().
// функция fileSizeInK(1450) должна возвратить 1;
// функция fileSizeInK(3100) должна возвратить 3;
// функция fileSizeInK(57883) должна возвратить 56.
function fileSizeInK(n){
    return Math.floor(n/1024);
}
console.log(fileSizeInK(3100));

console.log('-----------------------')

//Сколько нужно ковриков?
// Даны два целых положительных числа a и b. a - длина коридора, b - длина коврика.
//     Какое количество ковриков (без перекрытия) необходимо, чтобы застелить весь коридор?
//     rugs
//     Напишите функцию с именем countOfRugs, которая принимает числа a и b в качестве аргументов и
//     возвращает максимальное количество ковриков длины b, необходимое для того,
//     чтобы застелить коридор длиной a. Используйте метод Math.floor().
// функция countOfRugs(5, 2) должна возвратить 2;
// функция countOfRugs(30, 4) должна возвратить 7;
// функция countOfRugs(3, 4) должна возвратить 0.
function countOfRugs(a, b){
    return Math.floor(a/b);
}
console.log(countOfRugs(30, 4));
console.log('-----------------------')

//Обмен валюты
// Доллар стоит x рублей. Какое наибольшее количество долларов можно купить на amount рублей?
//     Напишите функцию с именем changeMoney, которая принимает числа x (стоимость 1 доллара) и
// amount (количество денег) в качестве аргументов и возвращает наибольшее
// количество долларов, которое можно купить на amount рублей.
// функция changeMoney(60, 1220) должна возвратить 20;
// функция changeMoney(50, 1549) должна возвратить 30;
// функция changeMoney(80, 1500) должна возвратить 18.
function changeMoney(x, amount){
    return Math.floor(amount/x);
}
console.log(changeMoney(50, 1549));

console.log('-----------------------')

//Сколько минут прошло с начала дня?
// С начала дня прошло n секунд. Найдите полное количество минут, которые прошли с начала дня.
//     Напишите функцию с именем amountOfMinutes, которая принимает число n
// (количество секунд) в качестве аргумента и возвращает полное количество минут.
// функция amountOfMinutes(7804) должна возвратить 130;
// функция amountOfMinutes(3630) должна возвратить 60.
function amountOfMinutes(n){
    return Math.floor(n/60);
}
console.log(amountOfMinutes(7804))

