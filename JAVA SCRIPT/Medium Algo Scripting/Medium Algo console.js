/* USING MATH.MAX + MATH.MIN TO FIND MAX VALUES AND MIN VALUES AND RUNNING LOOP ADD ALL NUMBERS IN BTW AN ARR  */

function sumAll(arr) {
  let maximo = Math.max(arr[0],arr[1]); 
  let minimo = Math.min(arr[0],arr[1]);
let total = 0
  for (let i = minimo; i <= maximo ; i++ ) {
    total +=i; 
  }
 return total ;
}

console.log(sumAll([1, 4])); /* it will return 10 as the sum of all the number in btw 1 and 4 */
/* ****************************************************** OTHER VERSION WITH MORE ARRAY VALUES */
function sumAll2(arr) {
  let maximo = Math.max(arr[0],arr[1],arr[2],arr[3]);
  let minimo = Math.min(arr[0],arr[1],arr[2],arr[3]);
let total2 = 0
  for (let i = minimo; i <= maximo ; i++ ) { 
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
    if (!arr2.includes(arr1[i])) { 
      newArr.push(arr1[i]); 
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
  return arr1 
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);  /* it will print 4 */

/* USING "FILTER " + INCLUDES METHOD + SPREAD ARGUMENT TO ACCEPT MULTIPLE NUMBER OF NOT DEFINE ARGUMENTS */

function destroyer(arr, ...x) {
  return arr.filter(item => !x.includes(item)); 
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/* USING FILTER AND EEVRY METHOD TO CHECK MATCHING KEY VALUE PAIRS IN OBJ */

function whatIsInAName(collection, source) {
  let coincidenceArr = [];

  for (let i = 0; i < collection.length; i++) {
    // Check if all key-value pairs in source are present in collection[i]
    let isMatch = true;

    for (let key in source) {
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
const collection = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];
const source = { last: "Capulet" };

const result = whatIsInAName(collection, source);
console.log(result); // Output: [ { first: 'Tybalt', last: 'Capulet' } ]

/* ****************************** OTHER MODER EFFICIENT WAY**************** */

function whatIsInAName(collection, source) {
  return collection.filter(obj =>
    Object.keys(source).every(key => obj[key] === source[key])
  );
}
console.log(result); // Output: [ { first: 'Tybalt', last: 'Capulet' } ]

/* COMBINING REGULAR EXPRESSIONS + STING AND ARRAY EMTHODS + REPLACE TO DIFFERECIATE IN BETWEEN LETTERS  */

function spinalCase(str) {/* SpinalCase means everthing to lowercase */

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-") 
    .toLowerCase(); 
}

/* ************************* Addinn if statement to avoid all sting lowers case and no spaces************* */

function spinalCase(str) {

  if (str == /\s|_|(?=[A-Z])/) {
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
      let consonantRegex = /^[^aeiou]+/;
      let myConsonants = str.match(consonantRegex);
      return myConsonants !== null
        ? str
            .replace(consonantRegex, "")
            .concat(myConsonants)
            .concat("ay")
        : str.concat("way");
    }
    function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift(); // Remove the first element
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; })); 
    console.log(translatePigLatin("clone")); /* it will print oneclay */

/* REPLACING ONE WORD FOR ANTOHER + KEEP SAME FORMAT */

    function myReplace(str, before, after) {
      var beforeIndex = str.indexOf(before);
      
      if (str[beforeIndex] === str[beforeIndex].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
      } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
      }
      str = str.replace(before, after);
  
      return str;
  }
  
  /* **************************************************** Anotherway with different metohds + regularexp*********************** */

  function myReplace2(str, before, after) {
      if (/^[A-Z]/.test(before)) {
          after = after[0].toUpperCase() + after.substring(1);
      } else {
          after = after[0].toLowerCase() + after.substring(1);
      }
      return str.replace2(before, after);
  }
 
 /* PARING DNA PAIRS IN A  2 DIMENSIONAL ARRAY TO MATCH THE PAIR PASTED IN ARGUMENT with SWITCH AND FOR LOOP*/

  function pairElement(str) {
    let pairs = [];
  
    for (let i = 0; i < str.length; i++) {
      let currentBase = str[i];
  
      switch (currentBase) {
        case "A":
          pairs.push(["A", "T"]);
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
        default:
          break;
      }
    }
  
    return pairs;
  }
  
  console.log(pairElement("GCG"));

/* SEARCHING FRO MISSING LETTER IN THE ALPHABET  ".CharCodeAt Method" + For Loop ASCII code */
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
  function uniteUnique(...arr) {
    let arrayResult = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        const currentElement = arr[i][j];
  
        if (arrayResult.indexOf(currentElement) === -1) {
          arrayResult.push(currentElement);
        }
      }
    }
  
    return arrayResult;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); /* it will return unique values in the same order [ 1, 3, 2, 5, 4 ], those repeated (indexOf 1) are not pushed  */

  /* USIGN SWITCH TO REPLACE SPECIAL CHARACTER INTO THEIR HMTL code VALUES */

  function convertHTML(str) {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      let currentChar = str[i]; 
  
      switch (currentChar) {
        case "&":
          result += "&amp;";  
          break;
        case "<":
          result += "&lt;";
          break;
        case ">":
          result += "&gt;";
          break;
        case "'":
          result += "&apos;";
          break;
        case "\"":
          result += "&quot;";
          break;
        default:
          result += currentChar;
          break;
      }
    }
      return result;
  }
  
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
  
  /*Same fucntion as previous Another way  */
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


   /* CALCULATING THE FIBONACCI SEQUENCE with WHILE LOOP */
  
    function generateFibonacciLoop(n) {
      let fibonacciArray = [0, 1]; 
    
      for (let i = 2; i < n; i++) { 
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
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
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift(); // Remove the first element
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; })); 