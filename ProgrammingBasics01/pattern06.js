// Pattern 1
// Print:
// *
// *
// *
// *
// *
 
let num = 5
for (let i = 1; i <= num; i++) {
    console.log("*")
}


// Pattern 2
// Print
// *
// **
// ***
// ****
// *****
 
let num = 5;
for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
 
// Pattern 3
// Print:
// 1
// 12
// 123
// 1234
// 12345


let num = 5;
 
for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    console.log(pattern);
}
 
// Pattern 4
// Print:
// *****
// ****
// ***
// **
// *


let num = 5;
for (let i = num; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
 
// Pattern 5
// Print:
// *****
// *****
// *****
// *****
// *****
 
let num = 5;
for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; j <= num; j++) {
        pattern += "*";
    }
    console.log(pattern);
}


// Pattern 5
// Print:
//     *
//    ***
//   *****
//  *******
// *********
 
let num = 5;
 
for (let i = 1; i <= num; i++) {
    let Pattern = "";
    for (let k = 1; k <= num - i; k++) {
        Pattern += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        Pattern += "*";
    }
    console.log(Pattern)
}