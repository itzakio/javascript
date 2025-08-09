// PROBLEM -3: LEAP YEAR CHECK

function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 ===0 || year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

let year = 2400;
let theYear = isLeapYear(year);
console.log(theYear);
