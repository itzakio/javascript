const phones = [
    { name: "Samsung", price: 25000, camara: "20mp", color: "black"},
    { name: "Xaomi", price: 28500, camara: "48mp", color: "black"},
    { name: "Oppo", price: 20000, camara: "20mp", color: "black"},
    { name: "iPhone", price: 100000, camara: "20mp", color: "black"},
    { name: "Walton", price: 18000, camara: "12mp", color: "black"},
    { name: "Vivo", price: 22000, camara: "30mp", color: "black"}
]

function getExpensive (phones){
    let max = phones[0];
    for (let phone of phones){
        if (phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

let expensivePhone = getExpensive(phones);
console.log(expensivePhone);