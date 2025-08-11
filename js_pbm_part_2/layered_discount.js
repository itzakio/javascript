function discount (quantity){
    let total = 0;
    const first100Price = 100;
    const second100Price = 90;
    const remainingPrice = 70;
    if (quantity <= 100){
        total += quantity * first100Price;
    }
    else if (quantity <= 200){
        total += 100 * first100Price;
        total += (quantity - 100) * second100Price;
    }
    else{
        total += 100 * first100Price;
        total += 100 * second100Price;
        total += (quantity - 200) * remainingPrice;
    }
    
    return total;
}

let productQuantity = 250;
let total = discount(productQuantity);
console.log(total);