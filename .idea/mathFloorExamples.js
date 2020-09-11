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