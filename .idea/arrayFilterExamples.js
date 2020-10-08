const array = ['a', 'b', 'c', 'd', 'e'];
const oddIndex = array.filter((el, i) => i % 2); // где el - сокращенное от element, i - от index
console.log(oddIndex); // ["b", "d"]
const evenIndex = array.filter((el, i) => i % 2===0); // где el - сокращенное от element, i - от index
console.log(evenIndex); //[ 'a', 'c', 'e' ]