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