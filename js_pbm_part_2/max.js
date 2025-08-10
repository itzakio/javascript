// Using if else function

function getMax(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log("Input 1 is the boss");
    }
    else if (num2 > num1 && num2 > num3){
        console.log("Input 2 is the boss");
    }
    else{
        console.log("Input 3 is the boss");
    }
}

let akash = 80;
let parvej = 85;
let nahid = 75;

getMax(akash, parvej, nahid);


// Using Math function 
let numbers = [45, 15, 67, 78, 35, 96]

// let max = Math.max(45, 15, 67, 78, 35, 96);
let max = Math.max(numbers);
console.log(max);