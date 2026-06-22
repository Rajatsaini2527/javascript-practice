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
  return str.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

console.log(countCharacters("javascript"));


// Task 2
// Find duplicates in:
// [1, 2, 3, 2, 4, 5, 1]
// Expected:
// [1, 2]

const arr = [1, 2, 3, 2, 4, 5, 1];

const counts = {};
const duplicates = [];

for (const num of arr) {
  counts[num] = (counts[num] || 0) + 1;
}

for (const num in counts) {
  if (counts[num] > 1) {
    duplicates.push(Number(num));
  }
}

console.log(duplicates); // [1, 2]


// Task 3
// Check if two strings are anagrams.
// Example:
// "listen"
// "silent"
// Output:
// true
// Example:
// "hello"
// "world"
// Output:
// false

function isAnagram(str1, str2) {
  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));  


// Find the first non-repeating character.
// Input:
// "aabbcde"
// Output:
// "c"

function firstNonRepeatingCharacter(str) {
  const charCount = {}; 
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingCharacter("aabbcde")); 


// Task 5
// Two Sum
// Input:
// [2, 7, 11, 15]
// Target:
// 9
// Output:
// [2, 7]

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [2, 7]

