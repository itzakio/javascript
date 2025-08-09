/*
function various (value){
    if(value.length % 2 == 0){
        console.log("String length is even")
    }
    else{
        console.log("String length is odd")
    }
}

various("Hello World")
*/

// 19-8 Sum of all numbers in an array using function

function sum (array){
    let sumOfNumbers = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 ===0){
           console.log(array[i]); 
           sumOfNumbers += array[i];
        }

        
    }
    return sumOfNumbers;
}

let numbers = [5, 8, 4, 6, 3, 7, 9];

let theNum = sum(numbers);
console.log(theNum);