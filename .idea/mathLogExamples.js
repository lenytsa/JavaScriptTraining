// Является ли данное число n степенью числа 2?
//     question
//     Напишите функцию с именем isPowerOfTwo, которая принимает неотрицательное число n в качестве аргумента и возвращает true, если n является степенью числа 2, или false, в противном случае.
//
//     Число n является степенью числа 2, если существует целое число k, такое что
//
// powerOfTwo
//
// Указание к решению. Метод Math.log2(n) возвращает двоичный (по основанию 2) логарифм числа n.
//
// Т.е. Math.log2(n) - это степень, в которую надо возвести число 2, чтобы получить число n.
//
//     Таким образом, если Math.log2(n) - это целое число, значит, n является степенью числа 2.
//
// Решение задачи заключается в проверке, является ли Math.log2(n) целым числом.
//
//     Проверить, что число x является целым, можно с помощью условия x % 1 === 0 (это условие истинно для целых чисел и ложно для нецелых чисел).
//
// Примеры:
//
//     функция isPowerOfTwo(8) должна возвратить true; (так как 8 - это третья степень числа 2)
// функция isPowerOfTwo(32) должна возвратить true; (так как 32 - это пятая степень числа 2)
// функция isPowerOfTwo(7) должна возвратить false (7 не является степенью числа 2).
function isPowerOfTwo(n){
    if(Math.log2(n)%1 ===0){
        return true;
    }
    return false;
}
console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(8));

console.log('-------------------')
//
// Является ли данное число n степенью числа 10?
//     Напишите функцию с именем isPowerOfTen, которая принимает неотрицательное число n в качестве аргумента и возвращает true, если n является степенью числа 10, или false, в противном случае.
//
//     Число n является степенью числа 10, если существует целое число k, такое что 10 ** k = n.
//
//     Указание к решению. Метод Math.log10(n) возвращает десятичный (по основанию 10) логарифм числа n. Т.е. Math.log10(n) - это степень, в которую надо возвести число 10, чтобы получить число n.
//
//     Таким образом, если Math.log10(n) - это целое число, значит, n является степенью числа 10.
//
// Примеры:
//
//     функция isPowerOfTen(10) должна возвратить true; (так как Math.log10(10) = 1 - целое число)
// функция isPowerOfTen(100) должна возвратить true; (так как Math.log10(100) = 2 - целое число)
// функция isPowerOfTen(0.1) должна возвратить true; (так как Math.log10(0.1) = -1 - целое число)
// функция isPowerOfTen(20) должна возвратить false; (так как Math.log10(20) = 1.3010299956639813 - не целое число)
function isPowerOfTen(x){
    if(Math.log10(x)%1 ===0){
        return true;
    }
    return false;
}
console.log(isPowerOfTen(10));