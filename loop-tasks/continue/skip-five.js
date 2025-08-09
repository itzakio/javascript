/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/


// for(let num = 55; num <= 85; num++){
    
//     if(num % 5 == 0){
//         continue;
//     }

//     if(num % 2 === 1){
//       console.log(num);
//     } 
// }
for (let i = 55; i <= 85; i++) {
  if (i % 2 === 1 && i % 5 !== 0) {
    console.log(i);
  }
}
