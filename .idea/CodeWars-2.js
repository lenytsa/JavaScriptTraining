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

console.log('---------------------------------');
/*
Train to remove duplicates from an array with filter()
    In this kata your task is to remove all the duplicates from the array using a standart build-in method - Array.prototype.filter(); return the array containing unique values only.

    Tip: use the index of value(s) to solve this kata

If you are not familiar with filter() - info is here:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

        For example:

    var arr = [4];

unique(arr); // should return [4]

var arr = [1,1,1,2,2,3];

unique(arr); // should return [1,2,3]*/
function unique(arr) {
    return arr.filter((el, i) => i === arr.indexOf(el));
}
console.log(unique([1,2,2,3]));
console.log('----------------------------');

/*Convert number to reversed array of digits
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

    Example:
348597 => [7,9,5,8,4,3]*/
function digitize(n) {
    let str= n.toString().split('');
    return str.reverse().map(Number);
}
console.log(digitize(35231));

console.log('-----------------------');
/*
My head is at the wrong end!
    You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and' +
' switched ' +
'their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three
values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round
(head, body, tail).

    Same goes for all the other arrays/lists that you will get in the tests: you have to change the element
positions with the same exact logics - simples!*/
function fixTheMeerkat(arr) {
    return arr.reverse();
}
console.log('-----------------------------------------');
/*Add new item (collections are passed by reference)
Add an item to the list:

    AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it
does not matter. (lets say you add an integer value, like 13)

In our test case we check to assure that the returned list has one more item than the input list. However the
method needs some modification to pass this test.

    P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C#
    language and it shows that adding a new item to the input list is not going to work, even though the parameter
is passed by value, but the value is poining to the reference of list and any
change on parameter will be seen by caller)*/
function addExtra( listOfNumbers ){
    const res = listOfNumbers.concat('A');
    return res;
}
console.log(addExtra([1,2,3]));
console.log('-----------------------------------------');

/*
Training JS #29: methods of arrayObject---concat() and join()
This lesson we learn two methods of array: concat() and join(). We have seen concat() in the stringObject
method, but the method of the arrayObject is different from the stringObject method,
    so we need to learn again. When studying the stringObject method split(), we have simply learned the
join() method. This time we will review and explain it in detail.

    Their definitions and syntax please refer to:

    Array.prototype.concat()
Array.prototype.join()
(Please forgive me for my laziness;-)

Here are some examples to help us understand the use of concat() and join():

We first learn the concat() method, which can add some elements to the end of the array. concat() can have
more and more parameters, and the parameter can be values, array or otherthings. Look this example:
    var arr1=[1,2,3],arr2=[4,5,6];
//The following ways can achieve the same purpose:
//It can use an array as parameter
console.log(arr1.concat(arr2));
//also can use some values as parameters
console.log(arr1.concat(4,5,6));
//also can use more than one array as parameters
console.log(arr1.concat([4],[5],[6]));
//use ... accept the value of an enumeration
console.log(arr1.concat(...arr2));
//It can be used continuously
console.log(arr1.concat(4).concat(5).concat(6));
//output:
[ 1, 2, 3, 4, 5, 6 ]
    [ 1, 2, 3, 4, 5, 6 ]
    [ 1, 2, 3, 4, 5, 6 ]
    [ 1, 2, 3, 4, 5, 6 ]
    [ 1, 2, 3, 4, 5, 6 ]
    concat() can be used for the flat output of two-dimensional or multidimensional arrays. look this example:

var arr=[[1,2],[3,4],[5,6]];
var result=[];
for (var i=0;i<arr.length;i++)
  result=result.concat(arr[i]);
console.log(result);    //output: [ 1, 2, 3, 4, 5, 6 ]
Task
Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

Some example:

bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"*/
function bigToSmall(arr){
    let res =[].concat(...arr);
    return res.slice().sort((a,b)=>b-a).join('>');
}
console.log(bigToSmall([[1,2],[3,4],[5,6]]));
/*
console.log('-----------------------------------------');

Two Oldest Ages
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument
and return the two highest numbers within the array. The returned value should be an array in the format [second
oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items.

    For example:

    twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]*/
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return res= ages.sort((a,b)=>a-b).slice(ages.length-2); ;

}
console.log(twoOldestAges( [1, 2, 10, 8] ));
console.log(twoOldestAges([1,5,87,45,8,8]));
console.log('-----------------------------------------');

/*
Largest pair sum in array
Given a sequence of numbers, find the largest pair sum in the sequence.

    For example

    [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
    [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
    Input sequence contains minimum two elements and every element is an integer.*/
function largestPairSum(numbers)
{
   let largest = numbers[0]+numbers[1];
   console.log(largest);
   for(let i=0; i<numbers.length; i++){
       if(numbers[i]+numbers[i+1]>largest){
           largest = numbers[i]+numbers[i+1];
       }
   }
   return largest;
}
//Other solution using sort
function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers[0] + numbers[1];
}
console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log('-----------------------------------------');

/*
Sum of two lowest positive integers
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive
integers. No floats or non-positive integers will be passed.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

    [10, 343445353, 3453445, 3453545353453] should return 3453455.*/
function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function (a,b){ return a-b});
    return numbers[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

/*
Sort array by string length
Write a function that takes an array of strings as an argument and returns a sorted array containing the same
strings, ordered from shortest to longest.

    For example, if this array were passed as an argument:

    ["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

    ["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide
how to order multiple
strings of the same length.*/
function sortByLength (array) {
   return  array.sort((a, b) => a.length - b.length)
};
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));//[ 'Eyes', 'Glasses', 'Monocles', 'Telescopes' ]
console.log('-----------------------------------------');

/*Santa's Naughty List
Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day.
    Go through a
list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more' +
'than once. Output should be sorted.

Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam"
are different, but "sAm" and "sAm" are not.*/
function findChildren(santasList, children) {
        santasList = santasList.filter(el => children.includes(el));
        console.log(santasList);
        //filter out duplicates
        return santasList.filter((el, i) => i === santasList.indexOf(el)).sort();
}

console.log(findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"]));
console.log(findChildren( ["jASon", "JAsoN", "JaSON", "jasON"], ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"]));
console.log('-----------------------------------------');


/*Minimize Sum Of Array (Array Series #1)
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
    Notes
Array/list will contain positives only .
    Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22)
Explanation:
    The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
    The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342*/
function minSum(arr) {
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    let sum = 0
    for (let i = 0; i < arr.length / 2; i++) {
        sum = sum + arr[i] * arr[arr.length - 1 - i];
    }
    return sum;
}
console.log(minSum([5,4,2,3]));

console.log('------------------------------------------');
/*
Minimum Steps (Array Series #6)
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the
array until their Sum becomes greater or equal to K.
    Notes:
List size is at least 3.

All numbers will be positive.

    Numbers could occur more than once , (Duplications may exist).

Threshold K will always be reachable.

    Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
    We add two smallest elements (1 + 2), their sum is 3 .

    Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

    Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
Explanation:
    We add two smallest elements (4 + 2), their sum is 6 .

    Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .

    Now we add the next smallest number (14 + 9) , so the sum becomes 23 .

    Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .

*/
function minimumSteps(numbers, value) {
    numbersSort = numbers.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < numbersSort.length; i++) {
        sum = sum + numbersSort[i];
        if (sum >= value) return i;
    }
}
console.log(minimumSteps([8,9,10,4,2], 23));//3
//console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464));