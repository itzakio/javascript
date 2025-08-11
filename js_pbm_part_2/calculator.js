function addition (num1, num2){
    return num1 + num2;
}

function subtraction (num1, num2){
    return num1 - num2;
}

function multiplication (num1, num2){
    return num1 * num2;

}
function division (num1, num2){
    return num1 / num2;
}

function calculator (num1, num2, operation){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "Please enter number value"
    }
    else if (operation.trim() === "+"){
        return addition(num1, num2);
    }
    else if (operation.trim() === "-"){
        return subtraction(num1, num2);
    }
    else if (operation.trim() === "*"){
        return multiplication(num1, num2);
    }
    else if (operation.trim() === "/"){
        return division(num1, num2);
    }
    else{
        return "Only 'addition', 'subtraction', 'multiplication' and 'division' are allowed "
    }
}

// 'addition' = "+", 'subtraction' = "-", 'multiplication' = "*", 'division' = "/"

//Please enter (num1, num2, "operation")

let result = calculator(8, 7, "*");
console.log(result);