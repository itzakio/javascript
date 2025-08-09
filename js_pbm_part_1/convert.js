// PROBLEM -1: Inch to feet
function inchToFeet(inch){
    let feetFraction = inch / 12;
    let feetNumber = parseInt(feetFraction);
    let inchNumber = inch % 12;
    let result = `${feetNumber} feet, ${inchNumber} inch`
    return result;
}

let akashHeight = 65;
let feet = inchToFeet(akashHeight);
//console.log(`Height is: ${feet}`);

//PROBLEM -2 MILE TO KILOMITER
function mToKm(mile){
    let mUnit;
    let kmUnit;
    if (mile > 1){
        mUnit = "miles"
    }
    else{
        mUnit = "mile"
    }
    let kmFraction = mile * 1.61;
    let km = parseInt(kmFraction);
    if (km > 1){
        kmUnit = "kilomiters"
    }
    else{
        kmUnit = "kilomiter"
    }

    let miterFraction = kmFraction - km;
    let miter = miterFraction.toFixed(2);
    
    let result = `${mile} ${mUnit} = ${km} ${kmUnit}, ${miter} miters`;
    return result ;
    
}

let distance = 12;
let distanceInKm = mToKm(distance);
console.log(distanceInKm);

