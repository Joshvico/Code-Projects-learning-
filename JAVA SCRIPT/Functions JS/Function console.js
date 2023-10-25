
/* 
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
    
    
/* FREEZING VALUES WITH Objct.freeze TO PREVENT OBJ MUTAITON */

    function freezeObj() {
      const MATH_CONSTANTS = {
        PI: 3.14
      };
        Object.freeze(MATH_CONSTANTS); /* This funciton prevenet PI to be assigned for 99 as you can see below, so it will always print PI= 3.14 */
      try {
        MATH_CONSTANTS.PI = 99;
      } catch(ex) {
        console.log(ex);
      }
      return MATH_CONSTANTS.PI;
      }
      const PI = freezeObj();

      
    console.log (freezeObj(PI)); /* it will always print 3.14 */

/* ARROW FUNCTIONS */
 /*
var magic = function() {
  return new Date();
}; 
*/
const magic = () => new Date; /* the variable should be const in order to create arrow functions */ 


/* PASSING PARAMETERS TO ARROW FUCNTIONS */

const myConcat = (arr1, arr2) => arr1.concat(arr2); /* important to not forget that var is not accepted as variavle is should be const / local scope */

console.log(myConcat([1, 2], [3, 4, 5])); /* as per above the contact fucntion will concatenate the arr1 or arr 2 with the values you enters as one big ARRAY */

/* SETTING DEFAULT PARAMENTERS IN CASE NOT DEFINED */
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting()); /* 1st it will print John and second will print anonymous as default since is not defined  */

const increment = (number, value = 1) => number + value; /* in case value is not defined with put the parameter 1 that will ve added as default */

/* REST PARAMETERS THAT TAKE A VARIABLE NUM OF ARGUMENTS  ...ARGS */

/* EX FROM CHALLENGE */
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { })); /* it will consol.log the number strings passesd ask defined in funciton with args.lenght  */
 

const sum = (...args) => { /* The args fucntion will allow to put any amount of arguments */
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log (sum(1,1,1,1,1,1)); /* This will print 6 as per loop is sumuning evry argument we enter */

/* SPREAD OPERATOR ...ARG */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY',];
let arr2;

arr2 = [...arr1];  /* Spread operator unpacks the arrays indidivally ad assignes a copy in another context, in this case to arr2 as defined in this line  */

console.log(arr2,);

/* DESTRUCTURING TO EXTARCT VALULES FORM OBEJECTS */

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const today1 = HIGH_TEMPERATURES.today; /* Extració classica  */ 
const tomorrow1 = HIGH_TEMPERATURES.tomorrow;/* Extració classica  */ 

/* VS */

const {today, tomorrow} = HIGH_TEMPERATURES; /* Extarción de valors del objects moderna ES6 */

/* DESTRUCTURING TO ASSING VARIABLES FORM OBJECTS */

const HIGH_TEMPERATURES2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const highToday1 = HIGH_TEMPERATURES.today;/*Assignació  classica  */
const highTomorrow1 = HIGH_TEMPERATURES.tomorrow; /*Assignació  classica  */

/* VS */  
const {today:highToday , tomorrow:highTomorrow} = HIGH_TEMPERATURES;/*Assignació de valors del objects moderna ES6  */

/* DESTRCUTURING TO EXTRAT AND REASSIGNE VARIABLES IN A NESTED OBJECT */
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const lowToday = LOCAL_FORECAST.today.low;/*Assignació  classica  */
const highToday2 = LOCAL_FORECAST.today.high;/*Assignació  classica  */

/* VS */  
const { today: {low: lowToday1, high: highToday3}}  = LOCAL_FORECAST; /*You are accesing object, value today and reassigning low to lowtaday1 and high to highToday3  */

/* DESTRUCTURING ARRAYS  */

let a = 8, b = 6;
[a, b] = [b, a];

console.log ([a,b]);

/* DESTRUCTURING WITH REST ELEMENTS */ /* check break down in Funciton theory*/

function removeFirstTwo([, , ...rest]) {
  return rest;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo); // [3, 4, 5, 6, 7, 8, 9, 10]


function removeFirstTwo2([, , , , ...list]) {/* ... define DESTRUCTURING ACTION the more comas the more num it will rmeove */
  return list;
}

const source1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo2 = removeFirstTwo2(source1);

console.log(sourceWithoutFirstTwo2); 

 /* DESTRCUCTURING TO PASS OBJ AS FUNTION PARAMETER */ 

 const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0; /* {} defines the parts of the object your are intesrested in */
const result = half(stats); /* 28.015 */

console.log (result);/* 28.015 */
console.log (half(stats));/* 28.015 */