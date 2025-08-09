/*D. Checking if it's an Array
Instructions:

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.
*/


let task1 = [1, 5, 6, 8, 3, 5];
console.log(Array.isArray(task1));

let task2 = ([1, 5, 5, 6, 8]);
console.log(Array.isArray(task2));

let task3 = 1;
console.log(Array.isArray(task3));

let task4 = (1, 5, 8, 9);
console.log(Array.isArray(task4));
