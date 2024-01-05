
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
  