/*Calculate average
Write function avg which calculates average of numbers in given list.
*/
function find_average(array) {
    let sum = 0;
    let average = 0;
    for (let el of array) {
        sum +=el;
        average = sum / array.length;
    }
    return average;
}
console.log(find_average([1,1,1]));
