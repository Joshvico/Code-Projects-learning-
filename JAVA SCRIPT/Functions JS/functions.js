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


/* GLOBAL SCOPE and DEFINING NONE GLOBAL VARIABLES INSED FUCNTION */

let myGlobal = 10 /* since is defined with let , var or cons it will be visible and is inglobal scope */

function fun1() {
  
  oopsGlobal = 5; /* since it is inside the function it is not GLobal scoep and is not visible even if it has been defined */
}

/* LOCAL SCOPE  */
function fun1() {
  var oopsGlobal1 = 5;
  console.log(oopsGlobal1);
}

fun1(); /* Since the var is declared insed the fucntin once fucntion is executed it will pinrt the value defined inside the function 5 */

/* GLOBAL VS LOCAL */

const someVar = "Hat"; /* this variables has been over ride by  */

function myFun() {
  const someVar = "Head";
  return someVar;
}

myFun(); /* the function will return HEad as local scope goes over globa scope */

/* ASSIGNING RETURN VALUE TO A VARIABLE */

let processed = 0; /* first we initilize the variable */

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7); /* we assign the value of returned to variable processed  */

/* Stand in Line QUEUES */

function nextInLine(arr, item) {
 
  arr.push(item); /* it pushes to the end of the queue the vlue 6 argumentes* consol.log nextInLine */
  return arr.shift(); /* it will remove the first value of the array */
 
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* MATH RANDOM */
function randomFraction() {

  return Math.random ();
}

console.log (randomFraction()) /* it will return a decimal random number */

/* MATH FLOOR */

function randomWholeNum() {
  return Math.floor(Math.random()*10); /* math.floor will round numbers and neverereturn on 1 in this case it will return a number from 0 to 9 // check concept in notes */
}

console.log (randomWholeNum());

/* RANDOM NUMBER IN RANGE */

function randomRange(myMin, myMax) {
 
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; /* This equation takes a random number * the result of max numbe - myMin + 1 round the number with floor and then sum to my Min */
}

console.log (randomRange(2, 20)); /* This is the range that the equation will be using to det the number */

/* PARSEINT () */

function convertToInteger(str) { /* this function uses paseInt to turn string into numbers that then can be used for calculation */
  return parseInt (str); /* this fucniton will stop converting until there is a character non number and then will retunr NaN */
  }
  
  convertToInteger("56");

  /* PARSEINT ()  with RADIX */

  function convertToInteger(str) {
    return parseInt(str, 2); /* radix is the part that defines the mathematic bas of the str number put */
   }
   
   convertToInteger("10011");


   /* CONDITIONAL OPERATOR */

function checkEqual(a, b) { /* this is a way to use conditional operator to wirht if else statmenet   */
return a == b ? "Equal" : "Not Equal";   /* first part is condition finnished wiht ? and the the rest is the return if true and the return if false */
}

console.log (checkEqual(1, 2));

 /* MUTLIPLE CONDITONAL OPERATOR */

 function checkSign(num) {
  return (num > 0) ? "positive" /* separating statmenet is best practice for reaidng porposes */
  : (num < 0) ? "negative"
  : "zero"; /* this will execute when above conditions is false */
 }
 console.log (checkSign(-2));
 checkSign(10);

 /* RECURSION COUNT DOWN */
function countdown(n){
  if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1); 
      countArray.unshift(n); /* unshift is to remove so countdown will start from bigger to minor */
      return countArray;
    }
  }
  
  console.log (countdown(10));

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
/* 
  ********************************
  ********************************
  ********************************
  ********************************
 */

