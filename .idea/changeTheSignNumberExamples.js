// //Изменение знака числа
// Дано число. Получить число, обратное данному.
//     Напишите функцию с именем oppositeNumber, которая принимает число num
// в качестве аргумента и возвращает противоположное по знаку число.
// функция oppositeNumber(9) должна возвратить -9;
// функция oppositeNumber(-7) должна возвратить 7;
// функция oppositeNumber(0) должна возвратить 0.
function oppositeNumber(num){
return num<0? (-num): -num;
}
console.log(oppositeNumber(7));
console.log('------------------------------------')
//Изменение знака числа большего из двух чисел
// Напишите функцию с именем changeMax, которая принимает два числа a и b в качестве аргументов,
//     меняет знак большего из чисел на противоположный и возвращает это число.
//     Если числа равны, вернуть сообщение "The numbers are equal".
// функция changeMax(9, 4) должна возвратить -9;
// функция changeMax(1, 6) должна возвратить -6;
// функция changeMax(0, 4) должна возвратить -4;
// функция changeMax(-1, -3) должна возвратить 1;
// функция changeMax(4, 4) должна возвратить "The numbers are equal".
function changeMax(a, b){
    if(a===b) return 'The numbers are equal';
    if(a > b) return -a;
    if(a < b) return -b;
}
console.log( changeMax(1, 6));
console.log( changeMax(1, 1));
console.log('------------------------------------')

// Изменение числа в зависимости от его знака
// Напишите функцию с именем changeNumber, которая принимает
// число num в качестве аргумента и увеличивает это число в два раза, если число положительное
//     , или меняет знак этого числа на противоположный, если число отрицательное.
// функция changeNumber(9) должна возвратить 18;
// функция changeNumber(-7) должна возвратить 7;
// функция changeNumber(0) должна возвратить 0.
function changeNumber(num){
    if(num<0) return (-num);
    if(num>0) return num *2;
    if(num===0) return 0;
}
console.log(changeNumber(10));
console.log('------------------------------------')

//Изменение знака суммы чисел
// Напишите функцию с именем oppositeSum, которая принимает три числа a, b, c в качестве
// аргументов и и возвращает сумму этих чисел с обратным знаком.
// функция oppositeSum(1, 2, 3) должна возвратить -6;
// функция oppositeSum(-1, -2, -3) должна возвратить 6;
// функция oppositeSum(0, 1, -1) должна возвратить 0.
function oppositeSum(a, b, c){
    let sum = a + b+ c;
    if(sum>0) return -sum;
    if(sum<0) return -sum;
    if(sum===0) return 0;
}
console.log(oppositeSum(0, 1, -1));
console.log('------------------------------------')

//Изменение знака каждого элемента массива
// Напишите функцию с именем oppositeArray, которая принимает массив arr в
// качестве аргумента и и возвращает массив, в котором каждый элемент заменен на противоположный по знаку элемент.
// функция oppositeArray([1, -2, 3]) должна возвратить [-1, 2, -3].

function oppositeArray(arr){
    let otherArr =[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<= 0){
            otherArr.push(arr[i] *(-1));

        }
        else if(arr[i]>=0){
            otherArr.push(arr[i] *(-1));
        }
    }
    return otherArr;
}
console.log(oppositeArray([1, -2, 3]));
console.log(oppositeArray([0, -3, -9]));
console.log('------------------------------------')

//Симметричная точка на числовой оси
// Напишите функцию с именем oppositePoint, которая принимает число x (координата точки M)
// в качестве аргумента и возвращает координату точки N в виде строки "N(x)".
// функция oppositePoint(4) должна возвратить "N(-4)";
// функция oppositePoint(-4) должна возвратить "N(4)";
// функция oppositePoint(0) должна возвратить "N(0)".
function oppositePoint(x){
    if(x>0) return `N(${x*-1})`;
    if(x<0) return `N(${x*-1})`;
    if(x===0) return `N(0)`;
}
console.log( oppositePoint(-10));

//Симметричная точка на плоскости
//Точки M и N симметричны относительно начала координат.
// Напишите функцию с именем oppositePoint, которая принимает числа x и y (координаты точки M) в
// качестве аргументов и возвращает координаты точки N в виде строки "N(x, y)".
// функция oppositePoint(4, 5) должна возвратить "N(-4, -5)";
// функция oppositePoint(-4, -5) должна возвратить "N(4, 5)";
// функция oppositePoint(-4, 5) должна возвратить "N(4, -5)";
// функция oppositePoint(4, -5) должна возвратить "N(-4, 5)";
// функция oppositePoint(4, 0) должна возвратить "N(-4, 0)";
// функция oppositePoint(0, 0) должна возвратить "N(0, 0)".
function oppositePoint(x, y){
    if(x>0 && y>0) return `N(${x*-1},${y*-1})`;
    if(x<0 && y<0) return `N(${x*-1},${y*-1})`;
    if(x<0 && y>0) return `N(${x*-1},${y*-1})`;
    if(x>0 && y<0) return `N(${x*-1},${y*-1})`;
    if(x===0) return `N(0,0)`;
}
console.log(oppositePoint(-4, -5));