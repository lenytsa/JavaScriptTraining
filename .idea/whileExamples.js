let i = 1;                // задаем начальное значение переменной i
while (i <= 10) {         // задаем условие, при выполнении которого должен выполняться цикл
    console.log( i );      // выполняется действие цикла – вывод в консоль значения переменной i
    i++;                   // увеличиваем значение переменной i на 1 для перехода к следующей итерации цикла
}
console.log('-----------------------')
//Найти частное и остаток от деления без использования операций деления и нахождения остатка
// question
// Даны два положительных целых числа n и k. Используя только операции сложения и вычитания, найдите результат деления числа n на число k (частное), а также остаток от деления.
//
// Напишите функцию с именем quotientAndRemainder, которая принимает два числа n, k и возвращает частное и остаток от деления в виде массива [quotient, remainder].
//
// Примеры:
//
// функция quotientAndRemainder(5, 5) должна возвратить [1, 0];
// функция quotientAndRemainder(5, 2) должна возвратить [2, 1];
// функция quotientAndRemainder(12, 5) должна возвратить [2, 2];
// функция quotientAndRemainder(5, 7) должна возвратить [0, 5].
function quotientAndRemainder(n, k){
let q =0 //quotent
    while(n>=k){
    n = n-k; // 13-5+8, 8-5 = 3, process was done 2 times, thus quotent =2 and remainder (n) =3
    q++;
    }
    return [q,n];
}
console.log(quotientAndRemainder(13, 5));
console.log('**-----------------------**')

//find first negative element in array and his index. Note break is used in this case
let array = [2, 9, -3, 8, -8, 0, 5, -6];
let negative;
let index;
for(let i =0; i<array.length; i++)
{
    if(array[i]<0){
        negative= array[i];
        index = i;
        break;
    }
}
console.log(negative,index);
console.log('-----------------------')

//find Last negative element in array and his index
//Note, no break needed in this case
let array1 = [2,9, -3, 8, -8, 0, 5, -6];
let negative1;
let index1;
for(let i =0; i<array1.length; i++)
{
    if(array1[i]<0){
        negative1= array1[i];
        index1 = i;
    }
}
console.log(negative1,index1);
//
console.log('-----------------------')
//find first negative element in array and his index using function
function findFirstNegativeElement(arr) {
    let array = [0,-1,-2, 9, -3, 8, -8, 0, 5, -6];
    let negative;
    let index;
    for(let i =0; i<array.length; i++)
    {
        if(array[i]<0){
            negative= array[i];
            index = i;
            return [negative,index];
        }
    }
}
console.log(findFirstNegativeElement());
console.log('-----------------------')
//Reverse a string; Solution 1
let str = 'summer';
let resultString = '';
for(let i= str.length -1; i >=0; i-- )
    {
    resultString = resultString + str[i];
    }
console.log(resultString);
console.log('-----------------------')

//Reverse a string; Solution 2
let str2 = 'Summer';
let resultString2 = '';
for(let i=0; i<str2.length; i++ )
{
    resultString2 = str2[i]+ resultString2;
}
console.log(resultString2);
console.log('-----------------------')

//Reverse a string; Solution 3.
let sOr = 'SummeR';
let s = '';
for(let letter of sOr )
{
    s = letter + s;
}
console.log(s);

console.log('-----------------------')

//in given array, reverse each string in array
let words = ['Noon', 'sun', 'day', 'dad', 'happy'];
for(let i =0; i<words.length; i++){
    let s= '';
    for(let letter of words[i]){
        s = letter + s;
    }
    words[i] = s;
}
console.log(words);

