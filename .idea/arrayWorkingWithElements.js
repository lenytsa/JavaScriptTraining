////Пример 4. Вывести в консоль true, если в массиве arr есть нулевой элемент, и false – в обратном случае.
let arrayNullElm = [2, 5, 7, -3, 0, -4, 9, 11];
let indexN = -1;                       // присваиваем переменной index значение -1
for (let i = 0; i < arrayNullElm.length; i++){ // в цикле проходим по массиву
    if (arrayNullElm[i] === 0){                  // если найден элемент массива, равный нулю,
        indexN = i;
        console.log(indexN);
        // изменяем значение переменной index (присваиваем значение индекса нулевого элемента)
        break;                            // прерываем цикл, т.к. нулевой элемент уже найден
    }
}

if (indexN === -1) {                   // если index = -1, значит в массиве нет нулевого элемента, и значение index не изменилось
    console.log(false);
} else {
    console.log(true);                  // если index не равен -1, значит в массиве есть нулевой элемент
}

console.log('------------------')
/*Количество положительных элементов массива
question
Напишите функцию countPositive, которая принимает массив arr в качестве аргумента, и возвращает количество положительных элементов массива.

    Пример:

функция countPositive([10, 2, -3, 8]) должна возвратить 3;
функция countPositive([0, -1, -2]) должна возвратить 0;
функция countPositive([]) должна возвратить 0.*/
function countPositive(arr){
    let count=0;
    for(let i=0;i<arr.length; i++){
        if(arr[i] > 0){
            count++
        }
    }
    return count
}
console.log(countPositive([10, 2, -3, 8]));
console.log(countPositive([0, -1, -2]));

console.log('------------------')

/*Количество нулевых элементов массива
Напишите функцию countZeros, которая принимает массив arr в качестве аргумента, и возвращает количество элементов массива, равных нулю.

    Пример:

функция countZeros([0, 2, -7, 8, 0]) должна возвратить 2;
функция countZeros([0, -1, -2]) должна возвратить 1;
функция countZeros([]) должна возвратить 0 */
function countZeros(arr){
    let count =0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===0){
            count++
        }
    }
    return count;
}
console.log(countZeros([0, 2, -7, 8, 0]));
console.log('------------------')
/*Количество четных элементов массива
Напишите функцию countEven, которая принимает массив arr в качестве аргумента, и возвращает количество четных элементов массива.

    Пример:

функция countEven([0, 2, 6, 8, 0, 5]) должна возвратить 5;
функция countEven([0, -1, 12]) должна возвратить 2;
функция countEven([]) должна возвратить 0.*/
function countEven(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            count++
        }
    }
    return count;
}

console.log('------------------')
/*
Количество четных положительных элементов массива
Напишите функцию countEvenPositive, которая принимает массив arr в качестве аргумента,
и возвращает количество четных положительных элементов массива.
    Пример:
функция countEvenPositive([0, -2, -6, 8, 1, 5]) должна возвратить 1;
функция countEvenPositive([10, -2, 12]) должна возвратить 2;
функция countEvenPositive([]) должна возвратить 0.*/
function countEvenPositive(arr){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0 && arr[i]>0){
            count++
        }
    }
    return count;
}
console.log(countEvenPositive([0, -2, -6, 8, 1, 5]));
console.log('------------------')

/*
Количество чисел в массиве
Напишите функцию countNumbers, которая принимает массив arr в качестве аргумента, и возвращает количество элементов, имеющих тип "number".

    Пример:

функция countNumbers([0, 4.1, 'Alice', true, 1, false, 'hohoho']) должна возвратить 3.
функция countNumbers([]) должна возвратить 0.
функция countNumbers(['a', 'b']) должна возвратить 0.*/
function countNumbers(arr){
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(typeof (arr[i]) === 'number'){
            count++
        }
    }
    return count;
}
console.log(countNumbers([0, 4.1, 'Alice', true, 1, false, 'hohoho']));
console.log('------------------')

/*
Количество целых чисел в массиве
Напишите функцию countIntegers, которая принимает массив arr в качестве аргумента, и
возвращает количество элементов, являющихся целыми числами.

    Пример:

функция countIntegers([0, 4.1, 'f', true, 1, false, 'h']) должна возвратить 2.
функция countIntegers([2.5]) должна возвратить 0.
функция countIntegers([-2, 1, 1.4]) должна возвратить 2.
функция countIntegers([true]) должна возвратить 0.*/
function countIntegers(arr){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%1 === 0 && typeof arr[i]=== 'number'){
            count++
        }
    }
    return count;
}
console.log(countIntegers([0, 4.1, 'f', true, 1, false, 'h']));
console.log('------------------')


/*
Количество элементов, являющихся квадратами целых чисел
Напишите функцию counOfSquares, которая принимает массив arr в качестве аргумента, и возвращает количество
 элементов, являющихся квадратами целых чисел.

    Пример:

функция counOfSquares([0, 25, 'f', true, 9, 7, false, 'h']) должна возвратить 3.
функция counOfSquares([2, 5]) должна возвратить 0.
функция counOfSquares([-2, 1, 1.4]) должна возвратить 1.
функция counOfSquares([false]) должна возвратить 0.*/
function counOfSquares(arr){
    let count=0;
    for(let i=0; i<arr.length; i++) {
        let root = Math.pow(arr[i], 0.5); //Math.pow(9, 0.5); // 3, то же самое что корень квадратный из 9
        if(root**2=== arr[i]&&Number.isInteger(root)){
            count++
        }
    }
    return count;
}
console.log(counOfSquares([0, 25, 'f', true, 9, 7, false, 'h']))

console.log('------------------')

/*Количество пар положительных элементов
Напишите функцию counOfPositivePairs, которая принимает массив arr в качестве аргумента, и возвращает количество пар соседних элементов, являющихся положительными числами.

    Пример:

функция counOfPositivePairs([0, 25, 3, -2, 5]) должна возвратить 1 (такая пара только одна: 25 и 3)
функция counOfPositivePairs([2, -2, 5]) должна возвратить 0.
функция counOfPositivePairs([]) должна возвратить 0.*/
function counOfPositivePairs(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0 && arr[i-1]>0){
            count++
        }
    }
    //count = Math.trunc(count/2)
    return count;
}
console.log(counOfPositivePairs([0, 25, 3, -2, 5]));//1
console.log(counOfPositivePairs([6,2,2,1,6]));//4
console.log(counOfPositivePairs([2,0,2]));//0

console.log('------------------')

/*
//Количество пар элементов c разными знаками
Напишите функцию countOppositeSignsPairs, которая принимает массив arr в качестве аргумента, и возвращает количество пар соседних элементов, которые имеют разные знаки.

    Пример:

функция countOppositeSignsPairs([1, 25, 3, -2, 5]) должна возвратить 2 (таких пар две: 3, -2 и -2, 5)
функция countOppositeSignsPairs([2, 32, 5]) должна возвратить 0.
функция countOppositeSignsPairs([]) должна возвратить 0.*/
function countOppositeSignsPairs(arr){
    let count =0;
    for(let i=0; i<arr.length; i++){
        if((arr[i]>0 && arr[i-1]<0) || (arr[i]<0 && arr[i-1]>0)){
    count++
        }
    }
    return count;
}
console.log(countOppositeSignsPairs([1, 25, 3, -2, 5]));
console.log(countOppositeSignsPairs([2, 32, 5]));
console.log('------------------')


/*
Количество троек элементов, упорядоченных строго по возрастанию
Напишите функцию numberOfOrderedTriples, которая принимает массив arr в качестве аргумента, и возвращает количество троек соседних элементов, которые строго упорядочены по возрастанию.

    Пример:

функция numberOfOrderedTriples([1, 25, 3, 7, 15, 12]) должна возвратить 1 (такая тройка одна: 3, 7, 15)
функция numberOfOrderedTriples([1, 2, 3, 3, 15]) должна возвратить 1 (такая тройка одна: 1, 2, 3)
функция numberOfOrderedTriples([2, 32, 5]) должна возвратить 0.
функция numberOfOrderedTriples([]) должна возвратить 0.*/
function numberOfOrderedTriples(arr){
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i-1] && arr[i-1]>arr[i-2]){
            count++
        }
    }
    return count;
}
console.log(numberOfOrderedTriples([1, 2, 3, 3, 15])); //1
console.log(numberOfOrderedTriples([1, 25, 3, 7, 15, 12]));

console.log('------------------')

/*
//Первый отрицательный элемент и его индекс
Напишите функцию firstNegative, которая принимает массив arr в качестве аргумента, и возвращает первый отрицательный элемент массива и его индекс (в виде массива [element, index]), или undefined, если массив не содержит отрицательных элементов.

    Примеры:

функция firstNegative([0, 25, -3, 7, 15, -1, 12]) должна возвратить [-3, 2];
функция firstNegative([1, 2, 3, 3, 15]) должна возвратить undefined;
функция firstNegative([]) должна возвратить undefined.*/
function firstNegative(arr){
   for(let i=0; i<arr.length; i++){
       if(arr[i]<0){
           return [arr[i],i]
       }
   }
}
console.log(firstNegative([0, 25, -3, 7, 15, -1, 12]))
console.log('------------------')

/*
Первый элемент, который больше своего соседа справа
    функция firstBigger([0, 8, 4, 1]) должна возвратить 8 (так как 8 > 4 - первый элемент массива, который больше,
    чем следующий за ним элемент);
функция firstBigger([1, 2, 3, 5, 5, 15]) должна возвратить undefined (так как элементы расположены по возрастанию,
    то массив не содержит элемента, который больше, чем следующий за ним элемент);
функция firstBigger([]) должна возвратить undefined.*/
function firstBigger(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]> arr[i+1]){
            return arr[i];
        }
    }
}
console.log(firstBigger([0, 8, 4, 1]));

console.log('------------------')

/*
Последний четный элемент и его индекс
Напишите функцию lastEvenElement, которая принимает числовой массив arr в качестве аргумента, и возвращает
последний четный элемент и его индекс в виде массива [element, index], или undefined, если массив не содержит четных элементов.

    Примеры:

функция lastEvenElement([0, 8, 4, 1]) должна возвратить [4, 2];
функция lastEvenElement([1, 2, 3, 5, 5, 15]) должна возвратить [2, 1];
функция lastEvenElement([3, 5, 7]) должна возвратить undefined;
функция lastEvenElement([]) должна возвратить undefined.*/

function lastEvenElement(arr){
    let index;
    let el;
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 ===0){
            el = arr[i];
            index = i;
            count++
        }
    }
    if(count===0) return undefined;
    return [el, index];
}
console.log(lastEvenElement([0, 8, 4, 1]));
console.log(lastEvenElement([1, 2, 3, 5, 5, 15]));
console.log(lastEvenElement([3, 5, 7]));
console.log('------------------')

/*
Массив температур в градусах Фаренгейта
Напишите функцию fahrenheit, которая принимает два целых числа t1 и t2 (t1 < t2 - начальное и конечное значение температур в градусах Цельсия), и возвращает массив температур по Фаренгейту для данного диапазона температур. Температуры в градусах Цельсия и градусах Фаренгейта связаны формулой: tf = tc * (9/5) + 32 Вычисленные значения округлить до одного десятичного знака.

    temperature

Примеры:

    функция fahrenheit(20, 25) должна возвратить [68, 69.8, 71.6, 73.4, 75.2, 77];
функция fahrenheit(1, 10) должна возвратить [33.8, 35.6, 37.4, 39.2, 41, 42.8, 44.6, 46.4, 48.2, 50];*/
function fahrenheit(t1, t2){
    let res =[];
    for(let i=t1; i<=t2; i++){
        res.push((i*9)/5 +32);
    }
    return res;
}

console.log(fahrenheit(20, 25));

console.log('------------------')
/*Новые цены на товары.Массив хранит цены на товары. Цены повысились вдвое. Преобразовать массив так, чтобы
элементы массива содержали новые цены.

    Напишите функцию changeArray, которая принимает массив prices в качестве аргумента и возвращает массив,
     который хранит новые цены.

    Пример:

функция changeArray([20, 26, 12]) должна возвратить [40, 52, 24]*/

function changeArray(prices){
    let res =[];
    for(let elm of prices){
        res.push(elm *2);
    }
    return res;
}
console.log(changeArray([20, 26, 12]))
console.log('------------------')

/*
Есть ли в массиве хотя бы один отрицательный элемент?
    Напишите функцию isNegativeInArray, которая принимает массив arr в качестве аргумента и возвращает true,
    если массив содержит хотя бы один отрицательный элемент, и false, в противном случае.

    Пример:

функция isNegativeInArray([20, -26, -12]) должна возвратить true;
функция isNegativeInArray([2, 9, -10]) должна возвратить true;
функция isNegativeInArray([1, 2, 3, 4]) должна возвратить false;
функция isNegativeInArray([1, 0]) должна возвратить false;
функция isNegativeInArray([]) должна возвратить false.
*/
function isNegativeInArray(arr){
    for(let elm of arr){
        if(elm<0){
            return true;
        }
    }
    return false;
}
console.log(isNegativeInArray([20, -26, -12]));
console.log(isNegativeInArray([1, 2, 3, 4]));
console.log('------------------')

/*
Есть ли в массиве хотя бы один нулевой элемент?
    Напишите функцию isZeroInArray, которая принимает массив arr в качестве аргумента и возвращает true, если массив
    содержит хотя бы один нулевой элемент, и false, в противном случае.

    Пример:

функция isZeroInArray([20, -26, 0, -12]) должна возвратить true;
функция isZeroInArray([2, 9, 0, 0]) должна возвратить true;
функция isZeroInArray([1, 2, 3, 4]) должна возвратить false;
функция isZeroInArray([1, -1]) должна возвратить false;
функция isZeroInArray([]) должна возвратить false.
*/
function isZeroInArray(arr){
    for(let i=0; i<=arr.length; i++){
        if(arr[i] === 0){
            return true;
        }
    }
    return false;
}
console.log(isZeroInArray([20, -26, 0, -12]));
console.log(isZeroInArray([20, -26, -12]));
console.log('------------------')


/*
Есть ли в массиве хотя бы один элемент, равный сумме своих соседей слева и справа?
    Напишите функцию isElementInArray, которая принимает массив arr в качестве аргумента и, если
    массив содержит хотя бы один элемент, равный сумме своих соседей слева и справа, находит первый такой элемент
    и возвращает строку вида:

    "true: it is <element>", где <element> - значение элемента.
    или false, в противном случае.
    Пример:

функция isElementInArray([1, 5, 4, 1, 0, -1]) должна возвратить "true: it is 5" (первый такой элемент: 5 = 1 + 4);
функция isElementInArray([2, 9, 0, 0]) должна возвратить false;
функция isElementInArray([1, 2, 3, 1]) должна возвратить "true: it is 3" (3 = 2 + 1);
функция isElementInArray([]) должна возвратить false.*/
function isElementInArray(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === arr[i-1] + arr[i +1]){
            return `true: it is ${arr[i]}`
        }
    }
    return false;
}
console.log(isElementInArray([1, 5, 4, 1, 0, -1]));
console.log(isElementInArray([1, 2, 3, 1]));
console.log('------------------')
/*
Количество слов длиной 5 символов

Напишите функцию countOfWords, которая принимает массив имен names в качестве аргумента, и возвращает количество
имен длиной 5 символов.

    Пример:

функция countOfWords(['Noah', 'Liam', 'William', 'Mason', 'James']) должна возвратить 2.
функция countOfWords(["Ann", "Alice"]) должна возвратить 1.
функция countOfWords(["Bob"]) должна возвратить 0.
функция countOfWords([]) должна возвратить 0.*/
function countOfWords(names){
    let count = 0;
    for(let elm of names){
        if(elm.length ===5){
            count++
        }
    }
    return count;
}
console.log(countOfWords(['Noah', 'Liam', 'William', 'Mason', 'James']));
console.log('++------------------')

/*
Одинаковые элементы в массиве
Напишите функцию equalElementsInArray, которая принимает массив чисел arr в качестве аргумента, и определяет,
 есть ли в массиве одинаковые элементы, и если есть, возвращает их в виде массива [element, element].
  Если таких пар несколько, вернуть первую из них. Если в массиве нет одинаковых элементов, вернуть сообщение
  "All elements are different". Если исходный массив пустой, вернуть пустой массив.

    Пример:

функция equalElementsInArray([2, 1, 5, 9, 4, 5, 6]) должна возвратить [5, 5].
    функция equalElementsInArray([2, 1, 5, 9, 6, 4, 1, 5, 6]) должна возвратить [1, 1].
    функция equalElementsInArray([1, 2, 3]) должна возвратить "All elements are different"*/

function equalElementsInArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && j != i) {
                return [arr[i], arr[j]];
            }
        }
    }
    return arr.length === 0 ? [] : 'All elements are different';
}
//simular code
function equalElementsInArray1(arr){
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]) {
                return  [arr[i],arr[j]];
            }
        }
    }
    return  (arr.length === 0)? [] : "All elements are different";
}
console.log(equalElementsInArray([2, 1, 5, 9, 4, 5, 6]));
console.log(equalElementsInArray([2, 1, 5, 9, 6, 4, 1, 5, 6]));
console.log(equalElementsInArray([1, 2, 3]));
// String reverse 1 way
function stringRev(str) {
    let s='';
    for(let i=0; i<str.length; i++){
        s = str[i] + s;
    }
    return s
}
console.log(stringRev("Tom"));
// String reverse 2 way
function stringRev2(str) {
    let s= str.split('').reverse().join('')
return s;
}
console.log(stringRev2('Tom'));

// String reverse 3 way
function stringRev3(str) {
    let s='';
    for(let i = str.length-1; i>=0; i--){
        s = s + str[i];
    }
    return s
}
console.log(stringRev3("Tom"));

//String reverse 4 way
function stringRev4(str) {
    if(str==='') return '';
    else{
        return stringRev4(str.substring(1)) + str.charAt(0)
    }
}
console.log(stringRev4('Hello'));
