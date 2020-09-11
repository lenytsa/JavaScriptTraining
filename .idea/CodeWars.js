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