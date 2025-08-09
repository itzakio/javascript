/*
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;



// using for loop
for(i = 0; i < marks.length; i++){
    sum += marks[i];
}
console.log(sum);

let ava = sum / marks.length;
console.log(ava);
*/

/*
// using for of loop
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let val of marks){
    sum += val;
}
let avg = sum / marks.length;
console.log(sum);
console.log(`average marks of the class is: ${avg}`);

*/

// let price = [250, 645, 300, 900, 50]; offer 10% and print the price in offer value
/*
let price = [250, 645, 300, 900, 50];



for(i = 0; i < price.length; i++){
    price[i] = price[i] - price[i] / 10;
}
console.log(price);
*/
/*
let price = [250, 645, 300, 900, 50];
let i = 0;

while(i < price.length){
    let oldPrice = price[i];
    let discount =  price[i] / 10;
    let newPrice = price[i] -  discount;
    console.log(`Old price: ${oldPrice} discount: ${discount} New Price: ${newPrice}`);
    i++
}
    */


/* Concat()
let food = ["biriani", "polaw", "mangsho"];
let drinks = "water";

let eat = food.concat(drinks);
console.log(eat.toString());
*/

//Shift unshift slice splice push pop

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(companies);

companies.shift();
console.log(companies);

companies.splice(2, 1, "Ola");
console.log(companies);

companies.push("Amazone");
console.log(companies);



