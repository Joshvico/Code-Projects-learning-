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

console.log (a);

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

/* PUSHING DATA INTO ARRAYS .push */

const myArray5 = [["John", 23], ["cat", 2]];

myArray5.push(["dog",3]);

console.log(myArray5);

/* POPPING OUT VALUES with .pop FUNCTION */

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop(); /* it pops from last by default only */
console.log(oneDown);
console.log(threeArr);

const myArray6 = [["John", 23], ["cat", 2]];

const removedFromMyArray = myArray6.pop(); /* remove lement like array in blocsk always and only the last one */
console.log(myArray6);
console.log(removedFromMyArray);

/* .SHIFT and .UNSHIFT ADD and REMOVE THE FIRST ELEMENT OF AN ARRAY */

const ourArray3 = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

/* TESTING SHOPPING LIST */

const myList = [["tomatoes", 3], ["mozzarella", 2], ["milk", 4], ["bananas", 6], ["bread", 1]]; 

myList.shift();
myList.unshift(["rucula", 2]);
let myVegetable = myList[0]; /* There is HIRACHRY of functions if I declare avraible the the shift and unshift won´t be printed by the console */

console.log(myVegetable);

