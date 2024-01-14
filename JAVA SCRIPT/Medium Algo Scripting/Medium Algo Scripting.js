
/* USING MATH.MAX + MATH.MIN TO FIND MAX VALUES AND MIN VALUES AND RUNNING LOOP ADD ALL NUMBERS IN BTW AN ARR  */

function sumAll(arr) {
  let maximo = Math.max(arr[0],arr[1]); /* we declare a variable to use math.max method and acces the array as shown in "( arr[0])"  */
  let minimo = Math.min(arr[0],arr[1]);
let total = 0
  for (let i = minimo; i <= maximo ; i++ ) {  /* it establish the min and it does not reach the max value you itarate and then sum and push the i value to total 2  */
    total +=i; /* keep in mind that push os not needed as it is not an array */
  }
 return total ;
}

console.log(sumAll([1, 4]));/* it will return 10 as the sum of all the number in btw 1 and 4 */
/* ****************************************************** OTHER VERSION WITH MORE ARRAY VALUES */
function sumAll2(arr) {
  let maximo = Math.max(arr[0],arr[1],arr[2],arr[3]);
  let minimo = Math.min(arr[0],arr[1],arr[2],arr[3]);
let total2 = 0
  for (let i = minimo; i <= maximo ; i++ ) { /* it establish the min and it does not reach the max value you itarate and then sum and push the i value to total 2  */
    total2 +=i;
  }
 return total2 ;
}

console.log(sumAll([1,4,6,8])); /* it will return 36 as the sum of all the number in btw 1 and 8 */

/* USING INCLUDE METHOD TO COMPARE ARRAYS AVALUES AND FILTER THEM  2 POTENTIAL SOLUTIONS*/
function diffArray(arr1, arr2) {
  const newArr = [];
  // Check elements in arr1 that are not in arr2
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) { /* this is the way we type inlcude. method..... see that the negative statement start in the beginning */
      newArr.push(arr1[i]); /* you are accessing the current index inside the array and push it if it meets if statment */
    }
  }
  // Check elements in arr2 that are not in arr1
  for (let j = 0; j < arr2.length; j++) {
    if (!arr1.includes(arr2[j])) {
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); /* it will print 4 */

/* ***************************************************************************** FCC Solution which uses "filter + concat" */

function diffArray(arr1, arr2) {
  return arr1 /* in order to concatenate you need first to return the array and the use "concat" method to "concat" */
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item)); /* || acts like "or" for the two true conditions   */
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);  /* it will print 4 */

/* USING "FILTER " + INCLUDES METHOD + SPREAD ARGUMENT TO ACCEPT MULTIPLE NUMBER OF NOT DEFINE ARGUMENTS */

function destroyer(arr, ...x) { /* ...x (spread operator) allows me to not determeine an defined number of agrument that can be passed in th console */
  return arr.filter(item => !x.includes(item)); /* here I accces the arr with filter method and then define the condition which to filter element that do not  match value from ...x agruments */
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/* USING FILTER AND EEVRY METHOD TO CHECK MATCHING KEY VALUE PAIRS IN OBJ */

function whatIsInAName(collection, source) {
  let coincidenceArr = [];

  for (let i = 0; i < collection.length; i++) {
    let isMatch = true;
    for (let key in source) { /* for in to check inside trying the false condition (best practise) as if will stop once finding a coincidence  */
      if (collection[i][key] !== source[key]) {
        isMatch = false;
        break; // Break the loop early if a mismatch is found
      }
    }

    if (isMatch) {
      coincidenceArr.push(collection[i]);
    }
  }

  return coincidenceArr;
}

// Example usage:
/* const collection = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];
const source = { last: "Capulet" };

const result = whatIsInAName(collection, source);
console.log(result); // Output: [ { first: 'Tybalt', last: 'Capulet' } ] */

/* ****************************** OTHER MODER EFFICIENT WAY****************  WITH OBJECT.KEYS METHOD FILER AND EVERY METHOD COMBINAED*****************/

function whatIsInAName2(collection, source) {
  return collection.filter(obj =>
    Object.keys(source).every(key => obj[key] === source[key]) /* object.keys retunrs object values as an array and  */
  );
}
console.log(whatIsInAName2([
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
],{ last: "Capulet" })); // Output: [ { first: 'Tybalt', last: 'Capulet' } ]

/* COMBINING REGULAR EXPRESSIONS + STING AND ARRAY EMTHODS + REPLACE TO DIFFERECIATE IN BETWEEN LETTERS  */

function spinalCase(str) {/* SpinalCase means everthing to lowercase */

  return str
    .split(/\s|_|(?=[A-Z])/) /* This will turn string into array and separating by spaces or _ or Capital letters if any ?= */
    .join("-") /* join back and adding "-" */
    .toLowerCase(); /* everything to lower case */
}

/* ************************* Addinn if statement to avoid all sting lowers case and no spaces************* */

function spinalCase(str) {

  if (str == /\s|_|(?=[A-Z])/) { /* if string does not have any capital, spaces, _ it will not be valid */
    return "try again";
  }
  
  return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  
  }
  console.log(spinalCase('This Is Spinal Tap'));

  /* MOVING LETTERS AND GROUPS OF LETTERS AND COCANTING SUFIXES */

  function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;  // matches one or more consecutive non-vowel characters at the beginning of the string.

    let myConsonants = str.match(consonantRegex);// Check if a consonant cluster is found.
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "") // If a consonant cluster is found, remove it from the beginning of the string
          .concat(myConsonants)
          .concat("ay")// concatenate it to the end, and add "ay" at the very end.
      : str.concat("way");
  }
  
  console.log(translatePigLatin("clone")); /* it will print oneclay */

  /* REPLACING ONE WORD FOR ANTOHER + KEEP SAME FORMAT */

  function myReplace(str, before, after) {
    var beforeIndex = str.indexOf(before); /* finding the index of the string from BEFORE argument */
    
    if (str[beforeIndex] === str[beforeIndex].toUpperCase()) { /*  checking if first latter from BEFORE is UpperCase --> don't forget () on method */
      
      after = after.charAt(0).toUpperCase() + after.slice(1); /* charAt returns the character at specific index // Slice the rest of After string to form the complete word */
    } else { /* method will not modify the original but bring a modified copy in order to modify the original we need slice (1) form 2nd character and the rest of the After string */
      after = after.charAt(0).toLowerCase() + after.slice(1); /* as you can see you can concatenate metohd with + */
    }
    str = str.replace(before, after);    // Now replace the original str with the edited one.

    return str;
  }

  /* **************************************************** Anotherway with different metohds + regularexp*********************** */
  function myReplace2(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) { /* test is used in regex to check if conditons form regular are met */
      after = after[0].toUpperCase() + after.substring(1) /* substring extracta a portino from index until margin defined with a 2nd argument */
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
      return str.replace2(before, after);
  }
  
  /* PARING DNA PAIRS IN A  2 DIMENSIONAL ARRAY TO MATCH THE PAIR PASTED IN ARGUMENT with SWITCH AND FOR LOOP*/
  function pairElement(str) {
    let pairs = [];
  
    for (let i = 0; i < str.length; i++) {
      let currentBase = str[i]; /* for our switch statement is important to pass the inddex as a value to go thourg the array and jump to the switch statments */
  
      switch (currentBase) { /* the parentesis holds the value of the variable that i will test any consition */
        case "A":
          pairs.push(["A", "T"]); /* it create a new array so we push the pair values per each case */
          break;
        case "T":
          pairs.push(["T", "A"]);
          break;
        case "C":
          pairs.push(["C", "G"]);
          break;
        case "G":
          pairs.push(["G", "C"]);
          break;
        default:/* Do not forget default break */
          break; 
      }
    }
    return pairs;
  }
  
  console.log(pairElement("GCG")); /* it will print [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]   */
  
  /* SEARCHING FRO MISSING LETTER IN THE ALPHABET  ".CharCodeAt Method" + For Loop + ASCII code*/
  function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      /* code of current character */
      const charCode = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          then a letter was skipped */
      if (charCode !== str.charCodeAt(0) + i) {
        /* if current character skipped past a character find previous character and return */
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }
  
  // test here
  fearNotLetter("abce"); /*  ti will retunr "d" */

  /* SORTING ARRAYS TO RETUN UNICHE VALUES AND AVOID REPEATED with "IndexOF" and lopps (dimensional array), structure ...argument */

  function uniteUnique(...arr) { /* destructure argument to accept as many argument as wanted  */
    let arrayResult = [];
  
    for (let i = 0; i < arr.length; i++) { /* " loops are needed because of the array levels in this case 2 dimensional arrays" */ /*  this one iterates throuh arrays */
      for (let j = 0; j < arr[i].length; j++) { /* this loop iterates through the individual values of eahc array */
        const currentElement = arr[i][j]; /* we have to create this variable to impoersnate the individual value of each array during the loop */
  
        // Check if the element is not already in the result array
        if (arrayResult.indexOf(currentElement) === -1) { /* checks if value of current index is there or not (if yes indexOf = 1 if not = -1) */
          arrayResult.push(currentElement);
        }
      }
    }
    return arrayResult;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); /* it will return unique values in the same order [ 1, 3, 2, 5, 4 ], those repeated (indexOf 1) are not pushed  */

  /* USIGN SWITCH TO REPLACE SPECIAL CHARACTER INTO THEIR HMTL code VALUES */

  function convertHTML(str) {
    // Create an empty string to store the result
    let result = "";
  
    // Iterate through each character in the input string
    for (let i = 0; i < str.length; i++) {
      // Get the current character
      let currentChar = str[i]; /* spots current postion of the character itaret trhoug the loop */
  
      // Check the current character and convert it to HTML entity if needed
      switch (currentChar) {
        case "&":
          // If the current character is '&', add '&amp;' to the result
          result += "&amp;"; /******************************* this add to result whole characters one by one and when & is found replces it as an addition*/
          break;
        case "<":
          // If the current character is '<', add '&lt;' to the result
          result += "&lt;";
          break;
        case ">":
          // If the current character is '>', add '&gt;' to the result
          result += "&gt;";
          break;
        case "'":
          // If the current character is "'", add '&apos;' to the result
          result += "&apos;";
          break;
        case "\"":
          // If the current character is '"', add '&quot;' to the result
          result += "&quot;";
          break;
        default:
          // If the current character is none of the specified, add it to the result as is
          result += currentChar;
          break;
      }
    }
      return result;
  }
  
  // Test the function with an example
  console.log(convertHTML('Dolce & Gabbana')); /*  it will return Dolce &amp; Gabbana */

    /* SUMING ALL ODD NUMBRES FROM FIBONACCIO with WHILE LOOP  */
    function sumFibs(num) {
      let prev = 0;
      let current = 1;
      let sum = 0;
    
      while (current <= num) {
        if (current % 2 !== 0) {
          sum += current;
        }
    
        const next = prev + current;
        prev = current;
        current = next;
      }
    
      return sum;
    }
    
    // Example: Call sumFibs with the argument 10
    console.log(sumFibs(10)); // Output: 10  (1,1,3,5)
    
    /*Same fucntion as previous another way******************************************************** 2 */
    function sumFibs2(num) {
      let prevNumber = 0;
      let currNumber = 1;
      let result = 0;
      while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
          result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
      }
    
      return result;
    }
  
    console.log(sumFibs2(4)); // Output: 5 

  /*Same as previous but with for loop*************************************************************************** 3 */

function sumFibs3(num) {
  let prev = 0;
  let current = 1;
  let sum = 0;

  for (; current <= num;) { /* interesting line to keep in mind that you can initate a for loop without the 1st and rd argument as you have it previusly deifned with the variable above */
    if (current % 2 !== 0) {
      sum += current;
    }

    const next = prev + current;
    prev = current;
    current = next;
  }

  return sum;
}

// Example: Call sumFibs with the argument 10
console.log(sumFibs(10)); // Output: 10
  
    /* CALCULATING THE FIBONACCI SEQUENCE */
  
    function generateFibonacciLoop(n) {
      let fibonacciArray = [0, 1]; /* the fibonacci is incilized with the 2 first values of the Fibo seq. */
    
      for (let i = 2; i < n; i++) { /* we initialize i at value 2 beacsue we already have the first 2 numbers  */
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2]; /* this calculates the next value by adding the previous first value (i -1) + the previous 2nd values (i -2) */
      }
    
      return fibonacciArray;
    }
    
    // Example: Generate the first 10 Fibonacci numbers
    console.log(generateFibonacciLoop(10));/* [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]*/


/* SUMMING ALL PRIME NUMBERS THAT COMPUES X NUMBER with Math.sqrt (math method) FOR LOOP and %== REMINDER */

function sumPrimes(num) {
  // Helper function to check if a number is prime
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Sum all prime numbers up to num
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

 // Sum of primes less than or equal to 10
 console.log(sumPrimes(10)); // Output: 17

/* ************************************************* MATH SQRT *************************** */

let number = 25;
let squareRoot = Math.sqrt(number); /* it provide the root square of a number  */

console.log(squareRoot); // Output: 5

/* FINDING THE SMALLEST COMMON MULTIPLE WITH Math.max // Math.min  */
function smallestCommons(arr) {
  // Find the range of numbers in the array
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // Helper function to find the least common multiple of two numbers
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Helper function to find the greatest common divisor of two numbers
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Calculate the least common multiple for the entire range
  let result = min;
  for (let i = min + 1; i <= max; i++) {
    result = lcm(result, i);
  }

  return result;
}
// Example usage:
console.log(smallestCommons([1, 5])); // Output: 60

/* ELIMITATE VALUES FROM GIVEN ARR THAT DO NOT MEET CONDITIONS OF GIVEN FUNCTION */

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) { /* while (arr.length > 0 && !func(arr[0])): This means "while the array is not empty and the result of applying the function func to the first element of the array is false, continue the following block of code." */
    arr.shift(); // Remove the first element
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; })); 

/* FLATTENING Array with "Array.isArray" MEthod a recursive function */
function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i])); /* to access as many array deeplebel as provided so it will not need to be har coded  */
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

// test here
steamrollArray([1, [2], [3, [[4]]]]);

/* *********************************FLATTENING Array DATA WITH Array.isArray + Terniary function + recursive funciton */

function steamrollArray(arr, flattenArr = []) {
  for (let i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) {
        steamrollArray(arr[i], flattenArr);
     } else {
        flattenArr.push(arr[i]);
     }
  }
  return flattenArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

/* TRUNING BINARY CODE INTO READBLE STRING */

function binaryAgent(str) {
  var biString = str.split(" "); /* separation is important to split the binary code in small chunks */
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2))); /* once turned in decima String.fromCharCode() turns the string into it equivalent ins ASCII code --> parseInt(splitString[i], 2) turn evry chunk currently ierated in to decimal ASCII equivalent*/

  }

  // we then simply join the string
  return uniString.join("");
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

/* ACCESING AN OBJECT TO CHECK IF ALL RPOPERTIES VALUES ARE TRUE  with LOOP + ACCESING OBJ SINTAX*/
function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      return false;  // If any value is falsy, return false
    }
  }
  return true;  // If all values are truthy, return true
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));

/* ************************************************** another way with .EVERY METHOD */
function truthCheck2(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]); /* acces every obj to see if all of properties are aligned with pre value either true or false */
}

console.log(truthCheck2([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
