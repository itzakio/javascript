// PROBLEM -4: ODD AVARAGE
function oddavg (numbers){
    let total = 0;
    let oddNumbers = [];
    for (let num of numbers){
        if(num % 2 !== 0){
            total += num;
            oddNumbers.push(num);
        }
    }
    let oddLenght = oddNumbers.length;
    let ava = total / oddLenght;
    let result = ava.toFixed(2);
    return result;
}

let numbers = [54, 35, 48, 85, 91]
let avg = oddavg(numbers);
console.log(`The avarage of the odd number is: ${avg}`);