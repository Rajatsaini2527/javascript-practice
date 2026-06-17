// Task 1
// Create:
// const person = {
//     name: "Rajat",
//     age: 22,
//     city: "Saharanpur"
// };
// Print:
// Rajat
// Saharanpur

const person = {
    name: "Rajat",
    age: 22,
    city: "Saharanpur"
}

console.log(person.name)

console.log(person.city)

// Task 2
// Update age from:
// 22 → 23
// and print the object.

person.age = 23;

console.log(person)

// Task 3
// Add:
// profession: "Developer"
// and print the object.

person.profession = "Developer";

console.log(person)

// Task 4
// Loop through all properties.
// Expected:
// name Rajat
// age 23
// city Saharanpur
// profession Developer

for(let key in person ){
    console.log(key, person[key])
}

// Task 5
// Create:
// const student = {
//     name: "Rajat",
//     marks: [80, 70, 90]
// };
// Calculate total marks.
// Expected:
// 240

const student = {
    name: "Rajat",
    marks: [80, 70, 90]
}
let totalMarks = 0;

for(let i = 0; i < student.marks.length; i++){
    totalMarks += student.marks[i]
}
console.log(totalMarks)

// // Task 6
// Create:
// const students = [
//     { name: "Rajat", marks: 80 },
//     { name: "Amit", marks: 95 },
//     { name: "Rahul", marks: 70 }
// ];
// Find the student with the highest marks.
// Expected:
// Amit
// 95

const students = [
    { name: "Rajat", marks: 80 },
    { name: "Amit", marks: 95 },
    { name: "Rahul", marks: 70 }
];

let topStudent = students[0];

for(let i = 1; i < students.length; i++){
    if(students[i].marks > topStudent.marks){
        topStudent = students[i];
    }
}

console.log(topStudent.name, topStudent.marks);