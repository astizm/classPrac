//
function firstFunction() {
    console.log("Hello from firstFunction");
    thirdFunction(); //called after output from first
}
function secondFunction() {
    firstFunction(); //first so called first and executed before output from second
    console.log("The end from secondFunction");
}
function thirdFunction() {
    console.log(`what's up from the middle`);
};
secondFunction(); //Call second to call first

myArray = [];
myArray.push('first');
myArray.push('second');
myArray.push('third');
myArray.push('fourth');
myArray.shift();
//myArray//['second', 'third', 'fourth']

function bottleCapper(a, b) {
    return a + b;
}

console.log(bottleCapper(bottleCapper('green bottle', 'white cap')));

// function sum(a, b, c, d) {
//     return a + b + c + d;
// };
const sum = (a,b,c,d) => a + b + c + d;
