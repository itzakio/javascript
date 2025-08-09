let price = 1000;
let isLeader = false;


// ---------NORMAL IF ELSE----------

// if(isLeader==true){
//     if(price >=1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price + 100;
// }
// console.log(price)

// ---------TURNARY IF ELSE----------

price = isLeader == true ? price = price >=1000 ? price / 2 : 0 : price + 100;

console.log(price)