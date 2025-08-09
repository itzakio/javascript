// Task link: https://github.com/ProgrammingHero1/js-function-practice-tasks

// Task - 1: Take four parameters. Multiply the four numbers and then return the result
/*
function multiply (num1, num2, num3, num4){
    let multi = num1 * num2 * num3 * num4;
    return multi;
}

let multi = multiply(3, 4, 5, 6);
console.log(multi);
*/

// Task-2: Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
/*
function x (num){
    if(typeof num !== "number"){
        let invalid = "Plz enter a valid number";
        return invalid;
    }
    else if (num < 0){
        let minus = "Plz enter a number grater then zero";
        return minus;
    }
    else if(num % 2 !== 0){
        return num * 2;
    }
    else if(num % 2 ===0){
        return num / 2;
    }
}

let result = x(-10);
console.log(result);
*/

// Task-3: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
/*
function ava (numbers){
    let sum = 0;
    for (let num of numbers){
        sum += num;
    }
    let ava = sum / numbers.length;
    return ava;
}

let numbers = [10, 10, 10, 10, 10];
let result = ava(numbers);
console.log(result);
*/

// Task-4: Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
/*
function count_zero(str){
    let count = 0;
    console.log(str);
    for (let num of str){
        console.log(num);
        if (num === "0"){ //loops provide the key from a string as a string
            count++;
        }
        
    }
    return count;
}

let binaryStr = "1101000110111";
let result = count_zero(binaryStr);
console.log(`The number 0 appear in the string ${result} time/time's`);
*/

// Task-5: Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(integerNum){
    console.log(integerNum);
    let result;
    if (typeof integerNum === "string" ){
        result = "It's a string, plz enter a integer number"
    }
    else if (typeof integerNum === "boolean" || typeof integerNum === "boolean"){
        result = "It's a boolean expression, plz enter a integer number"
    }
    else if (typeof integerNum === "number" && integerNum % 1 !== 0){
        result = "It's a floot number, plz enter a integer number"
    }
    else if(integerNum % 2 === 0){
        result = "Even";
    }
    else if (integerNum % 2 !== 0){
        result = "Odd"
    }
    return result;
}

let result = odd_even(true);
console.log(result);