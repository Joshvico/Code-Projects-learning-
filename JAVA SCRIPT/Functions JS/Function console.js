/* FUNCITONS IN JS */

function kindAnswer() { /* This is the way to define them */
  console.log("Tu puta madre!");
}

kindAnswer(); /* every time we invoke this funciton by its name console.log will print the value added on the previous definition */

/* PASSING VALUES to FUNCTIONS WITH ARGUMENTS */

function functionWithArgs(a, b) {
  console.log(a+b);
}

functionWithArgs(1,2);

functionWithArgs(34,9);


/* USING RETURN in FUNCTIONS  */

function timesFive(a) {
  return a + 7;
}
console.log (timesFive(56));/* Return funtion needs the console.log to returna a value */

/* GLOBAL SCOPE and DEFINING NONE GLOBAL VARIABLES INSED FUCNTION */

let myGlobal = 10

function fun1() {
  oopsGlobal = 5;
}

console.log(myGlobal,oopsGlobal); /* it dos not print 5 as is not inglobal check video from lesson if */
let myGlobal1 = 10

/* LOCAL SCOPE  */
function fun1() {
  var oopsGlobal1 = 5;
  console.log(oopsGlobal1);
}

fun1(); /* Since the var is declared insed the fucntino */


const outerWear = "T-Shirt";

function myOutfit() {
const outerWear = "sweater";
  return outerWear;
}

myOutfit(); 
 
/* ASSIGNING RETURN VALUE TO A VARIABLE */

let processed = 0; /* firs we initilize the variable */

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7); /* we assign the value of returned to variable processed  */
console.log (processArg(7)); /* Keep in mind when pinritng fucntion expresseed with () */

/* MATH RANDOM */

function randomFraction() {

  return Math.random ();
}

console.log (randomFraction()) /* it will return a random decimal number */
