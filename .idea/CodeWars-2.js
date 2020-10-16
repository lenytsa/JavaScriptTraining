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

console.log('-------------------');
/*
Be Concise IV - Index of an element in an array
Task
Provided is a function find which accepts two parameters in the following order: array, element and
returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much
as possible in order to meet the strict character count requirements of the Kata. (no more than 85)
You may assume that all array elements are unique.*/
function find(a, el) {
    return a.includes(el)? a.indexOf(el): 'Not found'
}
console.log('-------------------');

/*The Office IV - Find a Meeting Room
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone ' +
'constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the
first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy 'O' --> empty

If all rooms are busy, return 'None available!'.*/
function meeting(x){
    return (x.includes('O')) ? x.indexOf('O') : 'None available!';
}
console.log('-------------------');

/*
A wolf in sheep's clothing
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend
to be sheep. Fortunately,
    you are good at spotting them.

    Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front
of the queue which is at the end of the array:
    [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"
*/
function warnTheSheep(queue) {
    let indexWolf= queue.indexOf('wolf');
    if(indexWolf === queue.length-1) return 'Pls go away and stop eating my sheep';
    else
        return `Oi! Sheep number ${queue.length-1-indexWolf}! You are about to be eaten by a wolf!`
}
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep" ]));

console.log('-------------------------------');
/*Array element parity
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

    Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

    [-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

    [1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)*/
function solve(arr){
    return arr.find((elm)=>!arr.includes(-elm));
};
console.log(solve([1,-1,2,-2,3,1]));
console.log('--------------------')
/*
CodeWars:Find Duplicates
Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the
 returned array should appear in the order when they first appeared as duplicates.

    Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
    [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
    [0, 1, 2, 3, 4, 5]                ==>  []*/

    // return arr.filter((el, i) => i === arr.indexOf(el) && i !== arr.lastIndexOf(el));
    // return arr.filter((el, i) => i === arr.lastIndexOf(el) && i !== arr.indexOf(el));
    // return arr.filter((el, i) => i !== arr.lastIndexOf(el) && i == arr.indexOf(el));

    function duplicates(arr) {
        console.log(arr.filter ((e,i,a) => a.indexOf(e) !== i));//[ 4, 3, 1, 3 ]
        return arr.filter ((e,i,a) => a.indexOf(e) !== i)
            .filter ((e,i,a) => a.indexOf(e) === i);//[ 4, 3, 1 ]
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5" ]));
    console.log('---------------------------');

/*
Two to One
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible
    , containing distinct letters,

    each taken only once - coming from s1 or s2.
    Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/
function longest(s1, s2) {
    let s3= (s1+ s2).split('');
    console.log(s3);
    return s3.filter((el, i) => i === s3.indexOf(el)).sort().join('');
}
console.log(longest("aretheyhere", "yestheyarehere"));
console.log('-----------------------------');

/*
Complete Series
You are given an array of non-negative integers, your task is to complete the series from 0 to the highest
number in the array.

    If the numbers in the sequence provided are not in order you should order them, but if a value repeats,
    then you must return a sequence with only one item, and the value of that item must be 0. like this:

inputs        outputs
    [2,1]     ->  [0,1,2]
    [1,4,4,6] ->  [0]
Notes: all numbers are positive integers.

    This is set of example outputs based on the input sequence.

    inputs        outputs
    [0,1]   ->    [0,1]
    [1,4,6] ->    [0,1,2,3,4,5,6]
    [3,4,5] ->    [0,1,2,3,4,5]
    [0,1,0] ->    [0]*/
function completeSeries(arr) {
    let dup = arr.filter((elm, i) =>arr.indexOf(elm) !== arr.lastIndexOf(elm));
    let res=[];
    if(dup.length>0) return [0];
    let max = Math.max(...arr);
    for(let i= 0; i<=max; i++){
        res.push(i);
    }
    return res;
}
console.log(completeSeries([1,4,4,6]));
console.log(completeSeries([1,4,6]));
console.log(completeSeries([3,4,5])); //[ 0, 1, 2, 3, 4, 5 ]