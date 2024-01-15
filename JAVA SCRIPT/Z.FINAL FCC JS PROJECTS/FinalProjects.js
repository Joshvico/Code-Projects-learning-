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