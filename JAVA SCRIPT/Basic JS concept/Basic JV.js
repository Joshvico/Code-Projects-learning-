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

a += 12;
b += 9;
c += 7;


