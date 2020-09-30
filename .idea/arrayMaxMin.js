/*
Поменяйте местами максимальный и минимальный элементы массива
Напишите функцию changeMaxAndMin, которая принимает массив arr в качестве аргумента и возвращает массив, в котором
максимальный и минимальный элементы поменялись местами. Если в массиве несколько максимальных или несколько
 минимальных элементов, поменять местами первые из них. Во всех тестах массив содержит минимум два элемента.

    Используйте в решении циклы. Не разрешается использование методов Math.min() и Math.max().

    Пример:

функция changeMaxAndMin([3, 4, 8, 1]) должна возвратить [3, 4, 1, 8];
функция changeMaxAndMin([3, 4, 8, 4, 1, 2, 1]) должна возвратить [3, 4, 1, 4, 8, 2, 1];
функция changeMaxAndMin([8, 8, 2, 1, 1]) должна возвратить [1, 8, 2, 8, 1];
функция changeMaxAndMin([7, 8]) должна возвратить [8, 7];
функция changeMaxAndMin([2, 2]) должна возвратить [2, 2].*/
function changeMaxAndMin(arr) {
    let min = arr[0];
    let max = arr[0];
    let minIndex=0;
    let maxIndex=0;
    let temp;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    arr[minIndex] = max;
    arr[maxIndex] = min;
    return arr;

}
console.log(changeMaxAndMin([3, 4, 8, 1]));


/*Минимальный элемент массива
Напишите функцию minInArray, которая принимает массив arr в качестве аргумента и возвращает минимальный элемент массива.

    Используйте в решении цикл. Не разрешается использование метода Math.min().

    Пример:

функция minInArray([3, 4, 8, 1]) должна возвратить 1;
функция minInArray([11, 12) должна возвратить 11;
функция minInArray([1, 1]) должна возвратить 1;
функция minInArray([]) должна возвратить undefined.*/
function minInArray(arr){
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min;
}
console.log(minInArray([3, 4, 8, 1]));
console.log(minInArray([]));
console.log('----------')

/*
Максимальный элемент массива
Напишите функцию maxInArray, которая принимает массив arr в качестве аргумента и возвращает максимальный элемент массива.

    Используйте в решении цикл. Не разрешается использование метода Math.max().

    Пример:

функция maxInArray([3, 4, 8, 1]) должна возвратить 8;
функция maxInArray([11, 12) должна возвратить 12;
функция maxInArray([1, 1]) должна возвратить 1;
функция maxInArray([]) должна возвратить undefined.*/
function maxInArray(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxInArray([3, 4, 8, 1]));

console.log('----------')

/*
Самое длинное слово в массиве
Напишите функцию theLongestWord, которая принимает массив строк arr в качестве аргумента и возвращает слово
максимальной длины. Гарантируется, что во всех тестах массив содержит хотя бы одно слово.

    Используйте в решении цикл. Не разрешается использование метода Math.max().

    Пример:

функция theLongestWord(["a", "big", "elephant"]) должна возвратить "elephant";
функция theLongestWord(["mouse", "cat") должна возвратить "mouse";
функция theLongestWord(["test"]) должна возвратить "test".*/
function theLongestWord(arr){
    let longest = arr[0];
    for(let i=0; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
}
console.log(theLongestWord(["a", "big", "elephant"]));

console.log('---------------------')
/*
Самое короткое и самое длинное слово в массиве
Напишите функцию words, которая принимает массив строк arr в качестве аргумента и возвращает самое короткое
и самое длинное слово в виде массива [shortestWord, longestWord]. Гарантируется, что во всех тестах массив содержит
хотя бы одно слово. Если слова одинаковой длины, то возвращается первое из них в списке.

    Используйте в решении циклы. Не разрешается использование методов Math.min() и Math.max().

    Пример:

функция words(["a", "big", "elephant"]) должна возвратить ["a", "elephant"];
функция words(["mouse", "cat") должна возвратить ["cat", "mouse"];
функция words(["mouse", "tiger") должна возвратить ["mouse", "mouse"];
функция words(["test"]) должна возвратить ["test", "test"].*/
function words(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i =1; i<arr.length; i++){
        if(arr[i].length > max.length){
            max = arr[i];
        }
        if(arr[i].length < min.length){
            min = arr[i];
        }
    }
    return [min,max]
}
console.log(words(["a", "big", "elephant"]));

console.log('---------------------')
/*
Максимальный модуль элемента
Напишите функцию maxAbsValue, которая принимает массив arr в качестве аргумента и возвращает элемент,
    который имеет максимальную абсоютную величину (модуль). При равных значениях возвращается первое в списке.

    Используйте в решении цикл. Не разрешается использование метода Math.max().

    Пример:

функция maxAbsValue([3, 7, -8, 1]) должна возвратить -8;
функция maxAbsValue([-11, 6, 12) должна возвратить 12;
функция maxAbsValue([1, -2, 2]) должна возвратить -2;
функция maxAbsValue([]) должна возвратить undefined.*/

function maxAbsValue(arr)
{
    if(arr.length===0) return undefined;
    let max=Math.abs(arr[0]);
    let maxIndex=0;
    for (let i=1; i<arr.length;i++)
    {
        if (Math.abs(arr[i])>max)
        {
            max=Math.abs(arr[i])
            maxIndex=i;
        }
    }
    return arr[maxIndex]
}

console.log(maxAbsValue([-8,2,-5,8]));
console.log(maxAbsValue([1, -2, 2]));
//OR
function maxAbsValue1(arr1)
{
    if(arr1.length===0) return undefined;
    let res =[];
    //create array with using Math.abs
    for(let i=0; i<arr1.length; i++){
        res.push(Math.abs(arr1[i]))
    }
    //find max and his index
    let max=Math.abs(arr1[0]);
    let maxIndex=0;
    for (let i=1; i<arr1.length;i++)
    {
        if (Math.abs(arr1[i])>max)
        {
            max=Math.abs(arr1[i])
            maxIndex=i;
        }
    }
    return arr1[maxIndex]
}
console.log(maxAbsValue1([-15,2,-5,8]));
console.log(maxAbsValue1([1, -2, 2]));

console.log('---------------------')

/*Максимальный четный элемент массива
Напишите функцию maxEven, которая принимает массив arr в качестве аргумента и возвращает максимальный
четный элемент массива. Если массив не содержит четных элементов или массив пустой, вернуть undefined.

    Используйте в решении цикл. Не разрешается использование метода Math.max().

    Пример:

функция maxEven([3, 4, 8, 17]) должна возвратить 8;
функция maxEven([11, 12, 3, 35) должна возвратить 12;
функция maxEven([1, 5]) должна возвратить undefined;
функция maxEven([]) должна возвратить undefined.*/
function maxEven(arr){
    let max;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            max = arr[i];
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j] % 2 === 0 && arr[j] > max) {
                    max = arr[j];
                }
            }
            return max;
        }
    }
}
console.log(maxEven([3, 4, 8, 17]));//8
console.log(maxEven([11, 12, 3, 35])) //12
console.log(maxEven([1,5]))
console.log(maxEven([]))

console.log('--------------------------')
//Минимальный нечетный элемент массива
//minOdd 1st solution
function minOdd(arr){
    let min;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            min = arr[i];
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j] % 2 !== 0 && arr[j] < min) {
                    min = arr[j];
                }
            }
            return min;
        }
    }
}
//MinOdd Using Math.min
function minOdd1(arr){
  let min = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i]%2 !== 0) min.push(arr[i]);
      }
    return (min.length > 0)? Math.min(...min) : undefined;
}
console.log(minOdd1([2, 3, 4, 8, 17, 18])) //3
console.log(minOdd([11, 7, 4, 12])) //7
console.log(minOdd([2, 4])); //undefined

console.log('++--------------------------')

/*Самая дорогая машина
Массив хранит информацию о машинах в автосалоне и их ценах. Данные о каждой машине представлены в виде массива
[made, price] (например, ["Mazda", 17000]). Получить название самой дорогой машины. Если в массиве окажется
 несколько машин с одинаковой ценой, вернуть первую из них.

    Напишите функцию mostExpensiveCar, которая принимает массив arr, содержащий данные о машинах и возвращает
     название самой дорогой машины. Во всех тестах входной массив не является пустым.

    Используйте в решении цикл. Не разрешается использование метода Math.max().

    Пример:

функция mostExpensiveCar([["Honda", 18500], ["Toyota", 21200], ["BMW", 19900]]) должна возвратить "Toyota";
функция mostExpensiveCar([["Honda", 18000], ["Toyota", 18000]]) должна возвратить "Honda";
функция mostExpensiveCar([["BMW", 19900]]) должна возвратить "BMW".*/
function mostExpensiveCar(arr){
    let max = arr[0][1];
    let car = arr[0][0] ;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j]>max){
                max= arr[i][j];
                car = arr[i][0]
            }
        }
    }
    return car ;
}
//other student solution
const mostExpensiveCar1 = arr => {
    let maxPrice = arr[0][1];
    let bestCar = arr[0][0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i][1] > maxPrice){
            maxPrice = arr[i][1];
            bestCar = arr[i][0]
        }

    }
    return  bestCar;
}
console.log(mostExpensiveCar([["Honda", 18500], ["Toyota", 21200], ["BMW", 19900]]));//'Toyota'
console.log(mostExpensiveCar1([["Honda", 18500], ["Toyota", 21200], ["BMW", 19900]]));
//console.log(mostExpensiveCar([["Honda", 19000], ["Toyota", 28000]]));
//console.log(mostExpensiveCar([["Honda", 18500], ["Toyota", 21200], ["BMW", 34900]]));
//console.log(mostExpensiveCar([["Honda", 19000], ["Toyota", 28000]]));

console.log('+++--------------------------')

/*Кто собрал больше всего грибов?
    Дети собирали грибы, затем пересчитали их и полученные данные занесли в массив. Массив хранит информацию о
том, сколько грибов собрал каждый из ребят. Данные представлены в виде массива [name, number] (например, ["Alice", 19]).
    Определить, кто из ребят собрал грибов больше всех.

    Если несколько детей собрали одинаковое количество грибов, вернуть имя первого из них.

    Напишите функцию largestNumberOfMushrooms, которая принимает массив arr, содержащий данные об именах детей и
количестве собранных ими грибов, и возвращает имя ребенка, который собрал больше всего грибов, и количество собранных
им грибов в виде строки: "Name: number".

    Во всех тестах входной массив не является пустым.

    Используйте в решении цикл. Не разрешается использование метода Math.max().

    Пример:

функция largestNumberOfMushrooms([["Maria", 15], ["Anna", 21], ["Ivan", 32]]) должна возвратить "Ivan: 32";
функция largestNumberOfMushrooms([["Elena", 10], ["Nick", 10]]) должна возвратить "Elena: 10";
функция largestNumberOfMushrooms([["Amelia", 12]]) должна возвратить "Amelia: 12".*/

    function largestNumberOfMushrooms(arr){
    let name = arr[0][0];
    let number = arr[0][1];
    for(let i=0; i<arr.length; i++){
        if(arr[i][1] >number){
            number= arr[i][1];
            //console.log(number);
            name = arr[i][0];
            //console.log(name);
        }
    }
    return `${name}: ${number}`;
}
console.log(largestNumberOfMushrooms([["Maria", 15], ["Anna", 21], ["Ivan", 32]]));