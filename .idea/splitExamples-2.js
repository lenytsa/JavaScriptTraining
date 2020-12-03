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