// https://github.com/ProgrammingHero1/array-looping-tasks
// Task 1
/*
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const colorReversed = [];

for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
    colorReversed.unshift(colors[i]);
}
console.log(colorReversed);
*/

// Task 2
/*
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNum = [];

for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    if(numbers[i] % 2 == 0){
        // console.log(numbers[i]);
        evenNum.push(numbers[i]);
    }
}
console.log(evenNum);
*/

// Task 3
/*
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let allNumbers = '';

for (let num of numbers){
    // console.log(num);
    allNumbers += num;
}
console.log(allNumbers);

// another way

let join = numbers.join('');
console.log(join);
*/

//Task 4
/*
const statement = 'I am a hard working person'

let reversedSentence = statement.split(' ').reverse().join(' ');
console.log(reversedSentence);
*/

// Task 5
/*
let array = [1, 2, 3];
let copyArray = [...array];

copyArray[0] = 99;

console.log(array);
console.log(copyArray);
*/

//Task 6
/*
let student = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
  { name: "Rabbi", marks: 70 },
  { name: "Sakib", marks: 75 },
  { name: "Billu", marks: 95 }
]

let final = [];

for (let i = 0; i < student.length; i++){
    // console.log(student[i].name,'scored', student[i].marks);
    let all = student[i].name.concat(' scored ').concat(student[i].marks);
    final.push(all);

}
console.log(final);
*/

// Task 7

let numbers = [
  [1, 2],
  [3, 4],
  [5, 6]
]

numbers[1][0] = 99;

console.log(numbers);