let age = 19;
let withAdult = true;

if (age >= 15){
    console.log("apni melai dhukte parben");
    if (withAdult || age >= 20){  // nasted if condition => assisttant Manager
        console.log("apni ghost house a dhukte parben")
    }
    else{
        console.log("apni ghost house a dhukte parben na")
    }
}
else{
    console.log("apni melai dhukte parben na");
}
