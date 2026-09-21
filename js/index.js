console.log("Hello World!");

const hp = 50
const attack = 75
const defense = 70
const dateTime = new Date();

let userGreet = prompt("Hello there, what is your name?");

console.log(dateTime)

console.log("Hello", userGreet, ", Piplup's base stats are", hp, attack, defense);

const userCalcOne = prompt("Enter a base stat!");
const userCalcTwo = prompt("Enter another base stat!");
const userCalcThree = prompt("Enter the last base stat!");

let total = Number(userCalcOne) + Number(userCalcTwo) + Number(userCalcThree);
let sum = 0
let avg = total/3;
sum = avg

console.log("The average of", userCalcOne, userCalcTwo, userCalcThree,"equals", sum);