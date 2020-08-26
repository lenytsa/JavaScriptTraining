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
