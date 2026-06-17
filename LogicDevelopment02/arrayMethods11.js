// Task 1: map()
// Convert:
// [1, 2, 3, 4]
// to
// [2, 4, 6, 8]
// using map().

const number = [1, 2, 3, 4];

const result = number.map(number=> number*2);

console.log(result);


// Task 2: filter()
// Keep only even numbers from:
// [1, 2, 3, 4, 5, 6]
// Expected:
// [2, 4, 6]

const arr = [1, 2, 3, 4, 5, 6];

const evenNumber = arr.filter(arr => arr % 2 === 0);

console.log(evenNumber);

// Task 3: reduce()
// Find sum of:
// [10, 20, 30, 40]
// Expected:
// 100


const arr = [10, 20, 30, 40];

const sumNumber = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sumNumber);

// Task 4
// Given:
// const students = [
//   { name: "Rajat", marks: 80 },
//   { name: "Amit", marks: 95 },
//   { name: "Rahul", marks: 70 }
// ];
// Use map() to create:
// ["Rajat", "Amit", "Rahul"]

const students = [
  { name: "Rajat", marks: 80 },
  { name: "Amit", marks: 95 },
  { name: "Rahul", marks: 70 }
];

const studentName = students.map(student => student.name);

console.log(studentName);


// Task 5 
// From:
// const students = [
//   { name: "Rajat", marks: 80 },
//   { name: "Amit", marks: 95 },
//   { name: "Rahul", marks: 70 }
// ];
// Use filter() to keep students with marks greater than 75.
// Expected:
// [
//   { name: "Rajat", marks: 80 },
//   { name: "Amit", marks: 95 }
// ]

const students = [
  { name: "Rajat", marks: 80 },
  { name: "Amit", marks: 95 },
  { name: "Rahul", marks: 70 }
];

const topStudent = students.filter(student => student.marks >= 75);

console.log(topStudent);


// Task 6
// Use reduce() to find the highest marks from:
// [80, 95, 70, 88]
// Expected:
// 95

const marks = [80, 95, 70, 88];

const highestMarks = marks.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
}, 0);

console.log(highestMarks);