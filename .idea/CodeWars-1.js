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