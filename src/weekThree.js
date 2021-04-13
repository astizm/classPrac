/*JavaScript Basics 
In class practice : 09/03/2021
Author : Asti
TODO: Javascript Variables 
*/
//Declare the variables
var greeting = "Hello World"
const blah = "Asti"
let day = "Tuesday"
//String it together
let string = `${greeting}, ${blah} is @ SDV every ${day}`
//Print it
console.log(string)
//Reassign day
day = "Wednesday"
console.log(day)
//String is fixed to previous input
string = `${greeting}, ${blah} is @ SDV every ${day}`
//Reprint string with edited variable
console.log(string)

//Concat
let hideho = "Hi, " + blah