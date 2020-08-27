//Лекция 6. Циклы, в которых вызываются функции

//   Задача 1: - определите количество простых чисел в диапазоне от m до n
//   Простое число - число, у которого нет делителей, кроме
//   1 и самого числа. Например, 2, 3, 5, 7, 11 - простые числа
//  In math, prime numbers are whole numbers greater than 1, that have only two factors – 1 and the number itself.
// Prime numbers are divisible only by the number 1 or itself.

function isPrime(n){
    if(n< 2) return false;
        for(let i=2; i<n; i++){
    if(n%i === 0)
        return false;
    }
return true;
}
console.log(isPrime(5)); //prime number
console.log(isPrime(6)); //not prime number
console.log("----------------------------------")

//Find prime number, faster method is to divide  n/2

function isPrime2(n){
    if(n < 2) return false;
    for(let i=2; i<=n/2; i++){
        if(n % i === 0)
            return false;
    }
    return true;
}
console.log(isPrime2(5)); //prime number
console.log(isPrime2(6)); //not prime number
console.log("----------------------------------");

//this function  will call another function named isPrime2
function countOfPrimeNumbers(n, m){
    let count=0;
    for(let i = n; i<= m; i++){
        if(isPrime2(i)){
            count++
        }
    }
    return count;
}
console.log(countOfPrimeNumbers(1, 10));
console.log("----------------------------------")

// Задача 2. Имеется массив слов. Найти количество слов в массиве,
// которые не содержат гласных букв

//a) определяем, является ли буква гласной

function isVowel(c){
    c = c.toLowerCase();
    let vowels = 'auioe';
    return vowels.includes(c);
}
console.log(isVowel("U"));
console.log("----------------------------------")

//b) определяем, содержит ли строка гласные буквы
function containsVowels(str){
    for(let letter of str){
        if(isVowel(letter)){
            return true;
        }
    }
    return false;
}
console.log(containsVowels("ysb"));//it doesnt' contain - returns false
console.log("----------------------------------")

//3с) Находим количество элементов массива, которые не содержат гласных букв
let res= [];
function countOfStingsWithoutVowels(arr){
    let count = 0;
    for(let elm of arr){
        if(!containsVowels(elm)){
            count++
            res.push(elm);
        }
    }
    return count;
}
console.log(countOfStingsWithoutVowels(["js", "sql", "Abc", "java", "pl1", "python"]));
console.log(res);

console.log("----------------------------------")
/// Задача 3. Дан двухмерный массив (массив, элементами которого
//   являются массивы чисел).
//   Вернуть массив, содержащий разность максимального и минимального элемента
//   в каждом из вложенных массивов

//а) функция, находящая минимальное значение в массиве

function min(arr){
    let mi = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < mi){
            mi = arr[i];
        }
    }
    return mi;
}
//b) функция, находящая максимальное значение в массиве
console.log("----------------------------------")

function max(arr){
    let ma = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > ma){
            ma = arr[i];
        }
    }
    return ma;
}
console.log("----------------------------------")


// c) функция, находящая разность максимального и минимального элемента
// в каждом из вложенных массивов исходного двухмерного массива

function diffInArray(arr){
  let result = [];
  for (let elm of arr){
    result.push(max(elm) - min(elm));
  }
  return result;
}
console.log(diffInArray([[1,2,3,4], [5,1,8,9], [7,0,4], [41,2,11]]));
console.log("----------------------------------")


//Задача 4. Найти самое длинное слово в массиве слов (в предложении).
//  Если слова имеют одинаковую длину, вернуть слово, первое по алфавиту
function longestWord(text){
    text = text.toLowerCase();
    let arr = text.split(' ');//Split a string into an array of substrings
    let long = [];
    let len = [];
    for (let elm of arr){
        len.push(elm.length);
    }
    console.log(len);
    let max = Math.max(...len); // 7
    console.log(max);
    for (let elm of arr){ //find all elements that are equal 7 and push them into new array named long
        if (elm.length === max){
            long.push(elm);
        }
    }

    return min(long);
}
console.log(longestWord('Violets are purple and leaves are emerald and roses are perfect'));

