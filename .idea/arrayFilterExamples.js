const array = ['a', 'b', 'c', 'd', 'e'];
const oddIndex = array.filter((el, i) => i % 2); // где el - сокращенное от element, i - от index
console.log(oddIndex); // ["b", "d"]
const evenIndex = array.filter((el, i) => i % 2===0); // где el - сокращенное от element, i - от index
console.log(evenIndex); //[ 'a', 'c', 'e' ]

//Array find method examples
const trees = [
    "birch",
    "maple",
    "oak",
    "poplar"
];
const result1 = trees.find(tree => tree.startsWith("m"));// "maple"
console.log(result1);
console.log('-------------------------');

const trees1 = [
    { name: "birch", count: 4 },
    { name: "maple", count: 5 },
    { name: "oak", count: 2 }
];

const result2 = trees1.find(tree1 => tree1.name === "oak");
console.log(result2);// { name: "oak", count, 2 }

const deciduous = [
    { name: "birch", count: 4 },
    { name: "maple", count: 5 },
    { name: "oak", count: 2 }
];

const evergreens = [
    { name: "cedar", count: 2 },
    { name: "fir", count: 6 },
    { name: "pine", count: 3 }
];

// our testing function
const hasFiveOrMore = el => el.count >= 5;

const decResult = deciduous.find(hasFiveOrMore);
// { name: "maple", count: 5 }

const evgResult = evergreens.find(hasFiveOrMore);
// { name: "fir", count: 6 }
const evergreens2 = [
    { name: "cedar", count: 2 },
    { name: "fir", count: 6 },
    { name: "pine", count: 3 }
];

// suppose we need to skip the first element
const result = evergreens2.find((tree, i) => {
    if (tree.count > 1 && i !== 0) return true;
});

// { name: "fir", count: 6 }
console.log('-------------------------');

//Get item in array
const items = ['nail', 'hammer', 'bolt'];

// find array item with index of 1
const atIndex = items.find(function(element, index){
    return index === 1
})

// display array item found
console.log(atIndex);
console.log('-------------------------');


const arr4 = [-1, 7, 7, 7, -1, 0, 8, 3, 4];
const allElements = arr4.filter((el, i) => i === arr4.indexOf(el));
const duplicates = arr4.filter(el => arr4.indexOf(el) !== arr4.lastIndexOf(el));
const uniqueNotIncludeDuplicates = arr4.filter(el => arr4.indexOf(el) === arr4.lastIndexOf(el));
const duplicatesOnlyOnce = arr4.filter((el, i) => i !== arr4.indexOf(el) && i === arr4.lastIndexOf(el));

console.log('All elements shown with duplicates but not repeting',allElements); // [ -1, 7, 0, 8, 3, 4 ]
console.log('All duplicates',duplicates); // [ -1, 7, 7, 7, -1 ]
console.log('Unique no include duplicates', uniqueNotIncludeDuplicates)
console.log('Duplicates without repeating',duplicatesOnlyOnce);//[ 7, -1 ]



