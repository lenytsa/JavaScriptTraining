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
