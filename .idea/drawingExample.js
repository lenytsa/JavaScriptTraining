//draw 20 rows contained 15 stars
for(let j= 1; j<=20; j++){
    let stars = ' ';
    for(let i=1; i<=15; i++ ){   //print one line with starts
        stars = stars + '*';
    }
    console.log(stars);
}
console.log('------------------')
//Create function pattern (n,m) that returns patern with stars (m: rows, n number of stars in row)
function pattern(n, m) {
    let stars = '';
for(let j=1; j<=m; j++){
        for(let i=1; i<=n; i++){
            stars = stars + '*';
      }
        if(j < m-1);{
        stars = stars + '\n';
            }
        }
return stars;
}
console.log(pattern(3,5));
console.log('------------------')

//Draw triangles
// *
// **
// ***
// ****
// *****
function drawTriangle(n) {
    let str = '';
    for(let i=1; i<=n; i++){
        for(let j = 1; j<=i; j++){
            str = str + '*';
    }
        if(i < n){
            str = str + '\n';
        }
    }
    return str;
}
console.log(drawTriangle(5));
console.log('------------------')

function drawTriangleUpSideDown(n) {
    let str = '';
    for(let i= n; i>=1; i--){
        for(let j = 1; j<=i; j++){
            str = str + '*';
        }
        if(i > 1){
            str = str + '\n';
        }
    }
    return str;
}
console.log(drawTriangleUpSideDown(5));
console.log('------------------')

function drawPattern2(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
          str = str + '_'.repeat(i) + '#';
          if(i < n-1){
              str = str +'\n';
      }
           }
    return str;
}
console.log(drawPattern2(5));
console.log('------------------')

function drawPattern3(n) {
    let space;
    let str = '';
    for (let i = 1; i <=n; i+=2) { //i is numbers of stars and rows
        space= (n-i) / 2; //numbers of emply spaces before stars
        str =  str + ' '.repeat(space) + '*'.repeat(i);
        if(i < n){
            str = str +'\n';
        }
    }
    return str;
}
console.log(drawPattern3(5));
for (let i = 0; i > 10; i++) {
    console.log (i);
}
console.log('------------------')

//
function recursiveStar(n){
    if(n === 0) return 0;
    recursiveStar(n - 1);
        return console.log('*'.repeat(n));
}
console.log('------------------')

recursiveStar(5)
function numericalTable(n, m){
    let str = '';
    for (let i = 1; i <= n; i++){
        str += i+(' '+i).repeat(m-1);
        if (i<n){
            str+='\n';
        }
    }
    return str;
}
console.log(numericalTable(1,6));
console.log(numericalTable(3,5));
console.log('------------------')

//Числовой треугольник
function numericalTriangle(n){
    let str = '';
    for(let i=1; i<=n; i++){
        for(let j = 1; j<=i; j++){
            if(j<i){
                str = str  + i + ' ';
            }
            else{
                str = str  + i;
            }
        }
        if(i < n){
            str = str +'\n' ;
        }
    }
    return str;
}
console.log(numericalTriangle(5))
console.log('------------------')

//Треугольник из звездочек
//Напишите функцию с именем starTriangle, которая принимает число n в качестве аргумента и возвращает треугольник из n строк, состоящих из звездочек (*). Все строки кроме последней, заканчиваются символом \n перевода строки.
//
// Например, для n = 7, должна быть получена строка:
//
// "*\n**\n***\n****\n*****\n******\n*******"
//
// При выводе в консоль такая строка отображается как "треугольник":
//функция starTriangle(1) должна возвратить: "*";
// функция starTriangle(3) должна возвратить: "*\n**\n***".

function starTriangle(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <=i; j++) {
            str = str + '*';
        }
        if(i < n){
            str = str + '\n';
        }
    }
    return str;
}

console.log(starTriangle(3))
console.log('---------------------------------------')
//Суммы элементов в двухмерном массиве.
//
// Напишите функцию с именем sumsInArray, которая принимает двухмерный
// массив arr в качестве аргумента и возвращает массив, содержащий суммы элементов вложенных массивов.

// функция sumsInArray([[1, 2], [2, -3], [3, 5], [3, 7]]) должна возвратить [3, -1, 8, 10];
// функция sumsInArray([[1, 0, 0], [2, 2]]) должна возвратить [1, 4];
// функция sumsInArray([[], [2, 2], [0]) должна возвратить [0, 4, 0].
//     Write your solution here
function sumsInArray(arr){
    let resSum =[];
    for(let elm of arr){
        resSum.push(calcSum(elm))
        }
    return resSum;
}
console.log(sumsInArray([[1, 0, 0], [2, 2], [ 4,5]]));

function calcSum(arr){
    let sum = 0;
for(let i=0; i<arr.length; i++) {
    sum = sum + arr[i];
}
return sum;
}
console.log(calcSum([1,2, 3]));
console.log('---------------------------------------')

