let mobile = {
    brand: "MI",
    price: 28500,
    camara: "48mp",
    battery: 4000
}

// loop using for in.
// for (let prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
    
// }

// loop using for of by array
let keys = Object.keys(mobile);
console.log(keys);

for (let key of keys){
    console.log(key, ":", mobile[key]);
}