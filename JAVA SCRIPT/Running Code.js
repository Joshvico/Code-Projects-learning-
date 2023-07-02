/* KATERINA PROFILE INFO*/ 

const FISRTNAME = "Katerina";
const LASTNAME = "Turkova";
const NATIONALITY = "Czech";
var age = 28;
var allInfo = [FISRTNAME, LASTNAME, NATIONALITY, age];

console.log (allInfo);
/*  ****************************** */
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

console.log (a +c);

/*  ****************************** */

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

console.log (myStr);

/* TEST CONCATENATING STRINGS with + */

const myStr2 = "This is the start." + " This is the end."

console.log (myStr2);

/* [] SPECIFIC VALUE FROM STRING  */
let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[5]
console.log (firstLetterOfLastName);

/* CREATING WORD BLANKS with + */
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks= "My " +  myNoun + " " + myVerb + " across the " + myAdjective + " field" + " very " + myAdverb + "."; /* Separate variables with " " as space */
console.log(wordBlanks);

/* JS ARRAYS */

const sandwich = ["peanut butter", "jelly", "bread"];

const myName= "Josep Vidal";
let myAge = 30;
const myNationality = "Spanish";
const myGender = "Men";

const myArray = [myName, myAge, myNationality, myGender];

console.log(myArray);

/* MULTIDIMENSIONAL ARRAYS */

const myArray2 = [["t-shirt", 30], ["pants", 80], ["shoes", 40], ["glasses", 20]];
console.log (myArray2);

/* CHANGING ARRAY WITH INDEX */

const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log (ourArray);

/* ACCESING MULTIDIEMSNIONAL ARRAYS */

const myArray4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray4[3][0][2]; 

console.log (myData);

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

console.log (element); /* this is the exrcice */


