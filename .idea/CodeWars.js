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
//const inputs =    [0,    4,    12,    222,  5,     45,    4554,  1234,  88,    24,   400000220];
//  const expecteds = [true, true, false, true, false, false, false, false, false, true, true     ];

