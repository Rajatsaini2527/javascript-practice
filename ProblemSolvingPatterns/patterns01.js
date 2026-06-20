// Task 1
// Write a function:
// countCharacters("javascript")
// Expected:
// {
//   j: 1,
//   a: 2,
//   v: 1,
//   s: 1,
//   c: 1,
//   r: 1,
//   i: 1,
//   p: 1,
//   t: 1
// }

function countCharacters(str) {
    let result = {};

    for (let char of str) {
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }

    return result;
}

console.log(countCharacters("javascript"));