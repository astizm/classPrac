//Refactoring
// function twoArgies(a, b) {
//     let arr = [a, b];
//     return arr;
// };
//standard es6
// const twoArgs = (a, b) => [a, b];
// //ES6 w spread operator
// const spreadArgu = (...x) => x;

// console.log(twoArgs(1, 2));
// console.log(spreadArgu(2, 4, 5));

// function oddOrEven(arr) {
//     let count = 0;
//     arr.forEach(i => count += i);
//     return count%2 === 0 ? 'even' : 'odd';
// };
// oddOrEven(3)

// function oddEven(arr) {
//     let count = 0
//     for (i = 0; i < arr.length; i++) {
//         count += arr[i];
//     }
//     if (count%2 === 0) {
//         return 'even';
//     } else { return 'odd' };
// };
// console.log(oddEven([98]))
// let even = [2, 3, 1, 6]
// const oddEven = (arr) => arr.reduce((a,b) => a + b, 0)%2 === 0? 'even': 'odd';
// console.log(oddEven(even));
// function stringToNum(x){
// let arr = []
// for (i = 0; i < arr.length; i++){
//     arr.push(Number(x))
// }
// return arr
// }
// function stringToNum(arr) {
//     newArr = []
//     arr.forEach(x) => {
//         newArr.push(Number(x))
//     })
//     return newArr;
// };
// console.log(stringToNum(3));
// const stringToNum = (arr) => arr.map((x) => Number(x));
// console.log(stringToNum(['12', 4 + '69', 9+1, "2" + '3', ]))

// function arrToString(arr){
//     return arr.join(', ');
// }
// console.log(arrToString([1 , 2, 3, 4]))
// const arToString = (arr) => arr.join(', ');
// console.log(arToString([2, 3, 51]))

function arrayOb(obj) {
    let arr = [];
    for (let i in obj) {
        arr.push(i, obj[i])
    } return arr
}
console.log(arrayOb({
    green : 'grey',
    fun : 'times'
}));

const obToArray = obj => Object.entries(obj)
console.log(obToArray({
    green : 'grey',
    fun : 'times'
}));
const revStr = (str) => str.length < 2 ? str : revStr(str.slice(1, str.length)) + str[0]

const revString = (str) => str.split('').reverse().join('')

console.log(revString('hyello'))
console.log(revStr('hello'));