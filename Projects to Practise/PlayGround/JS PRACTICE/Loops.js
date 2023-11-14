/* Exercise 1: While Loop*/

/* let i= 1;
 */
/* while (i<=5){
 console.log (i);
 i++;
} 

let countdown = 10;

while (countdown >= 0) {
  console.log (countdown);
  --countdown;
}

let character = 1;

while (character <= 5) {
  console.log("A");
  character ++;
}
 */

/* const correctPassword = "secret"; // Define the correct password
let attempts = 3; // Number of password attempts allowed

while (attempts > 0) {
  const userPassword = ("Enter the password:"); // Prompt the user for the password
  if (userPassword === correctPassword) {
    console.log("Access granted. Welcome!");
    break; // Exit the loop if the password is correct
  } else if (userPassword !== correctPassword) {
    console.log(`Incorrect password. You have ${attempts} attempts left.`);
    attempts--;
    } else {
      console.log("Access denied. No more attempts left.");
    }
  } */

/* EX 1 Loop Through Array: of multiple levels to print all elements */
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [8.2,8.3,8.4,8.6], 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    // Check if the current element is an array before iterating through its elements
    if (Array.isArray(matrix[i][j])) { /* is.Array is a function to check if and array is and array and return true // conditons if part of arrays is going to 3 level run another for loop  */
      for (let x = 0; x < matrix[i][j].length; x++) {
        console.log(matrix[i][j][x]);
      }
    } else {
      console.log(matrix[i][j]);
    }
  }
}

/* EX 2 Object Properties: for in loop to print key value pairs */
let student = {
  name: 'Alice',
  age: 21,
  grades: { math: 90, science: 85, history: 78 }
};

const printObjectProperties = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      // If the value is an object, use another loop to print its properties
      for (let nestedKey in obj[key]) {
        console.log(`${key}.${nestedKey}: ${obj[key][nestedKey]}`);
      }
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
};

// Test the function with the provided example object
printObjectProperties(student);



/* EX 3 Sum of Array Elements */

let prices = [20, 30, 40, 50, 60];

const calculateTotalSum = () => {
  let i = 0;
  let totalSum = 0; /*  to sum element and print a result we have tostart a let that will hold the result and an element inside the funtion with with made the SUM*/

  while (i < prices.length) {
    totalSum += prices[i]; /* var initilize in 0 + current price index*/
    i++; /* add one new index while codition is true */
  }
  return totalSum;
}

console.log(calculateTotalSum());

/* EX 4 Filter Odd Numbers: Printing odd numbers into an Empty Array with FOR LOOP AND PUSH METHOD  */


let mixedNumbers = [1, 'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

const oddNumbers = (arr) => {
  let result = []; /* if we are asked to return a new array we have to initialize an empty on */
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) { /* If the index is even, it means the element is at an odd position (considering zero-based indexing) */
      result.push(arr[i]); /* push method is used to push every element with right conditions include at the end  */
    }
  }
  return result; // Return the array of odd numbers
}

console.log(oddNumbers(mixedNumbers));


