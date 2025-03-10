/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1;       // This is a copy of arr1, but they are the same object, so any changes to arr2 will also affect arr1.

arr2.push(4);

console.log('First Array:', arr1);
console.log('Second Array:', arr2);

// Copying an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3];      // The ... operator makes a copy off arr3, but makes it a seperate object, allowing you to safely modify the copy.

arr4.push(7);

console.log('Third Array:', arr3);
console.log('Fourth Array:', arr4);

// Copying an object

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4 };
let obj3 = { ...obj1, b: 5 };

console.log('First Object:', obj1);
console.log('Second Object:', obj2);
console.log('Third Object:', obj3);

// Copying only part of an array/object

let arr5 = [...arr1, { ...obj1 }, ...arr3, "x", "y", "z"];
console.log(arr5);