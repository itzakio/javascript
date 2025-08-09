

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/*
let num = 81;
let sum = 0;

while (num <= 131){
    if(num % 2 !== 0){
        console.log("odd number:", num);
        sum = sum + num;
        console.log("sum is:", sum);
    }
    num++;
}
    */

let sum = 0;
for (let num = 81; num <= 131; num++){
    if(num % 2 !== 0){
        console.log("odd number is", num)
        sum += num;
    }
}
console.log("sum of all odd number is:", sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
/*
let num = 206;
let sum = 0;

while(num <= 311){
    if(num % 2 ===0){
        console.log("even number:", num);
        sum += num;
        console.log("sum is", sum);
    }
    num++;
}


let sum = 0;

for (let num = 206; num <= 311; num++){
    if(num % 2 === 0){
        console.log("even number", num)
        sum += num;
    }
    
}
console.log("sum or all even number",sum)
*/