//#TODO
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
