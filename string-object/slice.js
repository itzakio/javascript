// Slice a part from a string.
const adress  = "Meherpur";
const part = adress.slice(5,8);
// console.log(part);

/*
// Split in parts and convert it into a arry.
const sentence = "I am a good and hardworking person";
console.log(sentence.split()); // full sentence
console.log(sentence.split("")); // by letters
console.log(sentence.split(" ")); // by space
console.log(sentence.split("a")); // by a specific letter

const friendsStr = "Rohim, Korim, Fahim, Labib, Habib";
const friends = friendsStr.split(","); 
console.log(friends);
// by comma ","
*/

/*
// Marge a arry in string using "join"
const realFriends = [ 'Rohim', 'Korim', 'Fahim', 'Labib', 'Habib' ];
console.log(realFriends.join());
console.log(realFriends.join("|"));
console.log(realFriends.join("-"));
*/

const firstName = "Akash";
const lastName = "Ahmed";

const fullName = firstName.concat(" ").concat(lastName);
console.log(fullName);

console.log(fullName.includes("a"))
console.log(fullName.includes("x"))
