// Степень числа
// Напишите функцию с именем power, которая принимает два числа x, y в качестве аргументов и возвращает x в степени y.
// функция power(5, 3) должна возвратить 125;
// функция power(3, 0) должна возвратить 1.
// Write your solution here
function power(x, y){
    return Math.pow(x,y)
}
console.log('----------------------')
//Степени элементов массива
// question
// Дан массив arr. Измените элементы массива, возведя каждый четный элемент в квадрат, а каждый нечетный элемент
// - в куб.
//
// Напишите функцию с именем powerArray, которая принимает массив arr, возводит каждый четный элемент в
// квадрат, каждый нечетный элемент - в куб, и возвращает измененный массив.
// функция powerArray([1, 2, 3, 5]) должна возвратить [1, 4, 27, 125];
// функция powerArray([2, 4, 6, 1]) должна возвратить [4, 16, 36, 1] .
function powerArray(arr){
    let result =[];
    for(let i =0; i<arr.length;i++){
        if(arr[i]%2 === 0){
            result.push(Math.pow(arr[i],2));
        }
        if(arr[i]%2 !==0){
            result.push(Math.pow(arr[i],3));
        }
    }
    return result;
}
//console.log(powerArray([1, 2, 3, 5]));
//console.log(powerArray([1,3,-1,2]));
console.log(powerArray([2,-2,2]));
console.log(powerArray([-2,0,1,0,-1,2])); //[4,0,1,0,-1,4]