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
console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464));

console.log('------------------------------------------');
/*
Sum of differences in array
Your task is to sum the differences between consecutive pairs in the array in descending order.

    For example: sumOfDifferences([2, 1, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

*/

    function sumOfDifferences(arr) {
        if(arr.length<1) return 0;
        return  Math.max(...arr) - Math.min(...arr);
    }
console.log(sumOfDifferences([1, 2, 10]));
console.log('------------------------------------------');

/*
Mirror, mirror, on the wall...
Too long, didn't read
You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version
of this list: i.e. the middle element is the greatest, then the next greatest on both sides, the the next greatest,
    and so on...

More info
The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your
function should not mutate the input array, and this will be tested (where applicable). Notice that the returned
    list will always be of odd size,
    since there will always be a definitive middle element.
    []  -->  []
    [1]  -->  [1]
    [2, 1]  -->  [1, 2, 1]
    [1, 3, 2]  -->  [1, 2, 3, 2, 1]
    [-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]*/

    function mirror(data) {
        let arr = [];
        for (let i = 0; i < data.length; i++){
            arr.push(data[i])
        }
        console.log('before', arr);
        let part1 = arr.sort((a,b)=>a-b);
        console.log('part 1',part1)
        console.log('part 1 slice', part1.slice(0,-1))
        //console.log('part 1 slice reverse', part1.slice(0,-1).reverse())
        let part2 = part1.slice(0,-1).reverse().sort((a,b) => b-a);
        console.log('part 2',part2)
        return part1.concat(part2)
    }
    console.log('------------------------------------');
/*Sort Numbers.https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an
empty array or null/nil value then it should return an empty array.
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []*/
function solution(nums){
    if(nums === null) return[];
    return nums.sort((a,b)=>a-b);
}
console.log(solution([1, 2, 10, 50, 5]));
console.log('------------------------------------');

/*
//Array.prototype.join()  Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
    You can ignore any need to sanitize words or add punctuation, but you should add spaces between
each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example
    ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/
// Smash Words
function smash (words) {
   return words.join(' ')
};
console.log(smash(['hello', 'world', 'this', 'is', 'great']));
console.log('------------------------------------');

/*
https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/javascript
String Templates - Bug Fixing #5
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help' +
' Timmy with his string template so it works as he expects!*/
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}
console.log(buildString('Cheese','Milk','Chocolate'));
console.log('------------------------------------');

/*
Printing Array elements with Comma delimiters
Input: Array of elements

    ["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.*/
function printArray(array){
   return array.join(',')
}
console.log(printArray(["h","o","l","a"]));

/*
Ones and Zeros
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

    Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

    Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11*/
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''),2);
};
console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log('------------------------------------');

/*
CSV representation of array
Create a function that returns the CSV representation of a two-dimensional numeric array.

    Example:

input:
    [[ 0, 1, 2, 3, 4 ],
        [ 10,11,12,13,14 ],
        [ 20,21,22,23,24 ],
        [ 30,31,32,33,34 ]]

output:
    '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.*/
function toCsvText(array) {
    return array.join('\n');
}
console.log(toCsvText( [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] ));
console.log('------------------------------------');

/*
Enumerable Magic #1 - True for All?
                                   Create a method all which takes an array and a predicate (function pointer),
    and returns true if the predicate returns true for every element in the array. Otherwise, it should return false.
    If the array is empty, it should return true, since technically nothing failed the test.

    Here's a (Ruby) resource if you get stuck: http://www.rubycuts.com/enum-all*/
function all( arr, fun ){
    return arr.every(fun);
}
console.log(all([1,2,3,4,5], function(v){return v<9})); //true
console.log(all([1,2,3,4,5], function(v){return v>9})); //false
console.log('------------------------------------');

/*
Are the numbers in order?
    Are the numbers in order?
    In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers
are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left
integer exceeds the right integer in value.

    For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only
integers.

    Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero)
adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.
    An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise
an Issue if you see such a list being tested.

    For example:

    inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.

*/
function inAscOrder(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= arr[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(inAscOrder([1,2,4,7,19])); //true
console.log(inAscOrder([1,2,4,7,19])); //true
console.log(inAscOrder([9,8,7,6,5,4,3,2,1])); //false
console.log('------------------------------------');

/*
Small enough? - Beginner
    You will be given an array and a limit value. You must check that all values in the array are below or equal
to the limit value. If they are, return true. Else, return false.

    You can assume all values in the array are numbers.*/
function smallEnough(a, limit){
 return a.every(el => el<=limit);
}
console.log(smallEnough([66, 101], 200));
console.log('------------------------------------');

/*Dominant array elements
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and
your task will be to return a list of all dominant elements. For example:

    solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included.*/
//solution from student
function solve(arr){
    const arr1=[];
    for (let i=0;i<arr.length-1;i++){
        let n=arr[i]
        let arr2=arr.slice(i+1);
        console.log("arr2",arr2);
        let arr3=arr2.map(v=>n>v)
        console.log("arr3",arr3);
        if (arr3.every(v=>v===true)){arr1.push(n)}
    }
    arr1.push(arr[arr.length-1])
    return arr1
};
console.log(solve([16,17,14,3,14,5,2]));
//solution2 from student
function solve1(arr){

    console.log(arr.filter((currentV,i)=>arr.slice(i+1)));
    return arr.filter((currentV,i)=>arr.slice(i+1).every(el=>el<currentV))
};
//solution from Larisa O
function solve(arr){
    let res = [];
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > Math.max(...arr.slice(i+1))){
            res.push(arr[i])
        }
    }
    return res.concat(arr[arr.length-1])
};
console.log(solve1([16,17,14,3,14,5,2]));
console.log('------------------------------------');

/*Are there any arrows left?
    Check your arrows
You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range
information (different types of targets are positioned at different ranges), so each item is an arrow.
    You need to verify that you have some good ones left, in order to prepare for battle:
anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
If an arrow in the quiver does not have a damaged status, it means it's new.

The expected result is a boolean, indicating whether you have any good arrows left.*/
function anyArrows(arrows){
    return arrows.some(el => !el.damaged);
}
console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])); //true
console.log(anyArrows([{range: 10, damaged: true}, {damaged: true}])); //false
console.log('------------------------------------');

//https://www.codewars.com/kata/58646a1173bd9c86080000ef/javascript
//All Star Code Challenge #10

function  fibonacci(n){
    if(n===0) return 0;
    if(n===1) return 1;
    let fib =[0,1];
    for(let i=2;i<=n; i++)
    {
        fib[i]=fib[i-2] + fib[i-1];
        console.log(fib[i])
    }
    return fib[fib.length-1];
}
console.log(fibonacci(6));// => 8
console.log('------------------------------------');

/*
Grasshopper - Array Mean
Find Mean
Find the mean (average) of a list of numbers in an array.

    Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values
in the list.

    For an example list of 1, 3, 5, 7

1. Add all of the numbers
1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4*/
function findAverage(nums) {
    return (nums.reduce((acc, curr) => acc + curr))/nums.length
}
console.log(findAverage([1, 3, 5, 7]));
console.log('------------------------------------');

/*
Write shortest function to calculate Average number of Array
Given an array of integers, calculate the Average of these numbers.

    Main challenge is to write shortest and compact function for it.

                                                                     For example: var a = [0, 1, 2];
avg(a) // output should be 1
Output of function will be also checked in tests, however most important is to write the shortest possible function
(code length < 100). Input will always be valid.*/
function avg(a){
    return (a.reduce((acc,val)=>acc + val))/a.length;
}
console.log(avg([0, 1, 2, 3, 4]));
console.log('------------------------------------');

/*
Calculate mean and concatenate string
You will be given an array which will include both integers and characters.

    Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number.
    There will always be 10 integers and 10 characters. Create a single string with the characters and return it as
    a[1] while maintaining the original order.
    lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Here is an example of your return

[3.6, "udiwstagwo"]
*/
function mean(lst){
    let n= lst.filter(function (item) {
        return (!isNaN(item));
    });
    let s= lst.filter(function (item) {
        return (isNaN(item))

    });
    let mean= n.reduce((acc,value)=>acc + parseFloat(value),0)/10;
    return [mean,s.join('')];
}
console.log(mean(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']));
console.log('------------------------------------');

/*Be Concise III - Sum Squares
sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
sumSquares([7,3,9,6,5]) === 200
sumSquares([11,13,15,18,2]) === 843
Shorten the code such that it meets the requirements.*/
function sumSquares(array) {
    return array.reduce((acc, val)=> acc+val**2,0);
}
console.log(sumSquares([1,2,3,4,5]));
console.log(sumSquares([7,3,9,6,5]));
console.log(sumSquares([11,13,15,18,2]));
console.log('------------------------------------');

/*SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of
each element in a is strictly greater than the sum of the cubes of each element in b.
arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3*/
function arrayMadness(a, b) {
   return a.reduce((acc,val)=>acc+ val**2,0)> b.reduce((acc,val)=> acc + val**3,0);
}
console.log(arrayMadness([4,5,6],[1,2,3]));
console.log('------------------------------------');

/*Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/
function grow(x){
    return x.reduce((acc,val)=> acc*val);
}
console.log(grow([1, 2, 3, 4]));
console.log('------------------------------------');

/*Array plus array
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. ' +
'I'll appreciate for your help.

    P.S. Each array includes only integer numbers. Output is a number too.*/
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,b)=>a+b) +arr2.reduce((a,b)=>a+b);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log('------------------------------------');

/*
Predict your age!
    My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

    In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
    Multiply each number by itself.
    Add them all together.
    Take the square root of the result.
    Divide by two.
    Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

    Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.*/

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let ages = [age1,age2,age3,age4,age5,age6,age7,age8];
    let res = ages.map((el) => el * el).reduce((sum, current) => sum + current, 0);
    return Math.floor(Math.sqrt(res) / 2);
}
console.log(predictAge(65,60,75,55,60,63,64,45));
console.log('------------------------------------');

/*
Take an Arrow to the knee, Functionally
Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
    Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS),
    Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map
over the array of numbers and convert each number to the corresponding ascii character.

    Examples
These are example of how to convert a number to an ascii Character:
    Javascript => String.fromCharCode(97) // a*/
var ArrowFunc = function(arr) {
    return arr.map((el)=> String.fromCharCode(el)).join('');
}
console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72])); //FUS ROH DAH
console.log('------------------------------------');
/*

Freudian translator
You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' ' +
'"The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.

In the society he li    ved in, people-women in particular- had to repress their sexual needs and desires. This was simply
how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root
of their desires.
    This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

    Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically
related to, and explained by sex.

    In this kata, the toFreud() function will take a string as its argument, and return a string with every word
replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should
result in the ouput being ""(empty string).*/
function toFreud(string) {
    if(string.length===0) return "";
    return String(string).split(' ').map(el=>'sex').join(' ');
}
console.log(toFreud("This is a test"));//"sex sex sex sex"
console.log(toFreud(""));
console.log('------------------------------------');

/*
Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
Task
Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

    The first mission: let all elements in the array keep two decimal places(No need to convert number n).

The second mission: Traversal arr, count the number of the element which smaller than n and return it.

    for example:

    howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2*/

function howManySmaller(arr,n){
    console.log(arr.filter(el=> el.toFixed(2)));
    console.log(arr.map(el=> el.toFixed(2))); //note it returs a string
   return  arr.filter(el=> el.toFixed(2)<n).length;
}
console.log(howManySmaller([1.234,1.235,1.228],1.24));

/*
Convert an array of strings to array of numbers
Oh no!
    Some really funny web dev gave you an array of numbers from his API response as an array of strings!

    You need to cast the whole array to the correct type.

    Create the function

JavaScript: toNumberArray(array)
Ruby: toNumberArray(array)
C#: ToDoubleArray(array)
that takes as a parameter an array of numbers represented as strings and outputs an array of numbers.

    ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.*/
function toNumberArray(stringarray){
    return stringarray.map(el=> parseFloat(el));
}
console.log(toNumberArray(["1.1","2.2","3.3"])); //[ 1.1, 2.2, 3.3 ]
//OR
// const toNumberArray = arr => arr.map(Number);

/*
Beginner - Lost Without a Map
Given an array of integers, return a new array with each value doubled.

    For example:

    [1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.*/
function maps(x){
    return x.map(el=>el *2);
}
console.log(maps([4, 1, 1, 1, 4])); //[ 8, 2, 2, 2, 8 ]