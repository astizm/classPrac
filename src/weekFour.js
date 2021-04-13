/*Week Four practise - data types
17/03/2021
Asti Maera*/
let country = 'Oz';
let city = 'Emerald City';
let postCode = 2310;
let isIsland = false;
let language;
const address = function () {
    return city
}
console.log(typeof address) //function
console.log(typeof isIsland); //boolean
console.log(typeof language); //undefined
language = 'Munchkin';
console.log(typeof language); //string
const boo = {
    zombie: 'scary',
    ghost: 'scarier',
    ghoul: 'ghastly'
};
console.log(typeof boo); //object
let pop = [1, 2, 4, 55];
console.log(typeof pop); //object
console.log(boo.zombie = 'run away'); //run away
postCode++;
console.log(postCode); //2311
console.log(`${city}, ${country} ${postCode}`);
postCode++
if (postCode == 2310) {
    city = 'Emerald City'
    console.log(city)
} else {
    let city = 'Munchkinland'
    console.log(city)
};
console.log(address())
const a = {
    city: 'Nelson'
};
const b = a
console.log(b == a);
