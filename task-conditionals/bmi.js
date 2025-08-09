var weight = 58;
var heightInch = 5.5;


var height = heightInch * 0.3048; // convert feet into miter

var bmi = weight / (height * height);
console.log("Your BMI is:" + bmi.toFixed(2))

if (bmi < 18.5){
    console.log("Under weight")
}
else if (bmi < 24.5){
    console.log("Normal weight")
}
else if (bmi < 29.5){
    console.log("Over weight")
}
else{
    console.log("Taratari ojon koman🥲")
}