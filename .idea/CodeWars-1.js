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
console.log('------------')

/*
Sum even numbers
Task
Write a function named sumEvenNumbers, taking a sequence of numbers as single parameter. Your function must return
the sum of the even values of this sequence.

    Only numbers without decimals like 4 or 4.0 can be even.

    Input
sequence of numbers: those numbers could be integers and/or floats.
    For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function should return 30
(because 4 + 2 + 10 + 6 + 8 = 30).
*/
function sumEvenNumbers(input) {
  let sum = 0;
  for(let elm of input){
      if(elm %2 === 0){
          sum = sum + elm;
      }
  }
  return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log('------------')

/*
Simple Fun #152: Invite More Women?
    Task
    King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because
Arthur had a date and Lancelot did not, and they started a duel.

    To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men
at this year's party. He gave you a list of integers of all the party goers.

Arthur needs you to return true if he needs to invite more women or false if he is all set.

    Input/Output
    [input] integer array L ($a in PHP)

An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women
and 1 represents men.

2 <= L.length <= 50

    [output] a boolean value

true if Arthur need to invite more women, false otherwise.*/
function inviteMoreWomen(L) {
    let w=0;
    let m =0;
    for(let elm of L){
        if(elm === -1){
            w++
        }
        if(elm === 1){
            m++
        }
    }
    if(w<m) return true;
    else return false;
}
console.log(inviteMoreWomen([1, -1, 1]));
console.log(inviteMoreWomen([1, -1,]));

console.log('----------------')
/*
Odd or Even?
    Task:
    Given a list of numbers, determine whether the sum of its elements is odd or even.

    Give your answer as a string matching "odd" or "even".

    If the input array is empty consider it as: [0] (array with a zero).

Example:
    odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"*/
function oddOrEven(array) {
    let sum =0;
    for(let elm of array){
        sum += elm;
    }
    if(sum %2 === 0) return 'even';
    return 'odd';
}
console.log('----------------')

/*Row Weights
Scenario
Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes
into team 2, the third goes into team 1, and so on.

    Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where
the first one is the total weight of team 1,
    and the second one is the total weight of team 2.
Notes
Array size is at least 1.
All numbers will be positive.
    Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
    The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
    rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

 */
function rowWeights(array) {
    let sT1 = 0;
    let sT2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            sT1 += array[i];
        }
        if (i % 2 !== 0) {
            sT2 += array[i];
        }
    }
    return [sT1, sT2];
}
console.log(rowWeights([100,50]));
console.log(rowWeights([50,60,70,80]));
console.log(rowWeights([0,1,0]));