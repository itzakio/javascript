/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let num = 1;
let sum = 0;
while(num < 200){
    console.log(num);
    num++;
    sum += num;
    if(sum >= 150){
        break;
    }
} 
console.log("The sum of all number is",sum,", and it's equal or more than 100 so this is the end of this loop");