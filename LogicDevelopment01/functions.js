// Task 1
// function greet(name)
// Output:
// Hello Rajat

function greet(name) {
    console.log(name);
}

greet("Hello Rajat");


// Task 2
// function add(a, b)
// Return sum.
// Example:
// add(10, 20)
// Output:
// 30

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Task 3
// function square(number)
// Return square.
// Example:
// square(5)
// Output:
// 25

function square(number) {
    return number * number;
}

console.log(square(5));


// Task 4
// function isEven(number)
// Return true if number is even, else false.

function isEven(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isEven(14));
console.log(isEven(15));


// Task 5
// function findLargest(a, b)
// Return the larger number.


function findLargest(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

console.log(findLargest(12, 15))