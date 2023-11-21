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
  var ending = str.substring(str.length - target.length) /* Extracts the length postion "wello, wolrd" 13 - 5"wordl" = 8 and from 8 and till end substring is extracted */

  return ending === target; /* cheks if  ending is === to target passed */
}

console.log (confirmEnding("Hello,World", "world"));

/* ************** PROPOSE but IWTH "endswith()" METHOD************************************ */


function confirmEnding(str, target) {
  return str.endsWith(target);
}
console.log(confirmEnding("Hello, World", "World")); 


/* REPETING num AMOUNT OF TIMES STRING WITH LOOP  */
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }

  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
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

/* TUNCRATE A STRING WITH SLICE() METHOD */

function truncateString(str, num) {
  if (str.length <= num) {
    // No truncation needed, return the original string
    return str;
  } else {
    return str.slice(0, num) + "..."; /* it takes str from index 0 to the set num as argument */
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

/* ANALYZING ARRAY ELEMENTS THAT MATCH A FUCNTION */

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) { /* check is arr element examined = true thefore compatible with the funciton provide as argument */
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

/* TURNING EACH 1st LETTER OF WORD CAPITAL with MAP charat ()+toLowerCase +toUpperCase +slice() +join */

function titleCase(str) {
  const lowerCaseStr = str.toLowerCase(); /* puts every letter into lowercase */
  const wordsArray = lowerCaseStr.split(" "); /* splits the str separte words after each separation (" ")*/
  const capitalizedWords = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)); /* word is a local var to represent each word it every 0 positon word character and turn it to UpperCase and + adds the rest of characters from 1 positon until the end of the word */
  const result5 = capitalizedWords.join(" "); /* join back from Array to String with a " " per word  */
  return result5;
}

const result5 = titleCase("I'm a little tea pot"); 
console.log(result5);  // Output: "I'm A Little Tea Pot"

/* ************************************** Optimize version***************************** */
function titleCase(str) {
  return str /* this is an optimize versio to include all action after return */
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));  // Output: "I'm A Little Tea Pot"

/* USING SLICE AND SPLICE METHOD TO INLCUDE ARRAY PART OF ARRAY INTO A COPY OF AN ARRAY */

function frankenSplice(arr1, arr2, n) {
  const newArr2 = arr2.slice(); /* Slice creates a copy that will be modified. the vaules in () are empty as we want to copy whole arrar */
  newArr2.splice(n, 0, ...arr1); /* spread operator is needed to merge the new numbers inside the new Array otherwise it will included as a multilevel arrays [n,n[n,n,n]n,n,n]*/
  return newArr2;
}
console.log (frankenSplice([1, 2, 3], [4, 5, 6], 1));


/* FILTERING "FALSY VALUES" (fals,null,0",undefined, NaN) ACCORDING TO NATURE IF VALUE */

function bouncer(arr) {
  let newArray = arr.filter(Boolean); /* it turns all values in Booleans to be examened and then filtered to a newArray */
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9])); /*[7, "ate", 9] */

/*USING SORT TO DET:WHERE A NUMBER BELONGS TO IN A PASSED ARRAY */

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b); /* sort is sued to sort in ascending order */

  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) { /* if nume is smaller or equal iterated arr.num (i) return position where it should go */
      return i; /* this is how we return the index */
    }
  }

  return arr.length; /* is case num entered is bigger it prints the whole array indicating that the number should be placed at the end */
}

console.log(getIndexToIns([40, 60], 50));

/* CHEKING IF 2 ELEMENTS IN SAME ARRAY HAVE SAME LETTERS OR PARTIALY  USING ******** INDEXOF and -1*/

function mutation(arr) {
  var str1 = arr[0].toLowerCase(); /* first transofrm both arr elements in lower case inside the funciton as mayus will be chelked as different */
  var str2 = arr[1].toLowerCase();

  for (var i = 0; i < str2.length; i++) { /* we run a loop that cheks length of str2 */
    if (str1.indexOf(str2[i]) === -1) { /* the indexOf -1 is used as a false trigger.... it is runned like this as is more efficient 1st not matching letter the loops stops running */
      return false;
    }
  }

  return true; /* if no mismatch is found then it will run the whole element to return true */
}

console.log(mutation(["hello", "ello"])) /*  it will return true as ello is inside arr[0] */

/* BREAKING ARRAY INSUBARRAY WITH SLICE METHOD AND FOR LOOP  */

function chunkArrayInGroups(arr, size) {
  let chunks = [] /* create a variable to store new array */
  for(let i = 0; i < arr.length ; i+=size) { /* it will run thorugh the array and will be running through index +or equal size value */
    var startIndex = i;
    var subarr = arr.slice(startIndex, startIndex + size);
    chunks.push(subarr);
  }
  return chunks;
}

console.log (chunkArrayInGroups(["a", "b", "c", "d","e","r","5","8"], 3));