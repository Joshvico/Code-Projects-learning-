/* PALINDROME CHECK */

function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let modifyingStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); /* Replace method (type of charcater to replace , Which thing to put instead --> in this case "" is nothing so we are just eleminitating charcter that meets regex condiiton (non-alpahnumerical) ) */

  // Compare the original string with its reverse
  return modifyingStr === modifyingStr.split("").reverse().join("");
}

console.log(palindrome("race*cyr")); /* it returns true/ boolean as it return the condition that is defined if met */

/* *********************************** Same but returning TRANSFORMED STERING************************** */

function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let modifyingStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Return the modified string
  return modifyingStr;
}

console.log(palindrome("race*car")); /* it will return "racecar" */

/* ROMAN NUMBER CONVERTER (num to Roman) */

function intToRoman(num) {
  const romanNumerals = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"]
  ];

  let result = '';
  let digit = 0;

  while (num > 0) {
    const currentDigit = num % 10;
    result = romanNumerals[digit][currentDigit] + result;
    digit++;
    num = Math.floor(num / 10);
  }

  return result.toUpperCase(); /* keep in mind you can always implement mthods by the rturn too */
}

// Example usage
console.log(intToRoman(3549)); // Output: "MMCMXLIX"


/* ****************************************************Other way */
function convertToRoman(num) {
  const romanNumerals = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  };

  const sortedKeys = Object.keys(romanNumerals).sort((a, b) => romanNumerals[b] - romanNumerals[a]);

  let roman = "";

  for (let key of sortedKeys) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }

  return roman;
}

console.log(convertToRoman(3));  // Output: "III"
console.log(convertToRoman(4));  // Output: "IV"

/* CAESARS CIPHER OR SHIFT CIPHER RUNI CODE OT 13  WITH **************String.fromCharCode() METHOD */

function rot13(str) {
  return str.replace(/[A-Z]/g, function (c) { /* It will only replace those characters that are letter and capital, so we don't need any excluded other characters or speacial  */
    return String.fromCharCode(((c.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26) + 'A'.charCodeAt(0)); /* String.fromCharCode turns coded letter into String equivalent following rot 13 */
  });
}

const encodedString = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.";
const decodedString = rot13(encodedString);

console.log(decodedString); // Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
