/* ES6 */

/* Var VS let Scope EX from Exercise ES6 Freecode Camp Module */


function checkScope() {
  let i = 'function scope'; /* i is declared here with this value as is let is in this function {}scope the we can declare i again with another value as the scoend let i is on inside expresion scope */
  if (true) {
    let i = 'block scope'; /* The scope of i value is inside this boolean */
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i; /* the firs let i will be printed in the end as the boolen statement is what runs first and the retunr from function prints */
}

console.log ( checkScope());

/* MUTING CONST WITHN CONST (ARRAYS) */

const s = [5, 7, 2];
function editInPlace() {
s[0] = 2; /* const is mutable only when the declaration of the Array value points to himself like here*/
s[1] = 5;
s[2] = 7;
}
editInPlace();

/* PREVENTING OBJ  MUTATION by FREEZING VALUES WITH Objct.freeze TO PREVENT OBJ MUTAITON */

let obj = { /* Explanation example */
name:"FreeCodeCamp",
review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 

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

/* ARROW FUNCITONS */
/*
var magic = function() {
return new Date();
}; 
*/
const magic = () => new Date; /* the variable should be const in order to create arrow functions */ 

/* PASSING PARAMETERS TO ARROW FUCNTIONS */

/* var myConcat = function(arr1, arr2) {
return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5])); 
*/

const myConcat = (arr1, arr2) => arr1.concat(arr2); /* important to not forget that var is not accepted as variavle is should be const / local scope */

console.log(myConcat([1, 2], [3, 4, 5])); /* as per above the contact fucntion will concatenate the arr1 or arr 2 with the values you enters as one big ARRAY */

/* SETTING DEFAULT PARAMENTERS IN CASE NOT DEFINED */

const increment = (number, value = 1) => number + value; /* in case value is not defined with put the parameter 1 that will ve added as default */

/* REST PARAMETERS THAT TAKE A VARIABLE NUM OF ARGUMENTS  ...ARGS */

/* EX FROM CHALLENGE 
function howMany(...args) {
return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
*/

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

/* Explicació F code camp comparació amb extractió clasica ambd moderna
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age; 

VS

const { name, age } = user;
*/


const HIGH_TEMPERATURES = {
yesterday: 75,
today: 77,
tomorrow: 80
};

const today1 = HIGH_TEMPERATURES.today; /* Extractó classica  */ 
const tomorrow1 = HIGH_TEMPERATURES.tomorrow;

/* VS */

const {today, tomorrow} = HIGH_TEMPERATURES; /* Extarción de valors del objects moderna ES& */

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

/* DESTRUCTURING WITH REST ELEMENTS */ /* Check in JS notes to understand */


function removeFirstTwo([, , ...rest]) { /* entering an Array as argument ,, empty slots + "..."rest (varaible clalled rest) */
return rest;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; /* defines content array */
const sourceWithoutFirstTwo = removeFirstTwo(source); /* we make new const ) to funciton that enters const source as argument and since ... rest is present and the 2 ,, it will remove the  number 1,2 */

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

/* TEMPALTE LITERAL ${} to CREAT COMPLEX STRINGS */

const result1 = {
success: ["max-length", "no-amd", "prefer-arrow-functions"],
failure: ["no-var", "var-on-top", "linebreak"],
skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
const failureItems = [];
for (const item of arr) {
  failureItems.push(`<li class="text-warning">${item}</li>`);
}
return failureItems;
}

const failuresList = makeList(result1.failure);
console.log(failuresList);

/* AVOIDING REDUDANCY IN OBJECT WITH EQUIVALENT KEY PAIRS WITH SHORTHAND */

/* This will be without Shorthand
const examplecreatePerson = (name, age, gender) => ({
name:name,
age: age,
gender: gender
}); 

*/

const createPerson = (name, age, gender) => {
return ({ name, age, gender});

};

console.log(failuresList); /* This will print and obeject with equivalent key values */

/* SKIPING FUCNTION KEWYORD WITH FUCNITONS INSIDE OBJECTS */

/* this is how a fucniton in object looks in ES5 JS
const person = {
name: "Taylor",
sayHello: function() {
  return `Hello! My name is ${this.name}.`;
}
}; 
*/
const bicycle = {
gear: 2,
setGear (newGear) { /* "funciton" keyword to define funciton is remove as also the ":" */
  this.gear = newGear;
}
};
bicycle.setGear(3);
console.log(bicycle.gear);

/* CLASS SYNTAXT + CONSTRUCTOR FUNCTION */
/*
Respota proposada  following Chat GPT Correction
class Vegetable {
constructor(vegetableName){
  this.name = "carrot";
  this.color = "orange";
  this.family = "carotides";
}
Vegetables () {
  conosle.log ('${this.name}');
}
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);  */

class Vegetable {
constructor(vegetableName){
  this.name = "carrot";
}
}

const carrot = new Vegetable('carrot');/* the new Keyword creates a new instance for the object just created */
console.log(carrot.name); 


/* THERMOS STATE FARHENHEIT AND CELSIUS CONVERTOR */
class Thermostat {
constructor(fahrenheit) {
  this._fahrenheit = fahrenheit; // Initialize the temperature in Fahrenheit
}

// Create a getter method to obtain the temperature in Celsius
get temperature() {
  return (5 / 9) * (this._fahrenheit - 32);
}

// Create a setter method to set the temperature in Celsius
set temperature(celsius) {
  this._fahrenheit = (celsius * 9) / 5 + 32;
}
}

/* MODULE SCRIPT */

<script type="module" src="index.js"></script> /* convention to make JS merging with other files and code to export or important parts of it in a clean way */
/* this is How it would be integrated.....

<html>
<body>
  <script type="module" src="index.js"></script>
  <!-- Only change code below this line -->

  <!-- Only change code above this line -->
</body>
</html> */

/* EXPORT FUCNTION TO SHARE CODE */

const uppercaseString = (string) => {
return string.toUpperCase();
}

const lowercaseString = (string) => {
return string.toLowerCase()
}

export {uppercaseString, lowercaseString}; /* with this expression your are exporting both fucntions */

/* IMPORT  */

/* this is importing only one funciton...

import { uppercaseString1 } from './math_functions.js'; 

*/
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

/* USING "* AS" TO IMPORT EVERYTHING FORM A FILE */

import * as myMathModule from "./math_functions.js"; /* try this to console.log */

myMathModule.add(2,3);
myMathModule.subtract(5,3);

/* imports the whole funciton to another file */
import * as stringFunctions from './string_functions.js'
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

/* EXPORT FALLBACK FUNCTION --> EXPORT DEFAULT  */

function subtract(x, y) {
return x - y;
}

export default function (x, y) {
return x - y;
}

/* DEFAULT IMPORT */

import subtract2 from "./math_functions.js"

/* PROMISES */

const makeServerRequest = new Promise((resolve, reject) => { /* resolve and reject are the two KW need to create a promise */

});

/* COMPLET PROMISE THAT RESOLVES OR REJECTS DEPENDING CONDITIONS ENTERED */

const makeServerRequest1 = new Promise((resolve, reject) => {
// responseFromServer represents a response from a server
let responseFromServer;
  
if(responseFromServer) {
  resolve ("We got the data"); /* if condition set here is true it will resolve by printin the string */
} else {  
  reject ("Data not received");  /* else rejects by printing the string here */
}
});/* Keep in mind that prmosises are contained in a ( ) right after the Promise KW  */

/* THEN TO EXECUTE ACITON AFTER PROMISE IS COMPLETE*/

const makeServerRequest2 = new Promise((resolve, reject) => {
// responseFromServer is set to true to represent a successful response from a server
let responseFromServer = true;
  
if(responseFromServer) {
  resolve("We got the data");
} else {  
  reject("Data not received");
} makeServerRequest.then(result => { /* This then async action executed after running the promise that When TRUE is allows execution of action defined in THEN */
  console.log (result);
}); 
});

/* CATCH FOR REJECTED PROMISES */

const makeServerRequest3 = new Promise((resolve, reject) => {
// responseFromServer is set to false to represent an unsuccessful response from a server
let responseFromServer = false;
  
if(responseFromServer) {
  resolve("We got the data");
} else {  
  reject("Data not received");
}
});

makeServerRequest.catch(error => { /* catch willl execute right after the promises has been rejected */
console.log(error);
});

/* COPIY ARRAY WITH SPREAD AOPERATOR "..." from DATA ESTRUC AND ALGO MODULE////////*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

/* COMBINING ARRAYS WITH SPREAD OPERATOR ... ////// FROM DATAALGO */
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence =  ['learning',...fragment, 'is', 'fun']; /* ...fragment will include arrays values as part of the sentence array */
  return sentence;
}

console.log(spreadOut());

