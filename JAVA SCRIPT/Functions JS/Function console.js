
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

function randomWholeNum() {
  return Math.floor(Math.random()*10); /* math.floor will round numbers and neverereturn on 1 in this case it will return a number from 0 to 9 // check concept in notes */
}

console.log (randomWholeNum());

/* RANDOM NUMBER INSDE RANGE */
function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; /* This equation takes a random number * the result of max numbe - myMin + 1 round the number with floor and then sum to my Min */
}

console.log (randomRange(2, 20));

/* CONDITIONAL OPERATOR */

function checkEqual(a, b) { /* this is a way to use conditional operator to wirht if else statmenet   */
  return a == b ? "Equal" : "Not Equal";   /* first part is condition finnished wiht ? and the the rest is the return if true and the return if false */
  }

  checkEqual(1, 2);
  console.log (checkEqual(1, 2));

  /* MUTLIPLE CONDITONAL OPERATOR */

  function checkSign(num) {
    return (num > 0) ? "positive" /* separating statmenet is best practice for reaidng porposes */
    : (num < 0) ? "negative"
    : "zero"; /* this will execute when above conditions is false */
   }
   console.log (checkSign());


   /* RECURSION COUNT DOWN */
function countdown(n){
  if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1); 
      countArray.unshift(n); /* unshift is to remove so countdown will start from bigger to minor */
      return countArray;}
  function checkScope() {
    let i = 'function scope'; /* i is declared here with this value as is let is in this function {}scope the we can declare i again with another value as the scoend let i is on inside expresion scope */
    if (true) {
      let i = 'block scope'; /* The scoep of i value is inside this boolean */
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
}

  console.log (countdown(10)); /* ^[10......1] */

    /* RECURSIVE COUNTDOWN WITH 2 PARAMETERS */

  function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
      } else {
        const rangeArray = rangeOfNumbers(startNum,endNum - 1); 
        rangeArray.push(endNum); 
        return rangeArray;
      }
  }  

  console.log (rangeOfNumbers(1,5));
  function checkScope() {
    let i = 'function scope'; /* i is declared here with this value as is let is in this function {}scope the we can declare i again with another value as the scoend let i is on inside expresion scope */
    if (true) {
      let i = 'block scope'; /* The scoep of i value is inside this boolean */
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  console.log ( checkScope());

    /* MUTING CONST WITHN CONST (ARRAYS) */

    const s = [5, 7, 2];
    function editInPlace() {
    s[0] = 2; /* const is mutable only when the declaration of the Array value points to himself like here
    */
    s[1] = 5;
    s[2] = 7;
    return s;
    }
    console.log (editInPlace()); /* it will return 2,5,7 as the new assignation could done by potinting him self*/