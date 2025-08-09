var first = 0.1;
var second = 0.2;
var total = first + second;
// console.log(total.toFixed(2))

var applePrice = 22;
var orangePrice = parseFloat("22");
var totalPrice = applePrice + orangePrice
// console.log(typeof applePrice)
// console.log(typeof orangePrice)
// console.log(totalPrice);



// Boolean
// console.log(5 > 3);
// console.log(10 == 2); 


// Null
let x;
// console.log(x);      // undefined

let y = null;
// console.log(y);      // null

// Nan (Not a Number)
var a = 4 - "hello";
// console.log(a);

// Infinity and minus Infinity
var a = 2 / 0;
// console.log(a);

var a = -2 / 0;
// console.log(a);


// Number()
let z = "123";
let num1 = Number(z);   // num is now 123 (as a number)
console.log(num1);

let w = true;
let num2 = Number(w);   // num is 1
console.log(num2);

let t = null;
let num3 = Number(t);   // num is 0
console.log(num3)

let s = "hello";
let num4 = Number(s);   // num is NaN (Not a Number)
console.log(num4)
