/*Is number a palindrome?
    Write a function which for given number returns true if number is palindrome or false if it is not.

    A number is a palindrome if when the digits are reversed it is the same number.

    Ex. 121 is a palindrome

121 -> 121

Ex. 345 is not a palindrome

345 => 543*/
function isPalindromic(a) {
    let rev = +a.toString().split('').reverse('').join('');
    console.log(rev)
    return a === rev ? true : false;
}
console.log(isPalindromic(1234567));
console.log(isPalindromic(22322));
//Other codewars
isPalindromic = a => a==+a.toString().split('').reverse().join('');
//Other codewars
isPalindromic = a => a == String(a).split('').reverse().join('');

console.log('----------------------');
/*
Squash the bugs
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

    There will only be one 'longest' word.*/
function findLongest(str) {
    var spl = str.split(' ');
    var longest = 0;

for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
        longest = spl[i].length;
    }
}
return longest;
}
console.log(findLongest("Sausage chops"));
//Other codewars solutions
const findLongest1 = s => Math.max(...s.split(" ").map(x => x.length));
console.log('----------------------');
//Other codewars solutions
var findLongest2=s=>s.split` `.reduce((t,v)=>(v=v.length)>t?v:t,0) //reduces array to one length of the longest element (word)

console.log('----------------------');

/*
Initialize my name
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

    You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'*/
function initializeNames(name){
    //console.log(name)
    name= name.split(' ');
    let res=[];
    for(let i=1; i<name.length-1; i++){
        let w = name[i].slice(0,1) + '.';
        res.push(w);
    }
    return name.length>2? name[0] + ' '+  res.join(' ')  + ' '+ name.slice(-1): name.join(' ');
}
console.log(initializeNames('Alice Betty Catherine Davis'));

//Other codewars solutions
function initializeNames(name){
    var n = name.split(" ");
    if(n.length < 3) return name;
    for(i = 1; i < n.length-1; i++){
        n[i] = n[i][0] + ".";
    }
    return n.join(" ");
}
//Other codewars solutions
function initializeNames(name){
    var arr = name.split(' ');
    for (var i = 1; i < arr.length - 1; i++)
        arr[i] = arr[i].charAt(0) + '.';
    return arr.join(' ');
}
console.log('----------------------');

/*
Reversing Words in a String
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

    As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

reverse('Hello World') === 'World Hello'
reverse('Hi There.') === 'There. Hi'*/
function reverse(string){
    return string.split(' ').reverse().join(' ');
}
console.log(reverse('no one cares'));
console.log('----------------------');

/*Number of ones in binary
Write a function which takes a positive integer and returns the number of ones that appear in its binary representation.

    For example,

    ones(1); // -> 1
ones(4); // -> 1
ones(7); // -> 3*/
function ones(n) {
    return n.toString(2).split('').filter(el=>+el ===1).length;
}
console.log(ones(4));
console.log(ones(7));
//console.log(ones(8));
//Other codewars solutions
ones=z=>z.toString(2).match(/1/g).length
//other codewars solutions
function ones(n) {
    return n.toString(2).match(/1/g).length
}
//Other codewars solutions
function ones(n) {
    return n.toString(2).split('').reduce((sum, x) => sum + +x, 0)
}

/*
Convert a string to an array
Write a function to split a string and convert it into an array of words. For example:

    "Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]*/
function stringToArray(string){
    return string.split(' ');
}
console.log(stringToArray("Robin Singh"));
console.log('----------------------');

/*
Reverse Letters in Sentence
Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word.

    If there is punctuation, it should be interpreted as a regular character; no special rules.

    If there is spacing before/after the input string, leave them there.

    String will not be empty.

    Examples
"Hi mom" => "iH mom"
" A fun little challenge! " => " A nuf elttil !egnellahc "*/
// reverse the letters in the sentence
console.log('----------------------');

function reverser(sentence) {
    return sentence.split('').reverse().join('').split(' ').reverse().join(' ')
}
console.log(reverser("Hello mother")); //olleH rehtom
console.log('----------------------');

/*
Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
Description:
    Count the number of exclamation marks and question marks, return the product.

    Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20*/
function product(s) {
    s = s.split('');
    console.log(s)
    let questonMark = s.filter(el => el === '?').length; //3
    let exclamationMark = s.filter(el => el === '!').length; //3
    return questonMark * exclamationMark;
    console.log(questonMark, exclamationMark);//9
}
console.log(product("!!!???"));
console.log('----------------------');

//other codewars solutions
function product2(s){
    excs = s.split('!').length - 1
    ques = s.split('?').length - 1
    return excs * ques
}
//Other codewars solutions
const product3 = s =>
    s.replace(/[^!]/g, ``).length * s.replace(/[^?]/g, ``).length;
console.log('----------------------');

/*
Pig Latin Converter
Write a function that takes in a string and convert that string to Pig Latin.

    Definition of Pig Latin for the purposes of this program:
    Take the first letter of each word and put it at the end
Add 'ay' at the end of each word
Example
The cat ran away with the spoon

would evaluate to

hetay atcay anray wayaay ithway hetay poonsay

Misc Info
The returned value should be in all lowercase.*/
function pigLatin(phrase) {
    return phrase.toLowerCase().split(' ').map(v=>v.slice(1)+v.slice(0,1)+'ay').join(` `);
}

console.log(pigLatin('sup')); //upsay
console.log(pigLatin('The cat ran away with the spoon'));//hetay atcay anray wayaay ithway hetay poonsay
// other solutions
const pigLatin2 = s => s.split` `.map(e => e.slice(1) + e[0].toLowerCase() + 'ay').join` `;

console.log('----------------------');

/*
String Reversing, Changing case, etc.
    Given 2 string parameters, show a concatenation of:

    the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
    the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
    ** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.***/
function reverseAndMirror(s1,s2) {
    let m1= s1.split('').map(v => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase())).reverse().join('');
    let m2 =s2.split('').map(v => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase())).reverse().join('');
    let m3 = m1.split('').reverse().join('');
   return `${m2}@@@${m1}${m3}`;
}
console.log(reverseAndMirror('FizZ','buZZ'));//zzUB@@@zZIffIZz
console.log('----------------------');

/*
Can Santa save Christmas?
    Can Santa save Christmas?
    Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?

    Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration is a
present Santa has to distribute. Determine whether he can do it in 24 hours or not.
Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS.
 Each duration is a present Santa has to distribute. Determine whether he can do it in 24 hours or not.*/
function determineTime(durations){
    let sec = 0;
    for (let i = 0; i < durations.length; i++ ){
       let arr = durations[i].split(':');
        console.log(arr);
        sec += arr[0] * 60 * 60 + arr[1] * 60 + arr[2]*1;
    }
    return (sec <= 86400 ) ? true : false;
}
console.log(determineTime(["12:00:00", "11:00:00"]));
console.log('----------------------');

/*
Interweaving strings and removing digits
Your friend Rick is trying to send you a message, but he is concerned that it would get intercepted by his partner.
    He came up with a solution:

    1) Add digits in random places within the message.

2) Split the resulting message in two. He wrote down every second character on one page, and the remaining ones on
another. He then dispatched the two messages separately.

    Write a function interweave(s1, s2) that reverses this operation to decode his message!

    Example 1: interweave("hlo", "el") -> "hello" Example 2: interweave("h3lo", "el4") -> "hello"

Rick's a bit peculiar about his formats. He would feel ashamed if he found out his message led to extra white spaces ' +
'hanging around the edges of his message...*/
function interweave(s1, s2) {
    s1=s1.split('')
    s2=s2.split('')
    let arr=[];
    let str=(s1.join(``)+s2.join(``))
    console.log('str:',str)
    for (let i =0 ;i<str.length;i++){
        if (i%2===0){arr.push(s1.shift())}
        else {arr.push(s2.shift())}
    }
    console.log('arr:',arr);
    return arr.join('').replace(/[0-9]/gi,'') ;
}
//another codewars solutons
function interweave1(s1, s2) {
    let arr = [];
    s1 = s1.split('');
    s2 = s2.split('');
    if (s1.length > s2.length) s2.push('');
    for (let i = 0; i < s1.length; i++) {
        arr.push(s1[i], s2[i]);
    }
    return arr.join('').trim().replace(/\d/g, '');
}
console.log(interweave1("hlo", "el2"));//hello
console.log('----------------------');

/*
Reverse the bits in an integer
Write a function that reverses the bits in an integer.

    For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.*/
function reverseBits (n) {
    let b = n.toString(2).split('').reverse().join('');
    return parseInt(b,2)
}
console.log(reverseBits(417));//267

//or
function reverseBits1(num) {
    return parseInt(num.toString(2).split("").reverse().join(""), 2);
}
console.log('----------------------');

 /*   Tidy Number (Special Numbers Series #9)
    Definition
    A Tidy number is a number whose digits are in non-decreasing order.

        Task
    Given a number, Find if it is Tidy or not .
tidyNumber (12) ==> return (true)
Explanation:
    The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
tidyNumber (32) ==> return (false)
Explanation:
    The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .*/
function tidyNumber(n){
    let arr = n.toString().split('');
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1])return  false;
    }
    return true;
}
console.log(tidyNumber(102));
console.log(tidyNumber(2789));
console.log('----------------------');

/*
Simple equation reversal
Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
More examples in test cases.*/
function solve(eq){
    console.log(eq.split(/([*+-/])/));
    return eq.split(/([*+-/])/).reverse().join('');
}
console.log(solve("100*b/y")); //y/b*100
console.log(solve("a+b-c/d*30"));//"30*d/c-b+a"
//Or
function solve1(eq){
  return eq.split(/([*\+\-\/])/).reverse().join('');
}
console.log('----------------------------');


/*
Responsible Drinking
Welcome to the Codewars Bar!
    Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

    Examples
"1 beer"  -->  "1 glass of water"
because you drank one standard drink
"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
Note:

    To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

*/
function hydrate(s) {
    let sum= s.replace(/\D/g, '').split('').map(el=>+el).reduce((a,b)=>a+b,0)
    return (sum === 1)? "1 glass of water" : `${sum} glasses of water`;
}
console.log(hydrate("2 glasses of wine and 1 shot")); //3 glasses of water
console.log(hydrate('1 beer 2 glasses of wine and 1 shot 1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer'));
console.log('----------------------------');

//Other codewars solutions
function hydrate1(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        if (parseInt(s[i]) > 0) {
            answer += +s[i];
        }
    }
    return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
}
console.log('----------------------------');

//Other codewars
const hydrate2 = (s, w = [...s].filter(x => !isNaN(x)).reduce((a, b) => a + +b, 0)) => `${w} glass${w === 1 ? '' : 'es'} of water`;

console.log('----------------------------');

/*
Remove consecutive duplicate words
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"*/
function removeConsecutiveDuplicates(s){
    let arr = s.split(' ');
    let nArr = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] !== arr[i+1])(
            nArr.push(arr[i])
        )
    }
    return nArr.join(' ');
}
console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))//alpha beta gamma delta alpha beta gamma delta
//Other codewars
const removeConsecutiveDuplicates1 = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");
//Other codewars
const removeConsecutiveDuplicates2 = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')


console.log('----------------------------');

/*
Every possible sum of two digits
Given a long number, return all the possible sum of two digits of it.

    For example, 12345: all possible sum of two digits from that number are:

    [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

    [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
*/

function digits(num) {
    let result = [];
    num = num.toString();
    for(let i = 0; i < num.length; i++)
        for(let j = i + 1; j < num.length; j++)
            result.push(+(num[i]) + +(num[j]));
    return result;
}
//Or other codewars
// function digits(num){
//     num = num.toString().split('').map(el => +el);
//     let arr = [];
//     for(let i = 0; i < num.length - 1; i++){
//         for(let j = i + 1; j < num.length; j++){
//             arr.push(num[i] + num[j]);
//         }
//     }
//     return arr;
// }
console.log(digits(156));//[ 6, 7, 11 ]
console.log('----------------------------');


/*
Sentences should start with capital letters.
    In English, all words at the begining of a sentence should begin with a capital letter.

    You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.

    For example,

    input:

"hello. my name is inigo montoya. you killed my father. prepare to die."

output:

    "Hello. My name is inigo montoya. You killed my father. Prepare to die."

You may assume:

    there will be no punctuation besides full stops and spaces

all but the last full stop will be followed by a space and at least one word*/

//console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."))
function fix(p){
    if(p.length < 1) return '';
    let arr = p.split('. ');
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('. ');
}
//Or another codewars
function fix(paragraph){
    //console.log(paragraph.replace(/(^|\. )[a-z]/g));
  return paragraph.replace(/(^|\. )[a-z]/g, val => val.toUpperCase());
}
console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."))

console.log('----------------------------');

/*
Duplicate sandwich
Task
In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

    Your task is to output a list of everything inbetween both occurrences of this element in the list.

    Examples:
[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
    ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
    [0, 0] => []
    [true, false, true] => [false]
"example" => "xampl"*/

function duplicateSandwich(a) {
    for(let i = 0; i < a.length - 1; i++)
        if(a.indexOf(a[i]) !== a.lastIndexOf(a[i]))
            return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
}
console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]));
console.log('----------------------------');

let str = 'cookies';
let str2 = str.toUpperCase();
let res = '';
for (let i = 0; i < str.length - 1; i++) {
    if (i === str.length - 2) {
        res += str2[i] + str[i];
    } else {
        res += str2[i] + str[i] + ' ';
    }
}
res = res.split(' ');
console.log(res);// ["Cc", "Oo", "Oo", "Kk", "Ii", "Ee"]
console.log('----------------------------');

/*
Sushi-go-round (Beginner's)
Sam has opened a new sushi train restaurant - a restaurant where sushi is served on plates that travel around the bar on a conveyor belt and customers take the plate that they like.

    Sam is using Glamazon's new visual recognition technology that allows a computer to record the number of plates at a customer's table and the colour of those plates. The number of plates is returned as a string. For example, if a customer has eaten 3 plates of sushi on a red plate the computer will return the string 'rrr'.

    Currently, Sam is only serving sushi on red plates as he's trying to attract customers to his restaurant. There are also small plates on the conveyor belt for condiments such as ginger and wasabi - the computer notes these in the string that is returned as a space ('rrr r' //denotes 4 plates of red sushi and a plate of condiment).

Sam would like your help to write a program for the cashier's machine to read the string and return the total amount a customer has to pay when they ask for the bill. The current price for the dishes are as follows:

Red plates of sushi ('r') - $2 each, but if a customer eats 5 plates the 5th one is free.
Condiments (' ') - free.
    Input: String
Output: Number

Examples:

    Input: 'rr'  Output: 4
Input: 'rr rrr' Output: 8
Input: 'rrrrr rrrrr' Output: 16*/
//Codewars solutions
function totalBill(str) {
    str=str.replace(/\s/g,'');
    return str?(str.match(/r/g).length-Math.floor(str.match(/r/g).length/5))*2:0;
}
//Or others
function totalBill(str) {
    var strl = str.split(' ').join('').length;
    return strl > 4 ? (strl - Math.floor(strl / 5)) *2 : strl*2;
}
//Or Larisa O solutions
function totalBill(str) {
    let sushi = str.split("").filter(el=>el==="r").length;
    let free = Math.trunc(sushi / 5);
    return (sushi - free) * 2;
}
console.log(totalBill('rr rrr rr'));
//Objecs lesson
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum =0
for(let sal in salaries){
    sum = sum + salaries[sal]
}
console.log(sum);

console.log('-----------------');


/*
Semi-Optional
We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new Javascript Object setting the 'value' key on the new Object to the passed-in value.

    So, for example, if we execute the following code:

    var wrappedObj = wrap("MyWrappedString");
// wrappedObject should be  {"value":"MyWrappedString"}
We would then expect the following statement to be true:

wrappedObj.value === "MyWrappedString"
Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.*/
function wrap(value) {
    return {value};

}
console.log('-----------------');

/*Grasshopper - Create the rooms
Escape the room
You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of
the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three proper*/
// Add rooms here
var rooms = {
    name: {
        'a': 'a',
        'b':' b',
        'c': 'c'

    },
    description: {
        'a': 'a',
        'b':' b',
        'c': 'c'
    },
    completed:{
        'a': 'a',
        'b':' b',
        'c': 'c'
    }
}
//solutions from codewars

var rooms = {}
for (var i = 0; i < 3; i++) {
    rooms[`room${i}`] = {'a': 1, 'b': 2, 'c': 3}
}
//solutions from codewars
const rooms = {
    bedRoom     : [1,2,3],
    kitchenRoom : [4,5,6],
    bathRoom    : [7,8,9]
}