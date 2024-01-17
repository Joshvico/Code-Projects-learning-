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

/* VALIDATING US PHONES NUMBERS with TEST METHOD  */


function telephoneCheck(str) {
  // Define the regular expression for a valid US phone number
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  // Test the input string against the regex and return the result
  return phoneRegex.test(str);
}

// Examples of usage:
console.log(telephoneCheck("555-555-5555"));       // true
console.log(telephoneCheck("(555)555-5555"));     // true
console.log(telephoneCheck("(555) 555-5555"));    // true
console.log(telephoneCheck("555 555 5555"));      // true
console.log(telephoneCheck("5555555555"));        // true
console.log(telephoneCheck("1 555 555 5555"));    // true
console.log(telephoneCheck("800-692-7753"));      // true
console.log(telephoneCheck("8oo-six427676;laskdjf")); // false

/* CASHIER  FINAL PROJECT */
function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let changeDue = cash - price;
  let totalCid = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = totalCid.toFixed(2);

  if (parseFloat(totalCid) < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (parseFloat(totalCid) === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    let changeArray = [];

    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const unitName = currencyUnits[i][0];
      const unitValue = currencyUnits[i][1];
      const availableAmount = cid[i][1];
      let numberOfUnits = (availableAmount / unitValue).toFixed(0);

      if (numberOfUnits > 0) {
        let returnedAmount = 0;

        while (changeDue >= unitValue && numberOfUnits > 0) {
          changeDue -= unitValue;
          changeDue = changeDue.toFixed(2);
          returnedAmount += unitValue;
          numberOfUnits--;
        }

        if (returnedAmount > 0) {
          changeArray.push([unitName, parseFloat(returnedAmount)]);
        }
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: changeArray };
    }
  }
}

// Test cases
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));




