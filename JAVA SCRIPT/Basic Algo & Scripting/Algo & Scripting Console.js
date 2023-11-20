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

/* FIDING IF LETTER ENTERED MATCHES THE LAST LETTER of STRING ENTERED */
function confirmEnding(str, target) {
  var splitting = str.split("");
  var letterPopped = splitting.pop();
  if(target === letterPopped) {
    return true;
  } 
  return false ;
}

console.log (confirmEnding("bastian", "n"));

/* USING SUBSTRING TO EXTRACT PART OF ESTRING AND CHECK MATCHES LIKE PREVIOUS EXCERCISE */

function confirmEnding(str, target) {
  var ending = str.substring(str.length - target.length) 
  return ending === target; 
}

console.log (confirmEnding("Hello,World", "world"));

/* ************** PROPOSE but IWTH "endswith()" METHOD************************************ */


function confirmEnding(str, target) {
  return str.endsWith(target);
}
console.log(confirmEnding("Hello, World", "World")); 

/* REPETING num AMOUNT OF TIMES STRING WITH LOOP  */
function repeatStringNumTimes(str, num) {
  // Check if num is not a positive number
  if (num <= 0) { /* setting condition fo only positve numbers allowed */
    return 'tu puta mdre en bicicleta, return a positive number';
  }

  // Repeat the string using a loop
  let result ="" /* setting a varaible to store the printed  */
  for (let i = 0; i < num; i++) {
    result += str; /* as str is not an array we can concatenate both let and parmeter with += to rping  */
  }

  return result;
}

console.log(repeatStringNumTimes("abc", 3)); // Output: "abcabcabc"
console.log(repeatStringNumTimes("abc", -2)); // Output: ""

/* ******************** SAME BUT WITH REPEAT() FUCNTION */
function repeatStringNumTimes(str, num) {
  // Check if num is not a positive number
  if (num <= 0) {
    return '';
  }
  return str.repeat(num);
}

console.log(repeatStringNumTimes("abc", 3)); // Output: "abcabcabc"
console.log(repeatStringNumTimes("abc", -2)); // Output: ""

/* TUNCRATE A STRING WITH SLICE() METHOD */

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num) + "...";
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

/* CHECKING TYPE OF DATA WITH "TYPEOF METHOD" */
function booWho(bool) {
  return typeof bool === "boolean";

}

console.log(booWho(false));

/* TURNING EACH 1st LETTER OF WORD CAPITAL with MAP charat ()+toLowerCase +toUpperCase +slice() +join */

function titleCase(str) {
  const lowerCaseStr = str.toLowerCase();
  const wordsArray = lowerCaseStr.split(" ");   const capitalizedWords = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const result5 = capitalizedWords.join(" "); 
  return result5;
}

const result5 = titleCase("I'm a little tea pot"); 
console.log(result5);  // Output: "I'm A Little Tea Pot"

/* ************************************** Optimize version***************************** */
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));  // Output: "I'm A Little Tea Pot"

/* USING SLICE AND SPLICE METHOD TO INLCUDE ARRAY PART OF ARRAY INTO A COPY OF AN ARRAY */

function frankenSplice(arr1, arr2, n) {
  const newArr2 = arr2.slice();
  newArr2.splice(n, 0, ...arr1); 
  return newArr2;
}
console.log (frankenSplice([1, 2, 3], [4, 5, 6], 1));


/* FILTERING "FALSY VALUES" (fals,null,0",undefined, NaN) ACCORDING TO NATURE IF VALUE */

function bouncer(arr) {
  let newArray = arr.filter(Boolean);
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9])); /*[7, "ate", 9] */

/*USING SORT TO DET:WHERE A NUMBER BELONGS TO IN A PASSED ARRAY */

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b); 

  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i; 
    }
  }

  return arr.length; 
}

console.log(getIndexToIns([40, 60], 50));

