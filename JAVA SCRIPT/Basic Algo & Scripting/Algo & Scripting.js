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
console.log(factorialize(3)); // Output: 120