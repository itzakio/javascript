const products = [
    { name: "shirt", price: 500, quantity: 2},
    { name: "t-shirt", price: 250, quantity: 2},
    { name: "pant", price: 800, quantity: 3},
    { name: "shoe", price: 1500, quantity: 1},
    { name: "watch", price: 550, quantity: 1}
]

function totalPrice (cart){
    let sum = 0;
    for (let product of cart){
        sum += product.price * product.quantity;
    }
    return sum;
}

let total = totalPrice(products);
console.log(`Total ${total}tk`);