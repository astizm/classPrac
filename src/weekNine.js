/* 05/05/21 Practice with arrays
Create a function that concatenates separate n array entries to a single ordered array where n is variable
e.g. ([1,2,3][4,5][6,7,8,9]) -> [1,2,3,4,5,6,7,8,9]
*/

function firstFunc(...args) { // spread syntax to convert arguments to a real Array:
    let result = [];
    for (i = 0; i < arguments; i++) {
        result = result.concat(arguments[i]);

    } return result;
};
//console.log(esSix(1,2 [3,4])) //undefined

// fES6
function esSix(...args) {
    return [].concat(...args);
};

//Function that takes tow numbers as arguments (num, length)
//(7,5) -> [7, 14, 21, 28, 35]

function newFunc(num, length) {
    let result = [];
    for (var i = 1; i <= length; i++) {
        result.push(num * i);
    } return result;
}
//console.log(newFunc(7, 5))
function esSixTwo(num, length) {
    return [...Array(length).keys()].map((e, i) => (e + 1) * num);
}
//Create a function that sorts array string entries in ascending or descending order.

function ascDesFunc(arr, str) {
    switch (str) {
        case 'asc':
            return arr.sort((a, b) => a - b)
            break;
        case 'des':
            return arr.sort((a, b) => b - a)
            break;
            return arr;
    }
};

function ascendingDes(arr, str) {
    str === 'asc' ? arr.sort((a, b) => a - b) :
        str === 'des' ? arr.sort((a, b) => b - a) :
            arr;
};
//Create a function that returns true if all parameters are truthy, and otherwise false
//(5 , 4, 3, 2, 1, 0) -> false
// (true, true, true) -> true

const checkTrueOrFalse = (...args) => args.every(Boolean);

//create a function that takes three arguments and returns a subarray of the specified values
// (3,2,3) -> [[3,3],[3,3],[3,3]]

function newMatrix(x, y, z) {
    return Array(y).fill(Array(x).fill(z))
}
//console.log(newMatrix(1, 2, 34))

//Create a function that takes an array of names and returns an array where only the first letter of each name is capitilised.
//(['samuel','mabelle', 'leticia', 'meredith']) -> (['Samuel', 'Mabelle', 'Leticia', 'Meredith'])

function properNoun(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().substring(1)
    } return arr
}
//console.log(properNoun(['samuel','mabelle', 'leticia', 'meredith']))

//Create a function that takes the input and outputs an array of each entry and removes duplicate entries 
//(AABBCCDDEFFA) -> ["A","B", "C", "D", "E", "F", "A"]
function removeDupe(x) {
    return Array.from(x).filter((e, i, a) => e !== a[i - 1]);
    //Using Array.from to create an array from the input
    //filter through the input elements to ensure each consecutive element is different from the last
    //If the element is not matching the previous, return the element
}
//console.log(removeDupe([1,1,2,3,4,4,2,2]));

let removeES5 = function (x) {
    let newArray = []; //Create an empty array
    for (i = 0; i < x.length; i++) { //loop through each element of x
        if (x[i] !== x[i + 1]) { //If the x element is not equal (the same as) to the next
            newArray.push(x[i]); //push that element to the array
        }
    } return newArray; //return filled array
};
//console.log(removeES5('AABBCCDDEFFA'))
//console.log(removeES5([21, 1, 23,23, 23]))

//Create a function that compares values from two arrays and returns whether they exist in each other true/false

