// // 1 :- Sum of two numbers
// // ===========================
 
// const sum = (a, b) => {
//     return a + b;
// };
 
// console.log(sum(5, 10));
 
// // 2 :- Check if a number is even or odd
// // ==================================
 
// const checkEvenOdd = (num) => {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };
 
// console.log(checkEvenOdd(5)); // Odd
// console.log(checkEvenOdd(10)); // Even
 
// const checkEvenOddWithoutModulo = (num) => {
//   if ((num & 1) === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(checkEvenOddWithoutModulo(5)); // Odd
// console.log(checkEvenOddWithoutModulo(10)); // Even
 
// // 3 :- Find the largest of two numbers
// // =======================================
 
// const largestNumber = (a, b) => {
//   if (a > b) {
//     console.log("A is largest")
//   } else {
//     console.log("B is largest")
//   }
// }
 
// largestNumber(7, 6);
 
// // 4 :- Print Numbers 1 to 10
 
// const printNumbers = () => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i)
//   }
// }
 
// printNumbers();
 
// // 5 :- Calculate Factorial
 
// const calculateFactorial = (num) => {
 
//   let fect = 1
//   for (let i = 1; i <= num; i++) {
//     fect = fect * i
//   }
//   console.log(fect);
// }
 
// calculateFactorial(5)

// 6 :- Swap tow number without use third varibale.

const swap = (a, b) => {
    a = a + b;
    b = a - b;
    a = a - b;

    console.log(a);
    console.log(b);
}

swap(5, 7);