//Loops in JavaScript

// let newArray = [1, 2, 3, 4, 5, 6, 7, 8];
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
i = 10
while (i-- > 6) {
    console.log(`whoo`);
}
