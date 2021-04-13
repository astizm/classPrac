//Loops in JavaScript

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (var i = 0; i <= newArray.length; i++) {
//     console.log(i);
// };
//For If statement
let string = 'a0eiufb192e*'
let match = 'a0eiufb192e*'
count = 0
for (i = 0; i < string.length; i++) {
    if (match = string.charAt(i)) {
        count++;
    }
    //console.log(count) - //show whole loop
}
//console.log(count); //Show result of complete loop

//Nested for loop
for (let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++) {
        //  console.log(x, y);
    }
for (var i = 0; i < 5; i++) {
    //if (i == 1 || i == 3) continue;
    if (i == 3)
        break;
    //    console.log(i)
}
//For..of
let a = 'hello';
for (let value of a) {
    console.log(value.toUpperCase());
}
let b = [1, 3, 5, 7, 9];
for (let value of b) {
    console.log(value);
}
let g = 10
x = 10
while (x-- > 6) {
    if (x == 6)
        continue;
        x += g
}     
console.log(x);
// ---------------
//Session 2 24/03 Switch statement

const month = 'March';
switch (month) {
    // case 'March':
    //     console.log(`What year is it?`);
    //     break;
    case 'April' || 'March':
        console.log(`It's April, holidays!`);
        break;
    case 'May':
        console.log(`Back to class.`);
        break;
    case 'June':
        console.log(`Dyls birthday :)`);
        break;
    default:
        console.log(`What?`);
        break;
}
// loopA:
// for (i = 0; i < 10; i++) {
//     loopB:
//     for (y = 0; y < arr.length; y++) {
//         console.log(y)
//     } if (y === i) {
//         break loopA;
//     }
// };
const object = { a: 5, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


//TODO
/* Refactor switch statement for person to find the grad keyword for :
1-A = 100;
2-B = 80;
3-C = 70;
4-F = 40;
*/
const grade = new String
    (``);
switch (grade) {
    case 'F':
        console.log(`F = 40`);
        break;
    case 'C':
        console.log(`C = 70`);
        break;
    case `B`:
        console.log(`B = 80`);
        break;
    case `A`:
        console.log(`A = 100`);
        break;
    default:
        console.log(`Enter score:`);
        break;
};
//multiple cases with the same output
const foo = -2;
switch (foo) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log(`I like this number`);
        break;
    case -1:
    case -2:
        console.log(`I love this number`);
        break;
    default:
        console.log(`I don't like this number.`);
        break;
};
//Chained expressions
const fee = 1;
let output = '';
switch(fee){
    case 0:
        output += `So `;
    case 1:
        output += `how `;
        output += `old `;
    case 2:
        output += `are `;
    case 3:
        output += `you`;
    case 4:
        output += `?`;
        console.log(output);
        break;
    case 5:
        output += `!`;
        console.log(output);
        break;
    default:
        console.log(`Pick a number from one to five!`);
        break;
}
