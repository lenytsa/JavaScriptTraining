// "Very Even" Numbers.
//     https://www.codewars.com/kata/58c9322bedb4235468000019/train/javascript
function isVeryEvenNumber(n) {
    let sum;
    while(n>=10){
        n = n +'';
        sum = 0;
        for(let dig of n){
            sum = sum + +dig;
        }
        n = sum;
    }
    return n%2 === 0;
}
console.log('-------------------------------------')

//const inputs =    [0,    4,    12,    222,  5,     45,    4554,  1234,  88,    24,   400000220];
//  const expecteds = [true, true, false, true, false, false, false, false, false, true, true     ];

//CodeWars: Are You Playing Banjo?
// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
function areYouPlayingBanjo(name) {

   if( name.startsWith('r') || name.startsWith('R')){

       return name + ' plays banjo'
   }
        return name + ' does not play banjo'
}
console.log(areYouPlayingBanjo("Martin"));
console.log(areYouPlayingBanjo("Rikke"));
console.log('-------------------------------------')

//Calculate Two People's Individual Ages
//https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript
function getAges(sum,difference){
    if(difference < 0 || sum < 0){
        return null;
    }
    sum = sum /2;
    difference = difference /2;
    if (sum + difference < 0 ||sum - difference <0 ) return null;
    return [sum + difference, sum - difference];
};
console.log(getAges(24,4)); // [ 14, 10 ]
console.log(getAges(63,-14)); // null
console.log('-------------------------------------')

//Plural
//https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript
function plural(n) {
   if( n!== 1)
       return true;
   return false;
}
console.log(plural(0));
console.log(plural(0.8));
console.log(plural(1));
console.log(plural(Infinity));
console.log('-------------------------------------')

//Watermelon
https://www.codewars.com/kata/55192f4ecd82ff826900089e/train/javascript
    function divide(weight){
        if(weight > 2)
            if(weight%2 !== 1)
                return true;
        return false;
    }
console.log(divide(2));
//Other soulutions, same task
function divide1(weight){
  //your code here
  return weight > 2 && weight%2 == 0;
}

console.log('-------------------------------------')
//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript
//Days in the year
// function yearDays(year)
// {
//    if(year%4 === 0 && year%400 === 0  )
//        return `${year} has 366 days`;
//    return `${year} has 365 days`;
// }
// console.log(yearDays(0));
// console.log(yearDays(-64));
// console.log(yearDays(1974));
// console.log(yearDays(1900));//365
// console.log(yearDays(1000));//365
function yearDays(year) {
    if(year % 4===0 && year % 100 !==0 || (year % 400===0) )
        return `${year} has 366 days`;
    return `${year} has 365 days`;
}
console.log(yearDays(0));
console.log(yearDays(-64));
console.log(yearDays(1974));
console.log(yearDays(1900));//365
console.log(yearDays(1000));//365
console.log(yearDays(-64));//366
console.log('-------------------------------------')

//Be Concise I - The Ternary Operator
//https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript

function describeAge(age) {
    if (age <= 12) {
        return "You're a(n) kid";
    } else if (age >= 13 && age <= 17) {
        return "You're a(n) teenager";
    } else if (age >= 18 && age <= 64) {
        return "You're a(n) adult";
    } else {
        return "You're a(n) elderly";
    }
}
console.log('-------------------------------------')

function describeAge1(age) {
    //let s = 'You\'re a(n) ';
    //return (age<=12)?`kid':(age >= 13 && age<=17)?str+'teenager':(age>=18&& age<=64)?str+'adult':str+'elderly';
    //return (age<13)?`${s}kid`:(age <18)?`${s}teenager`:(age<65)?`${s}adult`:`${s}elderly`;
    //return `You're a(n) ${age<13?'kid':age<18?'teenager':age<65?'adult':'elderly'}`
    return `You're a(n) ${age < 13 ? 'kid' : age < 18 ? 'teenager' : age < 65 ? 'adult' : 'elderly'}`;
}
console.log(describeAge1(68));
console.log('-------------------------------------')

//CodeWars: 101 Dalmatians - squash the bugs, not the dogs!
//https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/javascript
function howManyDalmatians(number) {

    var dogs= ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    var respond = (number <= 10) ? dogs[0]: (number <= 50) ? dogs[1] : (number <=100) ?  dogs[2] : dogs[3];
    return respond
}
function howManyDalmatians2 (number) {
    let dogs = [
        'Hardly any',
        'More than a handful!',
        'Woah that\'s a lot of dogs!',
        '101 DALMATIANS!!!'
    ]
    let respond = number <= 10 ? dogs[0]
        : number <= 50 ? dogs[1]
            : number == 101 ? dogs[3]
                : dogs[2]
    return respond
}
console.log(howManyDalmatians(26));
console.log(howManyDalmatians(100));
console.log(howManyDalmatians(101));
console.log('-------------------------------------')
console.log(howManyDalmatians2(26));
console.log(howManyDalmatians2(100));
console.log(howManyDalmatians2(101));
console.log('-------------------------------------')
//Do I get a bonus?
//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
    return  bonus ? `£${salary *10}` :`£${salary}`;

}
console.log(bonusTime(10000, true));
console.log(bonusTime(25000, true));
console.log(bonusTime(2, true));
console.log('-------------------------------------')


//Training JS #7: if..else and ternary operator
//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
function saleHotdogs(n){
    return n < 5 ? n * 100: n >=5 && n<10 ? n * 95: n * 90;
}
console.log(saleHotdogs(5));

console.log('-------------------------------------')

//CodeWars: Get Planet Name By ID
//https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
function getPlanetName(id){
    var name;
    switch(id){
        case 1:
            name = 'Mercury';
            break;
        case 2:
            name = 'Venus';
            break;
        case 3:
            name = 'Earth';
            break;
        case 4:
            name = 'Mars';
            break;
        case 5:
            name = 'Jupiter';
            break;
        case 6:
            name = 'Saturn';
            break;
        case 7:
            name = 'Uranus';
            break;
        case 8:
            name = 'Neptune';
    }
    return name;
}
console.log(getPlanetName(3));
console.log('-------------------------------------')


//Basic Calculator
//https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript
function calculate(num1, operation, num2) {
    switch (operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': if(num2 !==0) return num1 / num2; //return num2 === 0 ? null : num1 / num2;
        default: return null;
    }
}
console.log(calculate(3.2,"/", 0));
console.log('-------------------------------------')


//https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript
function howManydays(month){
  var days;
  switch (month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
          return days = 31;
      break;
      case 4: case 6: case 9: case 11:
          return  days = 30;
      case 2:
          return days = 28;
      default: return 'NaN';
  }
  return days;
}
console.log(howManydays(132));
console.log('-------------------------------------')
//Basic Mathematical Operations
//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
function basicOp(operation, value1, value2)
{
   switch (operation) {
       case '+': return value1 + value2;
       case '-': return value1 - value2;
       case '*': return value1 * value2;
       case '/': return value1 / value2;
   }
}
console.log('-------------------------------------')
//Switch it Up!
//https://www.codewars.com/kata/switch-it-up
function switchItUp(number){
    switch(number){
        case 0: return 'Zero';
        case 1: return 'One';
        case 2: return 'Two';
        case 3: return 'Three';
        case 4: return 'Four';
        case 5: return 'Five';
        case 6: return 'Six';
        case 7: return 'Seven';
        case 8: return 'Eight';
        case 9: return 'Nine';
        default: return "NaN"
    }
}
//Or switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
console.log(switchItUp(5));

console.log('-------------------------------------')
//simple calculator
//https://www.codewars.com/kata/5810085c533d69f4980001cf/solutions/javascript/me/best_practice
function calculator(a,b,sign) {
    if (typeof a !== 'number' || typeof b !== 'number'){
    }
        switch (sign) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 'unknown value';
        }
}
console.log(calculator(12,23,'-'));
console.log('-------------------------------------')

//Power of two
//https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
function isPowerOfTwo(n){
    while(n>1){
        n = n/2;
    }
    return (n === 1)? true: false;
}
console.log(isPowerOfTwo(333));

console.log('-------------------------------------')

//Difference Of Squares
//https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript
function differenceOfSquares(n){
    let squareOftheSum= 1;
    let sumOfTheSquares = 1;
    while(n>1){
        squareOftheSum = squareOftheSum + n;
        sumOfTheSquares = sumOfTheSquares + Math.pow(n,2);
        n--
   }
    console.log('Sq:' + squareOftheSum);
    console.log('Sum:' + sumOfTheSquares);
   return squareOftheSum**2 - sumOfTheSquares;
}
console.log(differenceOfSquares(10)); //2640
console.log('-------------------------------------')

//Going to the cinema
//https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript
function movie(card, ticket, perc) {
    let systemAprice = 0;
    let systemBprice = 0;
    let count = 0;
   while(Math.ceil(systemBprice + card )>= systemAprice){
       systemAprice = systemAprice + ticket;
       systemBprice = (systemBprice + ticket) * perc;
       count++
   }
   return count;
};
console.log(movie(500, 15, 0.9));
console.log('-------------------------------------')

//No zeros for heros
//https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
function noBoringZeros(n) {
   while(n%10 === 0 && n!==0){
           n = n/10;
       }
       return n;
}
console.log(noBoringZeros(10500));
console.log('-------------------------------------')

//Powers of 3
//https://www.codewars.com/kata/57be674b93687de78c0001d9/train/javascript
function largestPower(n){
    let k = 0;
    while(3**k < n) {
        k++
    }
    return k-1;
}
console.log(largestPower(3));
console.log(largestPower(8));
console.log('-------------------------------------')
//Factorial with while loop
function factorial(n){
    let fac = 1;
    while(n>=1){
        fac = fac * n;
        console.log( `${fac} * ${n}`);
        n--
    }
    return fac;
}
console.log(factorial(4));//24
//Factorial without using while loop
function factorial2(n){

    return n>1?  n * factorial2(n-1): 1;
}
console.log(factorial2(4));//24

//
// let i = 3;
// while (i <= 10){
//     z = i++;
//     i += 2;
// }
console.log('++++++++')
//console.log(i)
// let x = 1;
// while (x <= 10){
//     console.log(x, x*x);
//     x = x + 2;
// }
console.log('-----------------------------------------')
// let i = 3;
// while (i <= 10){
//     z = i++;
//     i += 2;
//
// }
// console.log(i);
let x = 10;
while (x < 0){
    y = x + 1;
    x++;
}
console.log('-----------------------------------------')
//Count the divisors of a number
//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
// Count the number of divisors of a positive integer n.
//
//     Random tests go up to n = 500000.
// divisors(4)  = 3  // 1, 2, 4
// divisors(5)  = 2  // 1, 5
// divisors(12) = 6  // 1, 2, 3, 4, 6, 12

function getDivisorsCnt(n){
    let count = 0;
    for(let i=0; i<=n; i++){
        if(n%i === 0){
            count++
        }
    }
    return count;
}
console.log('-----------------------------------------')
//Find the divisors!
//https://www.codewars.com/kata/544aed4c4a30184e960010f4/solutions/javascript
// Create a function named divisors/Divisors that takes an integer
// n > 1 and returns an array with all of the integer's divisors(except for 1' +
// ' and the number itself), from smallest to largest. If the number is prime return the string ' +
// ''(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(n){
    let arrDiv = [];
    for(let i=0; i<=n; i++){
        if(n%i === 0) {
            if (i!==1 && i !==n) {
                arrDiv.push(i);
            }
        }
    }
    return arrDiv.length === 0 ? `${n} is prime`: arrDiv;
}
console.log(divisors(15));
console.log(divisors(13));
console.log('-----------------------------------------')

//Sum of the first nth term of Series
//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
// Task:
//     Your task is to write a function which returns the sum of following series upto nth term(parameter).
//     Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
//     You need to round the answer to 2 decimal places and return it as String.
//     If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
function SeriesSum(n)
{
    let sum = 0;
    let d = 1;
    for(let i=1; i<=n; i++)
    {
        sum = sum + 1/(d);
        d += 3;
    }
    return sum.toFixed(2);
}
console.log(SeriesSum(2));//1.25
console.log(SeriesSum(3));//1.39
console.log(SeriesSum(4));//1.49
console.log(SeriesSum(5));//1.57

console.log('-----------------------------------------')

//https://www.codewars.com/kata/grasshopper-summation
//Write a program that finds the summation of every number from 1
// to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
    let sum =0
    for(let i= 1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(summation(2));
console.log(summation(8));
//// Short Solution
// const summation = n => n * (n + 1) / 2

console.log('-----------------------------------------')

//Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative,
// find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
//     Note: a and b are not ordered!
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function getSum( a, b ) {
    let sum = 0;
    let h,l;
    if (a === b) return a;
    if(a>b){
        h=a;
        l=b;
    }
    else if(b>a){
        h=b;
        l=a;
    }
    for(let i=l; i<=h; i++)
    {
        sum = sum + i;
    }
    return sum;
}
console.log(getSum(1, 2));
console.log(getSum(2, 2));
console.log(getSum(-1, 0));
console.log(getSum(0, -1));//-1
console.log('-----------------------------------------')

//Training JS #10: loop statement --for
// Task
// Coding in function pickIt, function accept 1 parameter:arr, it's a number array,
// we need traverse arr by using for loop, if element is odd number, push it to array odd,
// if it's a even number, push it to array even.
//
//     I've defined two array odd and even in the function, and also wrote the return statement.
//     your work is write a for loop.
//
// If you forgot how to push an element to array, please refer to lesson 4.
function pickIt(arr){
    var odd=[],even=[];
  for(let i=0; i< arr.length; i++){
      if(arr[i]% 2 === 0){
          even.push(arr[i]);
      }
      else if(arr[i]% 2 === 1){
          odd.push(arr[i]);
      }
  }
    return [odd,even];
}
console.log(pickIt([8,1,5,4,6,1,1]));
console.log('-----------------------------------------')

//console.log(pickIt([1,2]));
//short solution
function pickIt1 (arr) {

    let odd = []
    let even =[]

    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)
    }

    return [odd, even]
}
console.log(pickIt1([8,1,5,4,6,1,1]));
console.log('-----------------------------------------')

//Sum of Multiples
//Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
//sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
//sumMul(4, -7)  ==> "INVALID"
function sumMul(n,m){
let sum = 0;
if(n>=m) return 'INVALID';
    for(let i = n; i < m; i+=n){

        sum = sum + i;
    }
    return sum;
}
console.log(sumMul(2,9));
console.log(sumMul(4,-7));
console.log('-----------------------------------------')
//Draw stairs
//Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
//
// For example n = 3 result in "I\n I\n I", or printed:
//
// I
//  I
//   I

function drawStairs(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
          str = str + ' '.repeat(i) + 'I';
          if(i < n-1){
              str = str +'\n';
      }
           }
    return str;
}
console.log(drawStairs(3));
//Round up to the next multiple of 5
//Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
// input:    output:
//     0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5

function roundToNext5(n){
 while(n%5 !==0){
   n++
 }
  return n;
}
// CodeWars: Power
// The goal is to create a function
// 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000

function numberToPower(number, power){
    let result = 1;
    let i=1;
   if(power === 0) return 1;
  do{
        result = result * number;
        i++
  }while(i<=power)
    return result;
}
console.log(numberToPower(4, 2));
console.log(numberToPower(10, 6));
console.log(numberToPower(10, 0));
console.log('++-----------------------------------------')

//Training JS #9: loop statement --while and do..while
// Task
// Coding in function padIt, function accept 2 parameters:
//
//     str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
// n, it's a number, how many times to pad the string.

function padIt(str,n){
    let i = 0;
   do{
       if(i%2===0){
           str = `*${str}`;
       }else{
           str = `${str}*`;
       }
       i++
   }while(i<n)
    return str;
}
console.log(padIt("a",4));
console.log(padIt("a",5));
console.log('++-----------------------------------------')

//CodeWars: Training JS #11: loop statement --break,continue
//https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
function grabDoll(dolls){
    var bag=[];
   for(let i=0; i<dolls.length; i++){
       if(dolls[i]==='Hello Kitty'||dolls[i]==='Barbie doll' ){
           bag.push(dolls[i])
       }
       else {
           continue;
       }
       if(bag.length===3){
           break;
       }
   }
    return bag;
}
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]));
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]));
console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]));
//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/solutions/javascript/me/best_practice
//Count the Monkeys!
function monkeyCount(n) {
  let arr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
//another solution
function monkeyCount1(n) {
    let arr =[];
    for (let i=0; i<n; i++){
        arr[i] = i + 1;
    }
    return arr;
}
//https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
//Filling an array (part 1)
function arr(n){
    let arr =[];
    for(let i = n-1; i>=0; i--){
        arr.unshift(i)
    }
    return arr;
}
//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
//To square(root) or not to square(root)
function squareOrSquareRoot(array) {
    let arr = [];
    for(let elm of array) {
        if(Math.sqrt(elm) % 1 === 0){
            arr.push(Math.sqrt(elm))
        }else{
            arr.push(Math.pow(elm,2));
        }
    }
    return arr;
}
//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
//Find the first non-consecutive number
function firstNonConsecutive (arr) {
    function firstNonConsecutive (arr) {
        for(let i = 1; i<arr.length; i++){
            if(arr[i] !== arr[i - 1] +1){
                return arr[i];
            }
        }
        return null;
    }
}
//https://www.codewars.com/kata/5b097da6c3323ac067000036/train/javascript
// /Rock Off!
function solve(a, b) {
    let countA = 0;
    let countB = 0;
    for (let i = 0; i <3; i++){
        if(a[i] > b[i]){
            countA++
        }else if(a[i]< b[i]){
            countB++
        }
    }
    return (countA>countB)? `${countA},${countB} Alice made "Kurt" proud!`:
           (countA<countB)?  `${countA},${countB} Bob made "Jeff" proud!`:
         `${countA}, ${countB}: that looks like a "draw"! Rock on!`;
}
//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
//Total amount of points
function points(games) {
    let point = 0;
    for(let elm of games){
        if(elm[0] > elm[2]){
            point += 3;
        }else if(elm[0] === elm[2])
            point +=1;
    }
    return point;
}
//
function points(games) {   let point = 0;   games.forEach(el=> el[0] > el[2] ? point += 3 : (el[0] === el[2]) ? point += 1 : point);   return point; } 

//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
//Sum Arrays
// Sum Numbers
function sum (numbers) {
    let s = 0;
    for( let el of numbers){
        s = s + el;
    }
    return s;

};
console.log('-------------------')
//ATM
//https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript
// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.
//     You are given money in nominal value of n with 1<=n<=1500.
//  Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.
function solve(n) {
   let count = 0;
   if(n%10 !==0) return -1;
   let arr = [500,200,100,50,20,10];
   for(let elm of arr){
       while(n >= elm){ n = n - elm; count++}
   }
   return count;
}
console.log(solve(770));//4
console.log('-------------------')

//Filter the number
//https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
var FilterString = function(value) {
    let str ='';
    for(let elm of value ){
        if(isNaN(elm) === false){
            str = str + elm;
        }
    }
    return parseInt(str);
}
 console.log(FilterString("a1b2c3"))
console.log('-------------------')

//isReallyNaN
//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/solutions/javascript/me/best_practice
// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.
//
// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to
// NaN, and returns false otherwise.
 const isReallyNaN = (val) => {
    return Number.isNaN(val)  ?  true : false;
};
console.log('-------------------')

//Find variable which breaks strict comparison!
 //https://www.codewars.com/kata/560f8d41cf6e1fe5c900002e/train/javascript
// In JavaScript, there is a special case where strict comparison of the same variable
// returns false! Try to find out what must be done to get such result!
function findStrangeValue() {
    return NaN;
}
console.log('-------------------')

//https://www.codewars.com/kata/55a4f9afeffe4231090000d6/train/javascript
// Not all integers can be represented by JavaScript/TypeScript. It has space to to represent
// 53bit signed integers. In this Kata, we've to determine if it is' +
// ' safe to use the integer or not. Make use of the latest ES6 features to find this.
// SafeInteger(9007199254740990) //true
// SafeInteger(-90) //true
// SafeInteger(9007199254740992) //false
function SafeInteger(n) {
    if(Number.isSafeInteger(n)) return true;
    return false;
}


console.log('-------------------------------------')
console.log(Number.isSafeInteger(-156576576576));
console.log(Number.isSafeInteger(676876360));
console.log(Number.isSafeInteger(-1308e+500));
console.log(Number.isSafeInteger(Infinity));

//Return Negative
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//     makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
function makeNegative(num) {
    if(num<0) return num;
    if(num>0) return -num;
    if(num===0) return 0;
}
console.log('-------------------------------------')

//Opposite number
//Very simple, given a number, find its opposite.
// 1: -1
// 14: -14
// -34: 34
function opposite(number) {
    if(number<0) return -number;
    if(number>0) return -number;
}
console.log(opposite(12525220.3325))
console.log('-------------------------------------')

//Invert values
// Given a set of numbers, return the additive inverse of each.
//     Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
function invert(array) {
    let otherArr =[];
    for(let i=0; i<array.length; i++){
        if(array[i]<= 0){
            otherArr.push(array[i] *(-1));
        }
        else if(array[i]>=0){
           otherArr.push(array[i] *(-1));
        }
    }
    return otherArr;
}
console.log(invert([1,2,3,4,5]));
console.log(invert([-4,-5]));
let num = -3; num = -num;
console.log(num);
console.log('-------------------------------------')

//BASIC: Making Six Toast.
// Story:
//     You are going to make toast fast, you think that
// you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.
//     You forgot to count the number of toast you put into there, you don't know if you put exactly
//     six pieces of toast into the toasters.
//
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even
// though you need more or
// less, the number will still be positive, not negative.
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
// six_toast(5) == 1
function sixToast(num) {
    let ps =6;
    return Math.abs(ps - num);
}
console.log('-------------------------------------')

//Closest elevator
// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write
// a function elevator accepting 3 arguments (in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").
//
//     In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
//
//     You can assume that the inputs will always be valid integers between 0-2.
function elevator(left, right, call){
    if(Math.abs(call - left)< Math.abs(call - right)) return 'left';
    else if(Math.abs(call - left)> Math.abs(call - right)) return 'right';
    else if(Math.abs(call - left)=== Math.abs(call - left)) return 'right'
}
console.log(elevator(0, 1, 0));
console.log(elevator(0, 1, 1));


console.log('-------------------------------------')
let num1 = -(Math.abs(-10))
console.log(num1)

//Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//     For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    let result=[];
    let separatedDigits = num.toString().split('');
    for(let elm of separatedDigits){
        result.push(Math.pow(elm,2));
    }
    return +result.join(''); //return as number not as string
}
console.log(squareDigits(9119));
console.log(squareDigits(123));

//Squares sequence
// Complete the function that returns an array of length n, starting with the given number x and the squares
// of the previous number. If n is negative or zero, return an empty array/list.
// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]
function squares(x, n) {
    let res =[x];
    if (n <= 0) {return [];}
    for(let i=1; i<n; i++){
        x = Math.pow(x,2);
        res.push(x);
    }
    return res;
}
console.log(squares(2,5));
console.log(squares(3,3));
//ONe more solution to this task
//const squares = (x, n) => Array.from({ length: n }, (_, index) => x ** (2 ** index))

console.log('---------------------------')
//N-th Power
// This kata is from check py.checkio.org
// You are given an array with positive numbers and a number N. You should find
// the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
//
// Let's look at a few examples:
//
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
   for(let i=0; i<array.length; i++){
       if(array.length>n){
           return Math.pow(array[n],n)
       }
   }
   return -1;
}
console.log(index([1, 2, 3, 4],2)); //9
console.log(index([1, 2],3)); //-1

//To square(root) or not to square(root)
// #To square(root) or not to square(root)
//
// Write a method, that will get an integer array as parameter and will process every number from this array.
//     Return a new array with processing every number of the input-array like this:
//
// If the number has an integer square root, take this, otherwise square the number.
//
//     [4,3,9,7,2,1] -> [2,9,3,49,4,1]
//The input array will always contain only positive numbers and will never be empty or null.
    function squareOrSquareRoot(array) {
    let arr = [];
    for (let elm of array){
        //check if its whole number
        if (Math.sqrt(elm) % 1 === 0){
            arr.push(Math.sqrt(elm));
        } else arr.push(Math.pow(elm, 2));
    }
    return arr;
}

//Alan Partridge II - Apple Turnover
//As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:
// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'.
// According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore
// the science for now.
//
// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else,
// return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
//
// X will be either a number or a string. Both are valid.
function apple(x){
    if(x**2 > 1000){
        return 'It\'s hotter than the sun!!'
    }

    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
}
console.log(apple(3000));

console.log(Math.pow(9, 1/2 ) );
console.log(Math.pow(2, 3 ) );


//CodeWars: You're a square!
// Given an integral number, determine if it's a square number:
//
// In mathematics, a square number or perfect square is an integer that is the square of an integer;
// in other words, it is the product of some integer with itself.
//
//     The tests will always use some integral number, so don't worry about that in dynamic typed languages.
//
// Examples
// -1  =>  false
// 0  =>  true
// 3  =>  false
// 4  =>  true
// 25  =>  true
// 26  =>  false
var isSquare = function(n){
  return Math.sqrt(n)%1===0 ? true: false ;
}
console.log('-----------------------')
// //Find the next perfect square!
// You might know some pretty large perfect squares. But what about the NEXT one?
//
//     Complete the findNextSquare method that finds the next integral perfect square after
//
// the one passed as a parameter. Recall that an integral perfect square is an integer n such
// that sqrt(n) is also an integer.
//findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect
//If the parameter is itself not a perfect square then -1 should be returned.
// You may assume the parameter is positive.
function findNextSquare(sq) {
    if(sq != Math.floor(Math.sqrt(sq)) * Math.floor(Math.sqrt(sq))){
        return -1;
    }
    let res = Math.sqrt(sq);
    res++
    return res*res;
}
console.log(findNextSquare(121));

//other solutions for same task
function findNextSquare1(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
console.log('---------------------')
// //Training JS #34: methods of Math---pow() sqrt() and cbrt()
// In this lesson we learn three methods of Math: pow() sqrt() and cbrt(). Their usage is very simple: sqrt() returns the square root of a number; cbrt() returns the cube root of a number; pow() returns the base to the exponent power.
//
//     Their definitions and detailed information:
//
//     Math.pow()
// Math.sqrt()
// Math.cbrt()
// Task
// Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube. If we cut the cube into n block. please determine whether the length of the cube is an integer. return true or false.
//
//     For exmaple:
//
//     volume=27, it can be divided into 27 blocks, each small cube side length is 1
function cutCube(volume,n){

    return Math.cbrt(volume / n) % 1 === 0 && Math.cbrt(n) % 1 === 0 ? true : false;
}
console.log(cutCube(27,27))
console.log('------------------------')

//Beginner Series #4 Cockroach
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per
// hour and returns it in cm per second, rounded down to the integer (= floored).
//
//     For example:
//
//     cockroachSpeed(1.08) == 30
function cockroachSpeed(s) {
    return Math.floor(s*100000/3600);
}
console.log(cockroachSpeed(1.08))
console.log('------------------------')

//Price of Mangoes
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity
// and price (per mango), calculate the total cost of the mangoes.
//
// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
//     mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

function mango(quantity, price){
    let q = Math.floor(quantity/3);
    return (quantity -q) * price;
}
console.log(mango(3, 3));

console.log('------------------------')

//Holiday VIII - Duty Free
// The purpose of this kata is to work out just how many bottles of duty free whiskey
// you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
//
//     You will be given the high street price (normPrice), the duty free discount (discount)
//     and the cost of the holiday.
//
//     For example, if a bottle cost £10 normally and the discount in duty free was 10%,
//     you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
//
// All inputs will be integers. Please return an integer. Round down.
function dutyFree(normPrice, discount, hol){
let norm = normPrice * discount/100;
    return Math.floor(hol/norm);
}
console.log(dutyFree(12, 50, 1000));


console.log('------------------------')

//All Star Code Challenge #22
// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #22
//
// Create a function called toTime() that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
//
//     Any remaining seconds left over are ignored.
//
//     Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"
// toTime(3600); // => '1 hour(s) and 0 minute(s)'
// toTime(3601); // => '1 hour(s) and 0 minute(s)'
// toTime(3500); // => '0 hour(s) and 58 minute(s)'
// toTime(323500); // => '89 hour(s) and 51 minute(s)'

function toTime(seconds) {
    let hours =0;
    while(seconds>=3600){
        hours++
        seconds = seconds-3600;
    }
    let minutes = Math.floor(seconds/60);
    return `${hours} hour(s) and ${minutes} minute(s)`
}
console.log(toTime(3600))
console.log(toTime(3500))
console.log('------------------------')



//CodeWars: Improving Math.round(x)
//https://www.codewars.com/kata/56be025f9347a066c7000e4f/solutions/javascript
// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.
//
//     You may find the following Math methods useful:
//
//     Math.round(x) (of course)
// Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)
Math.roundTo = function (number, precision) {
    let a = number.toFixed(precision)
    return +a;

}
console.log(Math.roundTo(3.1415926535, 4));
console.log('------------------------')

/*
Two tortoises named A and B must run a race. A starts with an average speed of
720 feet per hour. Young B knows she runs faster than A, and furthermore has not
finished her cabbage.
When she starts, at last, she can see that A has a 70 feet lead but B's speed
is 850 feet per hour. How long will it take B to catch A?
More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed,
integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
The result will be an array [hour, min, sec] which is the time needed in hours,
minutes and seconds (round down to the nearest second) or a string in some
languages.
If v1 >= v2 then return nil, nothing, null or None
Examples:
race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
** Note:
** Hints for people who don't know how to convert to hours, minutes, seconds:
Tortoises don't care about fractions of seconds
Think of calculation by hand using only integers
(in your code use or simulate integer division)
or Google: "convert decimal time to hours minutes seconds"
*/
function race(v1, v2, g) {
    if(v1 >= v2) {return null;}
    let dtTme = Math.floor(g / (v2 - v1) * 3600);
    let h = Math.floor(dtTme / 3600);
    let m = Math.floor((dtTme - h * 3600) / 60); // or (dtTme % 3600) / 60
    let s = Math.floor(dtTme - h * 3600 - m * 60);// or dtTme % 60
    return [h, m, s];
}
console.log(race(720, 850, 72));

console.log('------------------------')

//Formatting decimal places #1
//Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
//
// Don't round the numbers! Just cut them after two decimal places!
// Right examples:
//     32.8493 is 32.84
// 14.3286 is 14.32
//
// Incorrect examples (e.g. if you round the numbers):
// 32.8493 is 32.85
// 14.3286 is 14.33

function twoDecimalPlaces(number) {
    return Math.trunc(number * 100) / 100;
}
console.log(twoDecimalPlaces(10.1289767789));
console.log('------------------------')

/*
//The highest profit wins!
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

    Task
Write a function that returns both the minimum and maximum number of the given list/array.

    Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1] */

function minMax(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min,max];
}
console.log('------------------------')

/*
//Sum of Minimums!
Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

    For Example:

    [
        [1, 2, 3, 4, 5],       // minimum value of row is 1
        [5, 6, 7, 8, 9],       // minimum value of row is 5
        [20, 21, 34, 56, 100]  // minimum value of row is 20
    ]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

Note: You will be always given non-empty array containing Positive values.
*/
function sumOfMinimums(arr) {
    let sum=0;
    for(let elm of arr){
        sum = sum + (Math.min(...elm))
    }
    return sum;
}
console.log(sumOfMinimums([
    [1, 2, 3, 4, 5],       // minimum value of row is 1
    [5, 6, 7, 8, 9],       // minimum value of row is 5
    [20, 21, 34, 56, 100]  // minimum value of row is 20
]));
//or const sumOfMinimums = arr => arr.reduce((a, v) => a + Math.min(...v), 0);


console.log('------------------------')

/*//Lario and Muigi Pipe Problem
#Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
    The pipes connecting your level's stages together need to be fixed before you
    recieve any more complaints. Each pipe should be connecting, since the levels
     ascend, you can assume every number in the sequence after the first index will be
      greater than the previous and that there will be no duplicates.

#Task Given the a list of numbers, return the list so that the values increment by
 1 for each index up to the maximum value.

    #Example:

Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8*/

function pipeFix(numbers){
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let res =[];
    for(let i=min; i<=max; i++){
        res.push(i);
    }
    return res;
}

console.log('------------------------')

//Find min and max
//Implement a function that returns the minimal and the maximal value of a list (in this order).
function getMinMax(arr){
   return [Math.min(...arr), Math.max(...arr)];
};

console.log('-----------------------')
/*Expressions Matter
Given three integers a ,b ,c, return the largest number obtained after inserting the following
operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
Consider an Example :
    With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

    1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.*/
function expressionMatter(a, b, c) {
        return Math.max(a*(b+c), (a*b*c), (a+b+c), (a+b)*c);
}
console.log(expressionMatter(1, 2, 3));
console.log('-----------------------')

/*
A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
Our friend Pac has finally decided to pursue a career in the coding industry.
    He is a newbie, he needs to learn properly.
    Therefore, Pac wants to apply for the worldwide famous -and very demanding-
'C0d3r 1ns1d3' Academy for beginners.
                               In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
    He has been sent an email from the Academy with the following instructions,
    Dear Pac,
    This is the first exercise. Find out what's wrong and fix the code.
You have 15 minutes to send a solution.
    Good Luck.
    function {
    var : Math.random()
    if (career <= 0.32) {
        return = FrontEnd Developer
    else if (career <= 0.65)
            return : BackEnd Developer,
    } else {
        return 'Full-Stack Developer'
    }
    yourFutureCareer();
*/
function yourFutureCareer() {
    var career = Math.random();
    if (career <= 0.32) {
        return 'FrontEnd Developer';
    } else if (career <= 0.65) {
        return 'BackEnd Developer';
    } else {
        return 'Full-Stack Developer';
    }
}
yourFutureCareer();
console.log('--------------------')

/*CodeWars: Binary Addition
Implement a function that adds two numbers together and returns their sum in binary.
 The conversion can be done before, or after the addition.

    The binary number returned should be a string.*/
function addBinary(a,b) {
    return (a+b).toString(2);
}
//OR const addBinary = (a, b) => (a + b).toString(2);

console.log('--------------------')

/*
CodeWars:Convert to Binary
Task Overview
Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

to_binary(1)  /!* should return 1 *!/
to_binary(5)  /!* should return 101 *!/
to_binary(11) /!* should return 1011 *!/*/
function toBinary(n){
    return +n.toString(2);
}
//OR let toBinary = n => +n.toString(2)

console.log('--------------------')

/*
Localize The Barycenter of a Triangle
The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides.
 The three medians of a triangle intersect at the same point, called the barycenter or the centroid.
 Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its
  barycenter or centroid.

    The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices
    A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

This is how our asked function should work: the result of the coordinates should be expressed up to four
 decimals, (rounded result).

You know that the coordinates of the barycenter are given by the following formulas.

    source: imgur.com

For additional information about this important point of a triangle see at: (https://en.wikipedia.org/wiki/Centroid)

                                                                                 Let's see some cases:

barTriang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]

barTriang([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]
The given points form a real or a degenerate triangle but in each case the above formulas can be used.
*/
function barTriang(p1, p2, p3){
    return [+(((p1[0] +p2[0] + p3[0])/3).toFixed(4)),(+((p1[1] +p2[1] +p3[1])/3).toFixed(4))];
}

console.log('--------------------')

/*
Calculate Price Excluding VAT
Write a function that calculates the original product price, without VAT.

    Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

    VAT is always 15% for the purposes of this Kata.
    Round the result to 2 decimal places.
    If null value given then return -1*/
//return price without vat
function excludingVatPrice(price){
    if(price===null) return -1;
    return +(price/(1.15)).toFixed(2);
}
console.log((99.99).toFixed());
console.log('--------------------')


/*
Parse nice int from char problem
Ask a small girl - "How old are you?". She always says strange things... Lets help her!

    For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

*/
function getAge(inputString){
    return Number.parseInt(inputString);
}
console.log('--------------------')

/*CodeWars: Hex to Decimal
Complete the function which converts hex number (given as a string) to a decimal number.*/
    function hexToDec(hexString){
        return Number.parseInt(hexString, 16);
}
console.log('--------------------')

/*
Bin to Decimal
Complete the function which converts a binary number (given as a string) to a decimal number.*/
function binToDec(bin){
    return Number.parseInt(bin ,2);
}
console.log('--------------------')

/*
Parse float
Write function parseF which takes an input and returns a number or null if
    conversion is not possible. The input can be one of many different types so be aware.*/
function parseF(s) {
    return (Number.isNaN(parseFloat(s)) ? null : parseFloat(s));
}
console.log('--------------------')

/*Training JS #4: Basic data types--Array
Task
I've written five function, each function receives a parameter: arr(an array), you should coding something with arr.

1. getLength(arr)    should return length of arr
2. getFirst(arr)     should return the first element of arr
3. getLast(arr)      should return the last element of arr
4. pushElement(arr)  should push an element to arr, and then return arr
5. popElement(arr)   should pop an element from arr, and then return arr*/
function getLength(arr){
    //return length of arr
    return arr.length;
}
function getFirst(arr){
    //return the first element of arr
    return arr[0];
}
function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1];
}
function pushElement(arr){
    var el=1;
    arr.push(el);

    return arr;
}
function popElement(arr){
   arr.pop()

    return arr;
}

console.log('--------------------')
/*
Series of integers from m to n
Task
Write a function that accepts two arguments and generates a sequence containing
 the integers from the first argument to the second inclusive.
    Input
Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.
    Example
generateIntegers(2, 5) // --> [2, 3, 4, 5]*/
function generateIntegers(m, n) {
    let res =[];
    for(let i=m;i<=n; i++){
        res.push(i);
    }
    return res;
}
console.log(generateIntegers(2, 5));

/*
Coefficients of the Quadratic Equation
In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

Equation will be the form of ax**2 + bx + c = 0

Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

    Since there are infinitely many solutions to this problem, we fix a = 1.

Remember, the roots can be written like (x-x1) * (x-x2) = 0

Example
quadratic(1,2) = (1, -3, 2)
This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0

Example 2
quadratic(0,1) = (1, -1, 0)
This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0

Notes
Inputs will be integers.
    When x1 == x2, this means the root has the multiplicity of two*/
function quadratic(x1, x2){
    let a = 1;
    let b= a * -x2 + a * -x1;
    let c = -x1 * -x2;
    return [1, b, c];
}

/*

What is type of variable? https://www.codewars.com/kata/57293671c98f77e84b000065/train/javascript
    Create a function to return true type of variable, i.e.

type([]) == 'array'
type({}) == 'object'
type('') == 'string'
type(NaN) == 'number'*/
function type(value) {
    if ({}.toString.call(value)==="[object Array]"){return 'array'}
    if ({}.toString.call(value)==="[object Object]"){return 'object'}
    if ({}.toString.call(value)==="[object String]"){return 'string'}
    if ({}.toString.call(value)==="[object Date]"){return 'date'};
    if ({}.toString.call(value)==="[object Number]"){return 'number'};
    if ({}.toString.call(value)==="[object Undefined]"){return 'undefined'};
    if (value === null) {return 'null'}
}
//type = (value) => value === undefined ? 'undefined' : value === null ? 'null' : Array.isArray( value ) ? 'array' : value.getDate != undefined ? 'date' : typeof ( value );


/*
Is every value in the array an array?
    is every value in the array an array?
    This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
Examples:

    [[1],[2]] => true
    ['1','2'] => false
    [{1:1},{2:2}] => false*/
//const arrCheck = value => Array.isArray(value)? true: false;
const arrCheck = value =>{
    for(let el of value)
    {
        if(!Array.isArray(el)) return false;
    }
    return true;
}
console.log('-----------------------------')
/*
Counting sheep...
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the
number of sheep present in the array (true means present).

For example,

    [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]
        The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined*/
function countSheeps(arrayOfSheep) {
    let count =0;
    for(let elm of arrayOfSheep){
        if(elm === true){
            count++
        }
    }
    return count;
}
console.log('-----------------------------')


/*
Clean up after your dog
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

    You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

    If you do, return 'Clean', else return 'Cr@p'.

    Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

    For example:

    x=
        [[_,_,_,_,_,_]
            [_,_,_,_,@,_]
            [@,_,_,_,_,_]]

bags = 2, cap = 2

return --> 'Clean'*/
function crap(x, bags, cap){
    let crapCount = 0;
    let totalCap = bags * cap;
    for(let i=0; i<x.length; i++){
        for(let j=0; j<x[i].length; j++){
            if(x[i][j] === '@') crapCount++;
            if(x[i][j] === 'D') return 'Dog!!';
        }
    }
    return crapCount > totalCap ? 'Cr@p': 'Clean';
}
console.log('-----------------------------')

/*
Simple consecutive pairs
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3.
--the last digit has no pair, so we ignore.
*/

function pairs(ar) {
    let count = 0;
    for (let i = 0; i < ar.length; i += 2) {
        if (ar[i] + 1 === ar[i + 1] || ar[i] === ar[i + 1] + 1) {
            count++
        }
    }
    return count;
};
//OR
function pairs1(array, count = 0) {
  for (let i = 0; i < array.length; i += 2)
    if (Math.abs(array[i] - array[i + 1]) === 1)
      count += 1;
  return count;
}
console.log(pairs([1,2,5,8,-4,-3,7,6,5]));
console.log('-----------------------------')
/*
Rock Off!
    Alice and Bob have participated to a Rock Off with their bands. A jury of true metalheads rates the two challenges,
    awarding points to the bands on a scale from 1 to 50 for three categories: Song Heaviness, Originality, and Members'' +
' outfits.


For each one of these 3 categories they are going to be awarded one point, should they get a better judgement from the
jury. No point is awarded in case of an equal vote.

    You are going to receive two arrays, containing first the score of Alice's band and then those of Bob's. Your task
is to find their total score by comparing them in a single line.

    Example:

Alice's band plays a Nirvana inspired grunge and has been rated 20 for Heaviness, 32 for Originality and only 18 for' +
' Outfits. Bob listens to Slayer and has gotten a good 48 for Heaviness, 25 for Originality and a rather honest 40 for ' +
'Outfits.

The total score should be followed by a colon : and by one of the following quotes: if Alice's band wins: Alice made ' +
'"Kurt" proud! if Bob's band wins: Bob made "Jeff" proud! if they end up with a draw: that looks like a "draw"! Rock on!

    The solution to the example above should therefore appear like '1, 2: Bob made "Jeff" proud!'.*/
// function solve(a, b) {
//     let countA = 0;
//     let countB = 0;
//     for (let i = 0; i < 3; i++){
//         if (a[i] > b[i]){
//             countA++;
//         } else if (a[i] < b[i]){
//             countB++
//         }
//     }
//     return (countA > countB) ? `${countA}, ${countB}: Alice made "Kurt" proud!`: (countB > countA) ? `${countA}, ${countB}: Bob made "Jeff" proud!` : `${countA}, ${countB}: that looks like a "draw"! Rock on!`;
// }

console.log('-----------------------')
/*
Total amount of points
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are
 recorded in the collection.

    For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for
 counting points for each match:

    if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

    there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4*/
function points(games) {
    let point = 0;
    for (let elm of games){
        if (elm[0] > elm[2]){
            point += 3;
        } else if (elm[0] === elm[2]){
            point += 1;
        }
    }
    return point;
}

console.log('----------------')
/*
Plus - minus - plus - plus - ... - Count
Count how often sign changes in array.

    result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];


| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

 */

function catchSignChange(array) {
    let count = 0;
    for(let i=0; i<array.length; i++){
        if((array[i]<0 && array[i+1]>=0 )||(array[i]>=0 && array[i+1]<0)){
            count++
        }
    }
    return count;
}
console.log(catchSignChange([-47,84,-30,-11,-5,74,77]));