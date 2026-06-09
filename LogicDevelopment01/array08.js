// Task 1
// const colors = ["Red", "Blue", "Green"];
// Print:
// Red
// Green
// using indexes.

const colors = ["Red", "Blue", "Green"];

console.log(colors[0])
console.log(colors[2])


// Task 2
// const numbers = [5, 10, 15, 20, 25];
// Print all values using a loop.

const printArray = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
    }
}
const numbers = [5, 10, 15, 20, 25];
printArray(numbers);


// Task 3
// Find the sum of:
// [10, 20, 30, 40]
// Expected:
// 100

const sumFunction = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum)
}

const arr = [10, 20, 30, 40];
sumFunction(arr);


// Task 4
// Find the largest number in:
// [12, 45, 8, 67, 23]
// Expected:
// 67
 
const findLargestInArray = (arr) => {
    let largest = arr[0];  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(largest);
}
 
const arr = [12, 45, 8, 67, 23];
findLargestInArray(arr);