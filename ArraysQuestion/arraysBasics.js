// Find the largest element in an array.
 
let arr = [4,2,6,7,9,6,4,9,5,2,];
const findLargestNumber = (arr) => {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    //  console.log(largest)
};
findLargestNumber(arr)
 
// Find the smallest element in an array.
 
const findSmallestNumber = (arr) => {
  let smallest = arr[0];
  for(let i = 1; i < arr.length; i++ ){
    if(arr[i] < smallest){
      smallest = arr[i];
    }
  }
//   console.log(smallest);
}
 
findSmallestNumber(arr);


// Calculate the sum of all elements in an array.
 
const sumOfAllElements = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
//   console.log(sum);
}
 
sumOfAllElements(arr);
 
// Find the average of array elements.
 
const findAverageNumber = (arr) => {
  let sum = 0;
  let averag = 0
 
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
 
  averag = sum % arr.length;
 
//   console.log(averag);
}
 
findAverageNumber(arr);
 
// Count even and odd numbers in an array.
 
const countEvenAndOdd = (arr) => {
  let odd = 0;
  let even = 0
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even  ++;
    }
 
    if (arr[i] % 2 !== 0) {
      odd  ++;
    }
  }
//   console.log(`Even numbers: ${even}, Odd numbers: ${odd}`);
}
 
countEvenAndOdd(arr)
 

// Reverse an array.`
 
const arrayReverse = (arr) => {
  for(let i = arr.length -1; i >= 0; i--){
    // console.log(arr[i]);
  }
}
 
arrayReverse(arr);
 
// Sort an array in ascending order.
 
const ascendingOrder = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // console.log(arr);
}
 
ascendingOrder(arr);
 
// Sort an array in descending order.
 
const descendingOrder = (arr) =>{
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    // console.log(arr);
}
descendingOrder(arr);
 
// Find the second largest element in an array.
 
const secondLargestNumber = (arr) => {
    let largest = arr[0];
    let secondLargest = arr[0];
 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    // console.log(secondLargest);
}
secondLargestNumber(arr);

// Print all elements using a for loop.

const printAllElements = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAllElements(arr)


// Find the second largest element in an array.

const findSecondLargest = (arr) => {
 
  let largest = 0;
  let secondLargest = 0;
 
  for (let i = 0; i < arr.length; i++) {
 
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }else if(arr[i] > secondLargest && arr[i] !== largest){
        secondLargest = arr[i];
    }
 
  }
  console.log(secondLargest);
}
 
findSecondLargest(arr);
const target = 15;
 
// Search for an element in an array (Linear Search).

const linearSearch = (arr, target) => {
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return - 1; // Element not found
 
}
 
const result = linearSearch(arr, target);
 
if(result !== -1){
  console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found");
}

// Remove duplicate elements from an array.
 
const removeDuplicateElements = (arr) => {
let result = [];
  for(let i = 0; i < arr.length; i++){
    let isDublicate = false;
    for(let j = 0; j < result.length; j++){
      if(arr[i] === result[j]){
        isDublicate = true;
        break;
      }
    }
    if(!isDublicate){
      result.push(arr[i]);
    }
  }
return result;
}
 
console.log(removeDuplicateElements(arr));

// Find the frequency of each element in an array.
 
const frequencyEachElement = (arr) => {
 
  const frequency = {}
 
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1
    }
  }
  
  return frequency;
}
 
console.log(frequencyEachElement(arr));



// Merge two sorted arrays.
function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
 
    for (; i < arr1.length && j < arr2.length;) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
 
    for (; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
 
    for (; j < arr2.length; j++) {
        result.push(arr2[j]);
    }
 
    return result;
}
 
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
 
console.log(mergeSortedArrays(arr1, arr2));



// Find the missing number in an array containing numbers from 1 to n.
 
// single missing
function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
 
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
 
    return expectedSum - actualSum;
}
 
const arr = [1, 2, 3, 5, 7];
const n = 5;
 
console.log(findMissingNumber(arr, n));
 
// multipal missing
 
function findMissingNumbers(arr, n) {
    let missing = [];
 
    for (let i = 1; i <= n; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }
 
    return missing;
}
 
console.log(findMissingNumbers([1, 2, 3, 5, 7], 7));
