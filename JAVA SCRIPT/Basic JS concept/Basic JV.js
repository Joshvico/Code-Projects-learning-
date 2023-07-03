// This inline commment

/* This is Multi-line ---> short cut for comment SHIFT+ALT+A 
 commnet*/

 var MyName; //declaring variable//

 var a; /* first declaring a varaible with a name in this case "a" */
 a=7; /* Then you store value of 7 by assigning this value with = */

 /* ASSIGNIN VALUE TO ANOTHER VARIABLE  */
 var a;
a = 7;
var b;
b = a;

/* INITIALIZING VAIRBALE WITH = */

var a = 9;

/* DECLARING STRINGS */

var myFirstName = "Josep Vidal"; 
var myLastName = "Cortés Ovide";

/* BEST PRACTICES CamelCasing */

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/* USING LET to AVOID OVERWIRTTING VARIABLES VALUE */

var camper = "James";
var camper = "David";
console.log(camper); /* The problem is that with var we accidentaly overwirtten this variable Camper */

let catName = "Oliver";
let catSound = "Meow!"; /* By using let only a unique value can be asigned to catSound  */

/* CONST TO DECLARE ONLY READ VARIABLES */

const FCC = "freeCodeCamp"; // Name of Variable all uppercase to indentify constant variable ** best practices//
let fact = "is cool!"; 
let fact1 = "is awesome!";
console.log(FCC, fact);

/* CALCULATING VALUES IN JS */

const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient1 = 66 / 33;

/* INCREMENTING VALUES +1 with ++ // -- an others  */
let myVar = 87;

myVar++; /* this is equal 88 is the same as the line below */
                                          myVar = myVar + 1;
let myVar1 = 11;
myVar--; /* this is equal 10 */

/* STORING DECIMALS (FLOATING CONCEPT)  & CALCULATING */
const ourDecimal = 5.7;

var myDecimal = ourDecimal; // myDecimal has stored value of 5.7 //

const product2 = 2.0 * 2.5; // =5 //
const quotient = 4.4 / 2.0; //=2.2//

/* REMINDER OPERATOR % */

const remainder = 11 % 3; // this is reaminader of 2 //

/* += CALCULATING DECLARED VARIANLES WITH NUMBER*/

let a = 3;
let b = 17;
let c = 12;
/* +=  */

a += 12;
b += 9;
c += 7;

/* -=  */

a -= 6;
b -= 15;
c -= 1;

/* *=  */

a *= 5;
b *= 3;
c *= 12;

/* /=  */

a /= 5;
b /= 3;
c /= 12;

/* USING SINGLE QUTATIO ' and "" to remove BACKSLAGES */

/* const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>"  ///// This is the initial line with \ from exercices without ' */
const myStr = '<a href= "http://www.example.com" target="_blank">Link</a>'; /* when using ' all \ can be deleted as they are not scaping */

/* INSERTING SPECIAL CHARACTERS CORRECTLY  \n \t \r .... */

const myStr1 = "FirstLine\n\t\\SecondLine\nThirdLine";

/* CONCATENATING STRING WITH + OPERATOR */

const myStr2 = "This is the start." + " This is the end." /* my teh separattion in between strings */

/* CONCATENATING STRING WITH += OPERATOR */

let myStr3 = "This is the first sentence."; /* This helps to separate a string that is toolong */
myStr3 += " This is the second sentence.";

/* BULDING STRING WITH DECLARED VARIABLES */

const myName = "Josep Vidal";
const myStr4 = "My name is " + myName + " and I am well!";

/* APPENDING VARIABLES to STRINGS */

const someAdjective = "great";
let myStr6 = "Learning to code is ";

myStr += someAdjective; /* This will unify the two variable values and print Learning to code is great. */

/* FIND THE LENGHT OF THE STRING WITH .LENGTH */

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length; /* You can apply console.log values by typping = and the info you try to print */
console.log (lastName.length);/* 8 is the value that will print */

/* USGIN  [] to FINDING SPECIFIC VALUE OF STRING  ININTAL + ANY + LAST (-1)*/

let firstLetterOfLastName = "";
const lastName1 = "Lovelace";

firstLetterOfLastName = lastName[0] /* JS is refferred as Zero-based indexing */


const lastName2 = "Lovelace";

const thirdLetterOfLastName = lastName[2]; /* V will be the value pint We can extract the same info from different positions // mind zero indexing */



const lastName3 = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length-1] /* in case of going backwards the Zero index does not apply + you should use .lengt and specify name of the variable */

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* JS ARRAYS */

const sandwich = ["peanut butter", "jelly", "bread"];

const myNamex= "Josep Vidal";
let myAge = 30;
const myNationality = "Spanish";
const myGender = "Men";

const myArray = [myName, myAge, myNationality, myGender]; /* when console it prints values correctly but with  [] pending research */

/* JS ARRAYS WITHIN OTHER ARRAYS --> MULTIDIMENSIONAL ARRAYS */

const myArray2 = [["t-shirt, 30"], ["pants", 80], ["shoes, 40"], ["glasses", 20]]; /* List of items bought mind the gap between [] and values stored after, */

/* ACCESSING ARRAY DATA WITH INDEXES */

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1]; /* The console.log(array[0]) prints 50, and data has the value 60.*/

/* MODIFYING ARRAYS WITH INDEXING VALUES */

const ourArray = [50, 40, 30];
ourArray[0] = 15; /* Now the value 0 will be 15 // even if Array is declared as const it can be changed with index */

/* ACCESING MULTIDIEMSNIONAL ARRAYS */

const myArray4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];  /* First [] is the 0 level selecting the sub-array [] indicates de value inseide sub-array if more[] selecting the nested sub-array */

/* PUSHING DATA INTO ARRAYS with .push FUNCITON */

const myArray5 = [["John", 23], ["cat", 2]];

myArray5.push(["dog",3]); /*  */

/* POPPING OUT VALUES with .pop FUNCTION */
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop(); /* it pops from last by default */
console.log(oneDown);
console.log(threeArr);

/* REMOVING FIRST VALUE with .shift FUNCTION */

const myArray7 = [["John", 23], ["dog", 3]];

const removedFromMyArray = myArray7.shift(); /* this will pop out in block the first array */

/* ADDING A VALULE AT THE BEGINING OF THE ARRAY with .unshift */

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy"); /* the main difference with .push is that it adds a element or value at the beginning// push does but last part */ 

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* DEFINING FUNCITONS AND INVOKE THEM IN JS */

function reusableFunction() { /* This is the way to define them */
  console.log("Hi World");
}

reusableFunction(); /* every time we invoke this funciton by its name console.log will print the value added on the previous definition */

/* PASSING VALUES to FUNCTIONS WITH ARGUMENTS */

function functionWithArgs(a, b) { /* Argument can only be letters that represents Names */
  console.log(a + b);
}

functionWithArgs(1,2); /* console.lo will print 3 */
functionWithArgs(7,9);

/* USING RETURN in FUNCTIONS  */

function timesFive (num) {
  return num * 5;

}

const answer = timesFive(5); /* Aquesta variables retornara el value definit per el nom num () tinguent en compte la funció definifa amb RETURN */

