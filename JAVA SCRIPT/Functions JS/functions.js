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