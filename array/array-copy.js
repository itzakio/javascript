/*
let price = 25;
let compPrice = price;

price = 20;
compPrice = 15;

console.log(price);
console.log(compPrice);

//but in array

let product = [25, 25, 25];
let compProduct = product;

product[0] = 15;
compProduct[1] = 30;

console.log(product);
console.log(compProduct);

*/

//Array copy

const number = [1, 2, 3, 4, 5];
//const newNumber = Array.from(number); // 1
//const newNumber = [].concat(number); // 2
const newNumber = [...number]; // 3

number[0]= 6;
newNumber[1]= 7;

console.log(number);
console.log(newNumber);