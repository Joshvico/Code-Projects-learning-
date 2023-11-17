/* CONVERTING CELSIUS to FAHRENHEIT */

function convertCtoF(celsius) {
  let fahrenheit = (celsius)*9/5+32 ;
  return fahrenheit;
}
console.log (convertCtoF(30));

/* REVVERSING A STRING */

function reverseString (str) {
  return str.split('').reverse().join('');
}

console.log (reverseString("to pota madre"));
/* ****************************************** */
const reverseString2 = (string) => string.split('').reverse().join('');

console.log (reverseString2("hello"));

/* FACTORALIZE NUMBERS with **************************************  "n!"   */
const factorialize = (num) => {
  if (num === 0 || num === 1) {
    return 1; 
  } else {
    let result = 1; 
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
};

console.log(factorialize(5)); 

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
  var resultArray = [];
  for (var i = 0; i < arr.length; i++) {
        var max = arr[i][0];
    for (var j = 1; j < arr[i].length; j++) {
          if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    resultArray.push(max);
  }

  return resultArray;
}
console.log(largestOfFour([[4, 5, 1, 3],[13, 27, 18, 26],[32, 35, 37, 39],[1000, 1001, 857, 1]]));