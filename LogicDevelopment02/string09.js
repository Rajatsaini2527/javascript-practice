// Task 1
// const name = "Rajat";
// Print:
// R
// t
// using indexes.

const name = "Rajat";

console.log(name[0])
console.log(name[4])

// Task 2
// Count characters in:
// "JavaScript"
// Expected:
// 10

const str = "JavaScript";
console.log(str.length)


// Task 3
// Print each character using a loop.
// Input: "Hello"
// Output:
// H
// e
// l
// l
// o

const str = "Hello";

for(let i = 0; i<str.length; i++){
    console.log(str[i]);
}

// Task 4
// Count vowels in: "javascript"
// Expected: 3
// (vowels: a, e, i, o, u)

let str = "javascript";
let vowels = "aeiou";
let count = 0;

// first type 
for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
        count++;
    }
}

console.log(count);

// second type

for (let char of str) {
    if ("aeiou".includes(char)) {
        count++;
    }
}

console.log(count); 

// Task 5 
// Reverse a string manually.
// Input: "hello"
// Output:olleh

let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);