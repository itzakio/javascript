// String reverse in different ways

// For of
let hablu = "Hello World!"

let reverse = "";
for(let letter of hablu){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

// For Loop
let rev = "";
for(let i = 0; i < hablu.length; i++){
    // console.log(i);
    // console.log(hablu[i]);

    let letter = hablu[i];
    rev = letter + rev;
}
console.log(rev);

// Shortcut
let reversed = hablu.split('').reverse().join('');
console.log(reversed);

let car = {
  color: "red",
  model: "Toyota",
  speed: 120
};
