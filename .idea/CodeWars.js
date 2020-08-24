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






