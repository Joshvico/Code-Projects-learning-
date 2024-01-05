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

/* SEARCHING FRO MISSING LETTER IN THE ALPHABET */
  