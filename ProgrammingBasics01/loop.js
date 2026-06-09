// Task 1
// Print: 1 2 3 4 5 6 7 8 9 10
// using a loop.
 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Task 2
// Print: 10 9 8 7 6 5 4 3 2 1
 
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Task 3
// Print even numbers: 2 4 6 8 10
 
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
 
// Task 4
// Print odd numbers: 1 3 5 7 9
 
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
 
// Find sum of:
// 1 + 2 + 3 + 4 + 5
 
let sum = 0
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum)
 
// Find factorial of 5.
 
let num = 5
let fect = 1
for(let i = 1; i <= num; i++){
   fect *= i;
}
   console.log(fect)