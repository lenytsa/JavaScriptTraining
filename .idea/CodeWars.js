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
//Are You Playing Banjo?
//https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
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

