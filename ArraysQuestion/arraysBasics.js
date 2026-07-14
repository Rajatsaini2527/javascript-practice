// Find the largest element in an array.
 
const arr = [4,2,6,7,9,6,4,9,5,2,];
const findLargestNumber = (arr) => {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
     console.log(largest)
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
  console.log(smallest);
}
 
findSmallestNumber(arr);


// Calculate the sum of all elements in an array.
 
const sumOfAllElements = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log(sum);
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
 
  console.log(averag);
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
  console.log(`Even numbers: ${even}, Odd numbers: ${odd}`);
}
 
const arr = [4,2,6,7,9,6,4,9,5,2,];
countEvenAndOdd(arr)
 
// Reverse an array.
 
const arrayReverse = (arr) => {
  for(let i = arr.length -1; i >= 0; i--){
    console.log(arr[i]);
  }
}
 
arrayReverse(arr);