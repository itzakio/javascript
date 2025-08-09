// Ticket fare Calculator

let ticketPrice = 800;
let age = 25;
let isStudent = false;
let payPrice;



if (age < 10){
    payPrice = 0;
}
else if (isStudent){
   payPrice =ticketPrice - (ticketPrice * 50 / 100);
}
else if(age >= 60){
   payPrice =ticketPrice - (ticketPrice * 15 / 100);
}    
else{
    payPrice = ticketPrice;
}
console.log("You have to pay: " + payPrice +"tk")