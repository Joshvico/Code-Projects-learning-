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

