/*Calculate average
Write function avg which calculates average of numbers in given list.
*/
function find_average(array) {
    let sum = 0;
    let average = 0;
    for (let el of array) {
        sum +=el;
        average = sum / array.length;
    }
    return average;
}
console.log(find_average([1,1,1]));
console.log('------------------')
/*
Divide and Conquer
Given a mixed array of number and string representations of integers, add up the string integers and
subtract this from the total of the non-string integers.

    Return as a number.*/
function divCon(x){
    let numbers= 0;
    let nonNumbers=0;
    for(let elm of x){
        if(typeof(elm)==='number'){
            numbers+=elm;
        }
        if(typeof(elm)==='string'){
            nonNumbers+=Number.parseInt(elm);
        }
    }
    return numbers-nonNumbers;
}
console.log(divCon([9, 3, '7', '3']));
console.log('------------------')

/*Sum of Odd Cubed Numbers
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should
return undefined/None/nil/NULL if any of the values aren't numbers.*/
function cubeOdd(arr) {
    let sumOfOdd=0;
    for(let elm of arr ){
        if(elm %2 !==0){
            sumOfOdd= sumOfOdd + elm**3;
        }
        if(typeof(elm)== 'string' ){
            return undefined;
        }
    }
    return sumOfOdd
}
console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd(["a",12,9,"z",42]));
console.log(cubeOdd(['a', 12, 9, 'z', 42]));