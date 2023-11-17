/* Convert Celsius to Fahrenheit*/

function convertCtoF(celsius) {
  let fahrenheit = (celsius)*9/5+32 ;  /* temperature in Celsius times 9/5, plus 32 */
  return fahrenheit;
}
console.log (convertCtoF(30));

/* REVVERSING A STRING */

/* .SPLIT === to turn STRING into ARRAY */
/* .REVERSE === Reverse Array elements */
/* .JOIN === to turn back ARRAY inot STRING */
function reverseString (str) {
  return str.split('').reverse().join('');
}

console.log (reverseString("to pota madre"));

/* it can also be expressed like this as an ARROW FUCNTION in one line */

const reverseString2 = (string) => string.split('').reverse().join('');

console.log (reverseString2("hello"));

/* FACTORALIZE NUMBERS with **************************************  "n!"   */
const factorialize = (num) => {
  if (num === 0 || num === 1) {
    return 1; // factorial of 0 and 1 are meant to be 1 
  } else {
    let result = 1; 
    for (let i = 2; i <= num; i++) {
      result *= i; /* multiplaying result per i that was set initialy from 2 and incremented while i is smaller or less than num */
    }
    return result;
  }
};
console.log(factorialize(5)); // Output: 120

/* FIND LONGEST WORD IN A STRING */

function findLongestWordLength(string) {
  let words = string.split(" ");  /* IMPORTANT ADDING A SEPARATION as defines the separation // We first need a var to store the array we want it to count  */
  let maxLength = 0; /* set a counter for the loop to compare or go trhough */
  
  for (let i = 0; i < words.length; i++){ 
    if(words[i].length > maxLength){ /* if the index iterated in words.length (str enetred) is bigger than the maxLegnth stablish before...   */
      maxLength = words[i].length;/* UPDATING PART: when onditions are met this line det. that the new value stored in maxLenght  */
    }
   }
  return  maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/* SPLIT ACKNOWLEDGEMENT take a look! */
const findLongestWordLength2 = (str) => {
  var splitting = str.split("."); /* this is the character or element that you want to separte string into */
  return splitting;
}
console.log(findLongestWordLength2("tu.puta.madre"));

/* ********************** modified version to return not only the length but also the word whic that length belongs to */

function findLongestWord(string) {
  let words = string.split(" ");
  let maxLength = 0;
  let longestWord = ""; /* definning the variable to store the value consequent which we want to be returned later */

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i]; /* words i represents the word that was iterated */
    }
  }

  return { /* to return two different varaibles they should be returned like if it was an object */
    length: maxLength,
    word: longestWord
  };
}

let result = findLongestWord("The quick brown fox jumped over the lazy dog");/* important define result for console.loging result with string literal */
console.log(`The longest word is ${result.word} with a length of ${result.length} characters`);

/* FINDING HIGHEST NUMBER IN MULTI LEVEL ARR  */

function largestOfFour(arr) {
  var resultArray = []; /* initilize a var to store highest values */
  for (var i = 0; i < arr.length; i++) { /* iterate first level arr */
        var max = arr[i][0]; /* Initialization of max with the first element of the current sub-array */
    for (var j = 1; j < arr[i].length; j++) { /* run through 1st level arrays */
          if (arr[i][j] > max) { /* if value of current value position in array is bigger than previous update max value */
        max = arr[i][j]; /* acces the array value that meets this conditions */
      }
    }
    resultArray.push(max); /* push it to the resultArray */
  }

  return resultArray;
}
console.log(largestOfFour([[4, 5, 1, 3],[13, 27, 18, 26],[32, 35, 37, 39],[1000, 1001, 857, 1]]));