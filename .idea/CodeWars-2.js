/*Max-min arrays
In this Kata, you will be given an array of unique elements, and your task is to rerrange the
values so that the first max value is followed by the first minimum, followed by second max value then second
min value, etc.

    For example:

    solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

    More examples in the test cases.*/
function solve(arr){
    arr = arr.sort((a, b) => b - a); // For descending sort
    let res =[];
    for(let i=0; arr.length>0; i++) {
        res.push(arr.shift());
        res.push(arr.pop());
    }
    if(arr.length===1) res.push(arr[0]);
    return res.filter(v=>v!=undefined);
};
console.log(solve([15,11,10,7,12]));
console.log(solve([78,79,52,87,16,74,31,63,80]));
console.log('------------------------');
/*

Enumerable Magic #3 - Does My List Include This?
    Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/
function include(arr, item){
    return arr.includes(item);
}

console.log('-----------------------------');
/*
No Loops 2 - You only need one
* No Loops Allowed *

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains
the value, without using a loop.

    Array can contain numbers or strings. X can be either. Return true if the array contains the value, false
if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:*/
function check(a,x){
    return a.includes(x);
};
console.log('-----------------------------');
/*A Needle in the Haystack
Can you find the needle in the haystack?

    Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

    "found the needle at position " plus the index it found the needle, so:
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"*/

function findNeedle(haystack) {
    let index = haystack.indexOf('needle');
   return `found the needle at position ${index}`
}