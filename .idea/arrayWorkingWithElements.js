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