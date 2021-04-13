// practical labs week eight 14/04 - array stuff
//author : asti 

// function add(x) {
//     const arr = []
//   let odd = function oddFind() {
//         for (var i = 0; i <= x; i++) {
//             console.log(i)
//             if (i % 2 !== 0) {
//                 arr.push(i);
//                 return arr
//             } return odd
//         }
//     }//add()
// }
// console.log(add(5))


// function likeScore(x) {
//     let obj = [Object(x)]

//     console.log((obj))


// let moveArr = arr => [arr.pop(), ...arr];
// console.log(moveArr([3, 5, 1]));

// function nested(arr) {
//     let newArr = [[], []];
//     for (i = 0; i < arr.length; i++) {
//         if (parseInt(arr[i]) % 2 === 0) {
//             newArr[0].push(parseInt(arr[i]));
//         } else {
//             newArr[1].push(parseInt(arr[i]));
//         }
//     } return newArr;
// };
// console.log(nested(['3', '23', '4', '2', '8']));

// function nestArr(arr) {
//     let even = arr.map(Number).filter(x => x % 2 === 0);
//     let odd = arr.map(Number).filter(x => x % 2 !== 0);
//     return [even, odd];
// };
// console.log(nestArr(['3', '23', '4', '2', '8']))
// const nestedArray = arr => arr.reduce((a, c) => (a[c % 2].push(+c), a), [[], []]);
// console.log(nestedArray(['3', '23', '4', '2', '8']))

function spaceString(str) {
    let arr = Array.from(str).join('*');
    return arr;
};
console.log(spaceString('Hehehe'));